import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';
import {
  CreateLocationDto,
  UpdateLocationDto,
  LocationResponseDto,
  LocationFilterDto,
} from './dto/location.dto';

const prisma = new PrismaClient();
const GOOGLE_PLACES_PHOTO_BASE_URL =
  'https://maps.googleapis.com/maps/api/place/photo';

@Injectable()
export class LocationsService {
  async createLocation(
    createLocationDto: CreateLocationDto,
  ): Promise<LocationResponseDto> {
    const existingLocation = await prisma.location.findFirst({
      where: {
        name: createLocationDto.name,
        address: createLocationDto.address,
      },
    });

    if (existingLocation) {
      throw new ConflictException(
        'Location with this name and address already exists',
      );
    }

    const location = await prisma.location.create({
      data: {
        ...createLocationDto,
        // Ensure strictly undefined if not provided, though DTO handles this
        menuPdf: createLocationDto.menuPdf || null,
      },
      include: this.getCommonIncludes(undefined),
    });

    return this.transformToResponseDto(location);
  }

  async getAllLocations(
    filterDto?: LocationFilterDto,
    userId?: number,
  ): Promise<LocationResponseDto[]> {
    const where: Prisma.LocationWhereInput = {};

    if (filterDto?.type) {
      where.type = { contains: filterDto.type, mode: 'insensitive' };
    }
    if (filterDto?.priceRange) where.priceRange = filterDto.priceRange;
    if (filterDto?.vibes?.length) where.vibes = { hasSome: filterDto.vibes };

    if (filterDto?.search) {
      where.OR = [
        { name: { contains: filterDto.search, mode: 'insensitive' } },
        { description: { contains: filterDto.search, mode: 'insensitive' } },
        { address: { contains: filterDto.search, mode: 'insensitive' } },
      ];
    }

    let orderBy: Prisma.LocationOrderByWithRelationInput = {
      createdAt: 'desc',
    };
    if (filterDto?.sortBy === 'name') orderBy = { name: 'asc' };
    else if (filterDto?.sortBy === 'newest') orderBy = { createdAt: 'desc' };

    const locations = await prisma.location.findMany({
      where,
      include: this.getCommonIncludes(userId),
      orderBy,
    });

    let result = locations.map((location) =>
      this.transformToResponseDto(location, userId),
    );

    if (filterDto?.sortBy === 'rating') {
      result.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
    } else if (filterDto?.sortBy === 'trending') {
      result.sort(
        (a, b) =>
          this.calculateTrendingScore(b) - this.calculateTrendingScore(a),
      );
    }

    return result;
  }

  async getLocationById(
    id: number,
    userId?: number,
  ): Promise<LocationResponseDto> {
    const location = await prisma.location.findUnique({
      where: { id },
      include: {
        ...this.getCommonIncludes(userId),
        reviews: {
          take: 10,
          orderBy: { createdAt: 'desc' },
          include: {
            user: { select: { id: true, name: true, avatar: true } }, // Added avatar
          },
        },
        events: {
          where: { date: { gte: new Date() } },
          orderBy: { date: 'asc' },
          take: 5,
        },
      },
    });

    if (!location) {
      throw new NotFoundException('Location not found');
    }

    return this.transformToResponseDto(location, userId);
  }

