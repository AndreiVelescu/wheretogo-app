import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  Int,
  Args,
  FieldResolver,
  Root,
} from 'type-graphql';
import { UsersService } from '../../users/users.service';
import { LocationsService } from '../../locations/locations.service';
import { TripsService } from '../../trips/trips.service';
import { NotificationsService } from '../../notifications/notifications.service';
import { MediaService } from '../../media/media.service';

import { MinioService } from '../../minio/minio.service';

import {
  AuthResponse,
  RefreshTokenResponse,
  MessageResponse,
  CreateUserInput,
  LoginUserInput,
  UpdateUserInput,
  AddFavoriteInput,
  CreateLocationInput,
  UpdateLocationInput,
  LocationFilterInput,
  User,
  Location,
  Trip,
  CreateTripInput,
  GenerateTripInput,
  NotificationResponse,
} from './types';
import { LocationFilterDto } from '../../locations/dto/location.dto';
import { jwtService, getUserIdFromContext } from './auth.helpers';
import { ChatService } from '../../chat/chat.service';

import { PrismaService } from '../../prisma/prisma.service';

const prismaService = new PrismaService();
const notificationsService = new NotificationsService();
const GOOGLE_PLACES_PHOTO_BASE_URL =
  'https://maps.googleapis.com/maps/api/place/photo';

const usersService = new UsersService(jwtService);
const locationsService = new LocationsService();

function isAbsoluteUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

