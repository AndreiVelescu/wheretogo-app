import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { GooglePlacesService } from './google-places.service';

const prisma = new PrismaClient();

@Injectable()
export class GoogleImportService {
  private readonly logger = new Logger(GoogleImportService.name);
  private readonly concurrency = Number(process.env.IMPORT_CONCURRENCY || 5);
  private readonly retryAttempts = Number(
    process.env.IMPORT_RETRY_ATTEMPTS || 3,
  );
  private readonly retryBackoff = Number(
    process.env.IMPORT_RETRY_BACKOFF_MS || 1000,
  );
  private readonly cachePath =
    process.env.IMPORT_CACHE_PATH || path.resolve('.import_cache.json');
  private cache: Record<string, any> = {};

  private cities = ['Chisinau'];

  private types = [
    'park',
    'parc',
    'park',
    'recreation_ground',
    'playground',
    'national_park',
    'amusement_park',
    'rv_park',
    'campground',
    'tourist_attraction',
    'nature_reserve',
    'botanical_garden',
    'zoo',
    'aquarium',
    'stadium',
    'sports_complex',
    'golf_course',
    'ski_resort',
    'water_park',
    'theme_park',
    'picnic_ground',
  ];

  constructor(private google: GooglePlacesService) {
    this.loadCache();
  }

  // Simple concurrency limiter
  private createConcurrencyLimiter(concurrency: number) {
    let running = 0;
    const queue: Array<() => void> = [];

    return async <T>(fn: () => Promise<T>): Promise<T> => {
      return new Promise((resolve, reject) => {
        const execute = async () => {
          running++;
          try {
            const result = await fn();
            resolve(result);
          } catch (error) {
            reject(error);
          } finally {
            running--;
            if (queue.length > 0 && running < concurrency) {
              const next = queue.shift();
              if (next) next();
            }
          }
        };

        if (running < concurrency) {
          execute();
        } else {
          queue.push(execute);
        }
      });
    };
  }

  // load/save cache to avoid re-fetching details repeatedly
  private loadCache() {
    try {
      if (fs.existsSync(this.cachePath)) {
        const raw = fs.readFileSync(this.cachePath, 'utf-8');
        this.cache = JSON.parse(raw);
        this.logger.log(
          `Loaded cache with ${Object.keys(this.cache).length} entries`,
        );
      }
    } catch (e) {
      this.logger.warn('Failed to load cache, starting empty');
      this.cache = {};
    }
  }

  private saveCache() {
    try {
      fs.writeFileSync(this.cachePath, JSON.stringify(this.cache, null, 2));
      this.logger.log('Cache saved');
    } catch (e) {
      this.logger.warn('Failed to save cache');
    }
  }

  private async retry<T>(
    fn: () => Promise<T>,
    attempts = this.retryAttempts,
  ): Promise<T> {
    let lastErr: any = null;
    for (let i = 0; i < attempts; i++) {
      try {
        return await fn();
      } catch (e) {
        lastErr = e;
        const backoff = this.retryBackoff * Math.pow(2, i);
        this.logger.warn(`Attempt ${i + 1} failed, retrying in ${backoff}ms`);
        await new Promise((r) => setTimeout(r, backoff));
      }
    }
    throw lastErr;
  }

  // Clear all Google imported locations
  async clearGoogleImportedLocations() {
    this.logger.log('Clearing all Google imported locations...');

    const deletedCount = await prisma.location.deleteMany({
      where: {
        googleImported: true,
      },
    });

    this.logger.log(`Deleted ${deletedCount.count} Google imported locations`);

    // Clear cache as well
    this.cache = {};
    this.saveCache();

    return {
      message: `Deleted ${deletedCount.count} Google imported locations`,
    };
  }