  async updateLocation(
    id: number,
    updateLocationDto: UpdateLocationDto,
  ): Promise<LocationResponseDto> {
    try {
      const updatedLocation = await prisma.location.update({
        where: { id },
        data: updateLocationDto,
        include: this.getCommonIncludes(undefined),
      });
      return this.transformToResponseDto(updatedLocation);
    } catch (error) {
      // P2025 is Prisma's "Record not found" error code
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Location not found');
      }
      throw error;
    }
  }

  async deleteLocation(id: number): Promise<{ message: string }> {
    try {
      await prisma.location.delete({ where: { id } });
      return { message: 'Location deleted successfully' };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Location not found');
      }
      throw error;
    }
  }

  // --- Helpers ---

  async getTrendingLocations(
    limit: number,
    userId?: number,
  ): Promise<LocationResponseDto[]> {
    const locations = await prisma.location.findMany({
      include: this.getCommonIncludes(userId),
      // In a real app, restrict this query by date or popularity to save DB resources
    });

    return locations
      .map((loc) => this.transformToResponseDto(loc, userId))
      .sort(
        (a, b) =>
          this.calculateTrendingScore(b) - this.calculateTrendingScore(a),
      )
      .slice(0, limit);
  }

  async getLocationsByType(
    type: string,
    userId?: number,
  ): Promise<LocationResponseDto[]> {
    return this.getAllLocations({ type }, userId);
  }

  private getCommonIncludes(userId?: number): Prisma.LocationInclude {
    return {
      favorites: userId ? { where: { userId }, select: { id: true } } : false,
      reviews: { select: { rating: true, createdAt: true } },
      _count: {
        select: {
          reviews: true,
          favorites: true,
          events: true,
          bookings: true,
        },
      },
    };
  }

  async isLikedByUser(locationId: number, userId: number): Promise<boolean> {
    const favorite = await prisma.favorite.findFirst({
      where: { locationId, userId },
    });
    return !!favorite;
  }

  private transformToResponseDto(
    location: any,
    userId?: number,
  ): LocationResponseDto {
    const reviewCount = location._count?.reviews || 0;

    // Calculate Average
    const averageRating =
      reviewCount > 0 && location.reviews
        ? location.reviews.reduce((sum: number, r: any) => sum + r.rating, 0) /
          location.reviews.length
        : 0;

    // Calculate Recent Reviews
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentReviewsCount =
      location.reviews?.filter(
        (r: any) => new Date(r.createdAt) >= sevenDaysAgo,
      ).length || 0;

    const trendingScore = this.calculateTrendingScore({
      averageRating,
      reviewCount,
      recentReviews: recentReviewsCount,
      favoriteCount: location._count?.favorites || 0,
    });

    return {
      id: location.id,
      name: location.name,
      description: location.description || '', // Handle nulls
      type: location.type,
      priceRange: location.priceRange || '',
      vibes: location.vibes,
      address: location.address || '',
      // Ensure String type for DTO
      openHours:
        typeof location.openHours === 'object'
          ? JSON.stringify(location.openHours)
          : location.openHours || '',
      photos: this.buildServablePhotoUrls(location.photos),
      menuPdf: location.menuPdf,
      createdAt: location.createdAt,
      averageRating: Number(averageRating.toFixed(1)),
      reviewCount,
      isHype: trendingScore > 50,
      isFavorite: !!(location.favorites && location.favorites.length > 0),
    };
  }

  private calculateTrendingScore(input: any): number {
    const averageRating = input.averageRating || 0;
    const reviewCount = input.reviewCount || 0;
    const recentReviews = input.recentReviews || 0;
    const favoriteCount = input.favoriteCount || 0;

    return (
      averageRating * 10 +
      Math.log(reviewCount + 1) * 5 +
      recentReviews * 15 +
      Math.log(favoriteCount + 1) * 3
    );
  }

  private buildServablePhotoUrls(
    photos: string[] | null | undefined,
  ): string[] {
    if (!Array.isArray(photos) || photos.length === 0) {
      return [];
    }

    return photos
      .filter((photo): photo is string => typeof photo === 'string' && !!photo)
      .map((photo) => this.toServablePhotoUrl(photo));
  }

  private toServablePhotoUrl(photo: string): string {
    const googleApiKey = process.env.GOOGLE_API_KEY;

    if (this.isGooglePlacesPhotoUrl(photo)) {
      return this.normalizeGooglePlacesPhotoUrl(photo, googleApiKey);
    }

    if (this.isAbsoluteUrl(photo)) {
      return photo;
    }

    if (!googleApiKey) {
      return photo;
    }

    const encodedReference = encodeURIComponent(photo);
    return `${GOOGLE_PLACES_PHOTO_BASE_URL}?maxwidth=1200&photoreference=${encodedReference}&key=${googleApiKey}`;
  }

  private isAbsoluteUrl(value: string): boolean {
    return /^https?:\/\//i.test(value);
  }

  private isGooglePlacesPhotoUrl(value: string): boolean {
    if (!this.isAbsoluteUrl(value)) {
      return false;
    }

    try {
      const url = new URL(value);
      return (
        url.hostname === 'maps.googleapis.com' &&
        url.pathname === '/maps/api/place/photo'
      );
    } catch {
      return false;
    }
  }

  private normalizeGooglePlacesPhotoUrl(
    value: string,
    googleApiKey?: string,
  ): string {
    try {
      const url = new URL(value);
      const photoReference =
        url.searchParams.get('photoreference') ||
        url.searchParams.get('photo_reference');
      const maxWidth = url.searchParams.get('maxwidth') || '1200';

      if (!photoReference || !googleApiKey) {
        return value;
      }

      const encodedReference = encodeURIComponent(photoReference);
      return `${GOOGLE_PLACES_PHOTO_BASE_URL}?maxwidth=${maxWidth}&photoreference=${encodedReference}&key=${googleApiKey}`;
    } catch {
      return value;
    }
  }
}