function isGooglePlacesPhotoUrl(value: string): boolean {
  if (!isAbsoluteUrl(value)) {
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

function normalizeLocationPhotos(photos?: string[] | null): string[] {
  if (!Array.isArray(photos) || photos.length === 0) {
    return [];
  }

  const googleApiKey = process.env.GOOGLE_API_KEY;

  return photos
    .filter((photo): photo is string => typeof photo === 'string' && !!photo)
    .map((photo) => {
      if (isGooglePlacesPhotoUrl(photo)) {
        try {
          const url = new URL(photo);
          const photoReference =
            url.searchParams.get('photoreference') ||
            url.searchParams.get('photo_reference');
          const maxWidth = url.searchParams.get('maxwidth') || '1200';

          if (!photoReference || !googleApiKey) {
            return photo;
          }

          return `${GOOGLE_PLACES_PHOTO_BASE_URL}?maxwidth=${maxWidth}&photoreference=${encodeURIComponent(photoReference)}&key=${googleApiKey}`;
        } catch {
          return photo;
        }
      }

      if (isAbsoluteUrl(photo) || !googleApiKey) {
        return photo;
      }

      return `${GOOGLE_PLACES_PHOTO_BASE_URL}?maxwidth=1200&photoreference=${encodeURIComponent(photo)}&key=${googleApiKey}`;
    });
}

@Resolver(() => User)
export class UsersCustomResolver {
  @Mutation(() => AuthResponse)
  async register(
    @Arg('input') input: CreateUserInput,
    @Ctx() ctx: any,
  ): Promise<AuthResponse> {
    const result = await usersService.register(input as any);
    const user = await ctx.prisma.user.findUnique({
      where: { id: result.user.id },
    });

    return {
      access_token: result.access_token,
      refresh_token: result.refresh_token,
      user: { ...user, password: null },
    } as AuthResponse;
  }

  @Mutation(() => AuthResponse)
  async login(
    @Arg('input') input: LoginUserInput,
    @Ctx() ctx: any,
  ): Promise<AuthResponse> {
    const result = await usersService.login(input as any);
    const user = await ctx.prisma.user.findUnique({
      where: { id: result.user.id },
    });

    return {
      access_token: result.access_token,
      refresh_token: result.refresh_token,
      user: { ...user, password: null },
    } as AuthResponse;
  }

  @Mutation(() => RefreshTokenResponse)
  async refreshToken(
    @Arg('refreshToken') refreshToken: string,
  ): Promise<RefreshTokenResponse> {
    return usersService.refreshAccessToken(refreshToken);
  }

  @Mutation(() => Boolean)
  async logout(@Arg('refreshToken') refreshToken: string): Promise<boolean> {
    await usersService.revokeRefreshToken(refreshToken);
    return true;
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return usersService.getAllUsers() as any;
  }

  @Query(() => [User])
  async searchUsers(
    @Arg('query') query: string,
    @Arg('limit', () => Int, { defaultValue: 12 }) limit: number,
  ): Promise<User[]> {
    return usersService.searchUsers(query, limit) as any;
  }

  @Query(() => User)
  async user(@Arg('id', () => Int) id: number): Promise<User> {
    return usersService.getUserById(id) as any;
  }

  @Query(() => User)
  async me(@Ctx() ctx: any): Promise<User> {
    const userId = getUserIdFromContext(ctx);
    return usersService.getProfile(userId) as any;
  }

  @Mutation(() => User)
  async updateProfile(
    @Arg('input') input: UpdateUserInput,
    @Ctx() ctx: any,
  ): Promise<User> {
    const userId = getUserIdFromContext(ctx);
    return usersService.updateUser(userId, input as any) as any;
  }

  @Mutation(() => User)
  async updateUser(
    @Arg('id', () => Int) id: number,
    @Arg('input') input: UpdateUserInput,
  ): Promise<User> {
    return usersService.updateUser(id, input as any) as any;
  }

  @Mutation(() => MessageResponse)
  async deleteUser(
    @Arg('id', () => Int) id: number,
    @Ctx() ctx: any,
  ): Promise<MessageResponse> {
    getUserIdFromContext(ctx);
    return usersService.deleteUser(id) as any;
  }

  @Query(() => [Location])
  async myFavorites(@Ctx() ctx: any): Promise<Location[]> {
    const userId = getUserIdFromContext(ctx);
    return usersService.getFavorites(userId) as any;
  }

  @Mutation(() => MessageResponse)
  async addFavorite(
    @Arg('input') input: AddFavoriteInput,
    @Ctx() ctx: any,
  ): Promise<MessageResponse> {
    const userId = getUserIdFromContext(ctx);
    return usersService.addFavorite(userId, input as any) as any;
  }

  @Mutation(() => MessageResponse)
  async removeFavorite(
    @Arg('locationId', () => Int) locationId: number,
    @Ctx() ctx: any,
  ): Promise<MessageResponse> {
    const userId = getUserIdFromContext(ctx);
    return usersService.removeFavorite(userId, locationId) as any;
  }

  @Mutation(() => MessageResponse)
  async followUser(
    @Arg('targetUserId', () => Int) targetUserId: number,
    @Ctx() ctx: any,
  ): Promise<MessageResponse> {
    const userId = getUserIdFromContext(ctx);
    return usersService.followUser(userId, targetUserId) as any;
  }

  @Mutation(() => MessageResponse)
  async unfollowUser(
    @Arg('targetUserId', () => Int) targetUserId: number,
    @Ctx() ctx: any,
  ): Promise<MessageResponse> {
    const userId = getUserIdFromContext(ctx);
    return usersService.unfollowUser(userId, targetUserId) as any;
  }

  @Query(() => [User])
  async followers(@Arg('userId', () => Int) userId: number): Promise<User[]> {
    return usersService.getFollowers(userId) as any;
  }

  @Query(() => [User])
  async following(@Arg('userId', () => Int) userId: number): Promise<User[]> {
    return usersService.getFollowing(userId) as any;
  }

  @Query(() => Boolean)
  async favorite(
    @Arg('locationId', () => Int) locationId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    const favorite = await usersService.getOneFavorite(locationId, userId);
    return !!favorite;
  }

  @Query(() => Boolean)
  async isFollowing(
    @Arg('targetUserId', () => Int) targetUserId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    return usersService.isFollowing(userId, targetUserId);
  }

  @Mutation(() => User)
  async updateAvatar(
    @Arg('avatarUrl') avatarUrl: string,
    @Ctx() ctx: any,
  ): Promise<User> {
    const userId = getUserIdFromContext(ctx);
    return usersService.addAvatar(userId, avatarUrl) as any;
  }

  @Mutation(() => User)
  async removeAvatar(@Ctx() ctx: any): Promise<User> {
    const userId = getUserIdFromContext(ctx);
    return usersService.removeAvatar(userId) as any;
  }

  @Query(() => Boolean)
  async checkNicknameAvailable(
    @Arg('nickname') nickname: string,
  ): Promise<boolean> {
    return usersService.isNicknameAvailable(nickname);
  }
}

@Resolver(() => Location)
export class LocationsCustomResolver {
  @FieldResolver(() => [String])
  photos(@Root() location: Location): string[] {
    return normalizeLocationPhotos(location.photos);
  }

  @Mutation(() => Location)
  async createLocation(
    @Arg('input') input: CreateLocationInput,
    @Ctx() ctx: any,
  ): Promise<Location> {
    getUserIdFromContext(ctx);
    return locationsService.createLocation(input as any) as any;
  }

  @Query(() => [Location])
  async locations(
    @Arg('filter', () => LocationFilterInput, { nullable: true })
    filter: LocationFilterInput | undefined,
    @Ctx() ctx: any,
  ): Promise<Location[]> {
    const userId = ctx?.req?.user?.sub;
    return locationsService.getAllLocations(
      (filter as unknown as LocationFilterDto) || {},
      userId,
    ) as any;
  }

  @Query(() => [Location])
  async trendingLocations(
    @Arg('limit', () => Int, { defaultValue: 10 }) limit: number,
    @Ctx() ctx: any,
  ): Promise<Location[]> {
    const userId = ctx?.req?.user?.sub;
    return locationsService.getTrendingLocations(limit, userId) as any;
  }

  @Query(() => [Location])
  async locationsByType(
    @Arg('type') type: string,
    @Ctx() ctx: any,
  ): Promise<Location[]> {
    const userId = ctx?.req?.user?.sub;
    return locationsService.getLocationsByType(type, userId) as any;
  }

  @Query(() => Location)
  async location(
    @Arg('id', () => Int) id: number,
    @Ctx() ctx: any,
  ): Promise<Location> {
    const userId = ctx?.req?.user?.sub;
    return locationsService.getLocationById(id, userId) as any;
  }

  @Mutation(() => Location)
  async updateLocation(
    @Arg('id', () => Int) id: number,
    @Arg('input') input: UpdateLocationInput,
    @Ctx() ctx: any,
  ): Promise<Location> {
    getUserIdFromContext(ctx);
    return locationsService.updateLocation(id, input as any) as any;
  }

  @Mutation(() => MessageResponse)
  async deleteLocation(
    @Arg('id', () => Int) id: number,
    @Ctx() ctx: any,
  ): Promise<MessageResponse> {
    getUserIdFromContext(ctx);
    return locationsService.deleteLocation(id) as any;
  }

  @Mutation(() => Boolean)
  async isLikedByUser(
    @Arg('id', () => Int) id: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    return locationsService.isLikedByUser(id, userId) as any;
  }
}

// ─────────────────────────────────────────────────────────────
// NOTIFICATIONS RESOLVER
// ─────────────────────────────────────────────────────────────

@Resolver()
export class NotificationsCustomResolver {
  @Query(() => [NotificationResponse])
  async myNotifications(
    @Ctx() ctx: any,
    @Arg('unreadOnly', { defaultValue: false }) unreadOnly: boolean,
    @Arg('limit', () => Int, { defaultValue: 50 }) limit: number,
    @Arg('offset', () => Int, { defaultValue: 0 }) offset: number,
  ): Promise<NotificationResponse[]> {
    const userId = getUserIdFromContext(ctx);
    return notificationsService.getForUser(userId, {
      unreadOnly,
      limit,
      offset,
    }) as any;
  }

  @Query(() => Int)
  async unreadNotificationsCount(@Ctx() ctx: any) {
    const userId = getUserIdFromContext(ctx);
    return notificationsService.getUnreadCount(userId);
  }

  @Mutation(() => Boolean)
  async registerDeviceToken(
    @Ctx() ctx: any,
    @Arg('token') token: string,
    @Arg('platform') platform: string,
  ) {
    const userId = getUserIdFromContext(ctx);
    const platformEnum = platform.toUpperCase() as any;
    if (!['IOS', 'ANDROID', 'WEB'].includes(platformEnum)) {
      throw new Error('Invalid platform. Use: IOS, ANDROID, or WEB');
    }
    await notificationsService.registerDevice({
      userId,
      token,
      platform: platformEnum,
    });
    return true;
  }

  @Mutation(() => Boolean)
  async unregisterDeviceToken(@Arg('token') token: string) {
    await notificationsService.unregisterDevice(token);
    return true;
  }

  @Mutation(() => Boolean)
  async markNotificationAsRead(
    @Ctx() ctx: any,
    @Arg('notificationId', () => Int) notificationId: number,
  ) {
    const userId = getUserIdFromContext(ctx);
    await notificationsService.markAsRead(notificationId, userId);
    return true;
  }

  @Mutation(() => Boolean)
  async markAllNotificationsAsRead(@Ctx() ctx: any) {
    const userId = getUserIdFromContext(ctx);
    await notificationsService.markAllAsRead(userId);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteNotification(
    @Ctx() ctx: any,
    @Arg('notificationId', () => Int) notificationId: number,
  ) {
    const userId = getUserIdFromContext(ctx);
    await notificationsService.delete(notificationId, userId);
    return true;
  }
}

// Import FavoritesCustomResolver
import { FavoritesCustomResolver } from './favoritesResolver';
import { ScheduleResolver } from '../../schedules/schedule.resolver';
import { ChatResolver } from '../../chat/chat.resolver';
import { PostsResolver } from '../../posts/posts.resolver';
import { MediaResolver } from '../../media/media.resolver';
import { TripsCustomResolver } from '../../trips/trips.resolver';
import { UseGuards } from '@nestjs/common';
import { Context } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../users/guards/gql-auth.guard';

export const customResolvers = [
  UsersCustomResolver,
  LocationsCustomResolver,
  TripsCustomResolver,

  NotificationsCustomResolver,
  FavoritesCustomResolver,
  ScheduleResolver,
  ChatResolver,
  PostsResolver,
  MediaResolver,
];