  async clearUnwantedParks() {
    this.logger.log('Clearing unwanted parks and parking locations...');

    // First, find all unwanted locations by type
    const unwantedLocations = await prisma.location.findMany({
      where: {
        OR: [
          // Delete by unwanted types
          { type: 'rv_park' },
          { type: 'campground' },
          { type: 'water_park' },
          { type: 'theme_park' },
          { type: 'amusement_park' },
          { type: 'aquarium' },
          // Delete parking-related by name
          {
            name: {
              contains: 'Parking',
            },
          },
          {
            name: {
              contains: 'Parcari',
            },
          },
          {
            name: {
              contains: 'Car Park',
            },
          },
          // Delete aqua/water parks by name
          {
            name: {
              contains: 'Aqua',
            },
          },
          {
            name: {
              contains: 'Water Park',
            },
          },
          {
            name: {
              contains: 'Amusement',
            },
          },
          // Delete parks not in Chisinau (those that don't have Chisinau in address)
          {
            AND: [
              { type: 'park' },
              {
                NOT: {
                  OR: [
                    {
                      address: {
                        contains: 'Chisinau',
                      },
                    },
                    {
                      address: {
                        contains: 'Chișinău',
                      },
                    },
                  ],
                },
              },
            ],
          },
          // Delete generic "Park" entries
          {
            AND: [{ name: 'Park' }, { type: 'park' }],
          },
        ],
      },
      select: { id: true },
    });

    const locationIds = unwantedLocations.map((loc) => loc.id);

    if (locationIds.length === 0) {
      this.logger.log('No unwanted park locations found');
      return { message: 'No unwanted park locations to delete' };
    }

    this.logger.log(
      `Found ${locationIds.length} unwanted park locations to delete`,
    );

    // Delete all related records first (to avoid foreign key constraints)
    const deletedFavorites = await prisma.favorite.deleteMany({
      where: { locationId: { in: locationIds } },
    });
    this.logger.log(`Deleted ${deletedFavorites.count} favorites`);

    const deletedReviews = await prisma.review.deleteMany({
      where: { locationId: { in: locationIds } },
    });
    this.logger.log(`Deleted ${deletedReviews.count} reviews`);

    const deletedBookings = await prisma.booking.deleteMany({
      where: { locationId: { in: locationIds } },
    });
    this.logger.log(`Deleted ${deletedBookings.count} bookings`);

    const deletedNotifications = await prisma.notification.deleteMany({
      where: { locationId: { in: locationIds } },
    });
    this.logger.log(`Deleted ${deletedNotifications.count} notifications`);

    const deletedEvents = await prisma.event.deleteMany({
      where: { locationId: { in: locationIds } },
    });
    this.logger.log(`Deleted ${deletedEvents.count} events`);

    // Now delete the unwanted locations
    const deletedCount = await prisma.location.deleteMany({
      where: { id: { in: locationIds } },
    });

    this.logger.log(`Deleted ${deletedCount.count} unwanted park locations`);

    return {
      message: `Deleted ${deletedCount.count} unwanted park locations and all related data`,
      details: {
        locations: deletedCount.count,
        favorites: deletedFavorites.count,
        reviews: deletedReviews.count,
        bookings: deletedBookings.count,
        notifications: deletedNotifications.count,
        events: deletedEvents.count,
      },
    };
  }

  // Main import flow
  async importAll() {
    const limit = this.createConcurrencyLimiter(this.concurrency);

    for (const city of this.cities) {
      for (const type of this.types) {
        const query = `${type} in ${city}, Moldova`;
        this.logger.log(`Starting TextSearch for: ${query}`);

        const places = await this.retry(() => this.google.textSearchAll(query));

        // For each place, fetch details (concurrently with limit)
        const detailPromises = places.map((p) =>
          limit(async () => {
            const placeId = p.place_id;
            try {
              let details = this.cache[placeId];
              if (!details) {
                details = await this.retry(() =>
                  this.google.getPlaceDetails(placeId),
                );
                this.cache[placeId] = details;
              }

              await this.upsertLocationFromDetails(details, type, city);
              this.logger.log(`Imported: ${details.name} (${city})`);
            } catch (e) {
              this.logger.error(`Failed import for ${placeId} (${p.name})`, e);
            }
          }),
        );

        await Promise.all(detailPromises);
        // save cache after each (type,city) batch to persist progress
        this.saveCache();
      }
    }

    this.logger.log('Import finished for all cities/types');
    return { message: 'Import finished' };
  }

  private async upsertLocationFromDetails(
    details: any,
    type: string,
    city?: string,
  ) {
    const placeId: string = details.place_id;
    const name: string = details.name || 'Unnamed';
    const address: string = details.formatted_address || null;
    const lat = details.geometry?.location?.lat ?? null;
    const lng = details.geometry?.location?.lng ?? null;
    const rating = details.rating ?? null;
    const userRatingsTotal = details.user_ratings_total ?? null;
    const website = details.website ?? null;
    const phone = details.formatted_phone_number ?? null;
    const googleUrl = details.url ?? null;
    // Store Google's opening_hours object as a JSON string (column is String?).
    // The trip planner parses this back to filter stops by opening hours.
    const openHours = details.opening_hours
      ? JSON.stringify(details.opening_hours)
      : null;
    // Photos must come from the Places API (New); the legacy photo endpoint
    // (and its photo_reference values) is retired and returns HTTP 400.
    const photos: string[] = await this.google.getPhotoUrls(placeId);

    // Get full types array from Google Places
    const types: string[] = details.types ?? [];

    // Only update fields that are present to avoid overwriting manual edits
    const updateData: any = {
      name,
      type,
      types,
      address,
      lat,
      lng,
      rating,
      userRatingsTotal,
      website,
      phone,
      googleUrl,
      openHours,
      photos,
      googleImported: true,
    };

    // Upsert
    await prisma.location.upsert({
      where: { placeId },
      update: updateData,
      create: {
        placeId,
        name,
        description: types.join(', ') ?? null,
        type,
        types,
        priceRange: null,
        vibes: [],
        address,
        lat,
        lng,
        rating,
        userRatingsTotal,
        website,
        phone,
        googleUrl,
        openHours,
        photos,
        googleImported: true,
      },
    });
  }
}
