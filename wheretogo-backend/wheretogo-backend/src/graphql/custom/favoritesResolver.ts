import { Resolver, Query, Mutation, Arg, Ctx, Int } from 'type-graphql';
import { UsersService } from '../../users/users.service';
import { Location, MessageResponse } from './types';
import { jwtService, getUserIdFromContext } from './auth.helpers';

const usersService = new UsersService(jwtService);

@Resolver()
export class FavoritesCustomResolver {
  // Get all user's favorites
  @Query(() => [Location])
  async myFavorites(@Ctx() ctx: any): Promise<Location[]> {
    const userId = getUserIdFromContext(ctx);
    return usersService.getFavorites(userId) as any;
  }

  // Check if location is favorited
  @Query(() => Boolean)
  async isLocationFavorited(
    @Ctx() ctx: any,
    @Arg('locationId', () => Int) locationId: number,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    const favorite = await usersService.getOneFavorite(locationId, userId);
    return !!favorite;
  }

  // Toggle favorite (add or remove)
  @Mutation(() => MessageResponse)
  async toggleFavorite(
    @Ctx() ctx: any,
    @Arg('locationId', () => Int) locationId: number,
  ): Promise<{ message: string }> {
    const userId = getUserIdFromContext(ctx);
    return usersService.addFavorite(userId, { locationId });
  }

  // Add to favorites
  @Mutation(() => MessageResponse)
  async addToFavorites(
    @Ctx() ctx: any,
    @Arg('locationId', () => Int) locationId: number,
  ): Promise<{ message: string }> {
    const userId = getUserIdFromContext(ctx);
    const existing = await usersService.getOneFavorite(locationId, userId);
    if (existing) {
      return { message: 'Already in favorites' };
    }
    return usersService.addFavorite(userId, { locationId });
  }

  // Remove from favorites
  @Mutation(() => MessageResponse)
  async removeFromFavorites(
    @Ctx() ctx: any,
    @Arg('locationId', () => Int) locationId: number,
  ): Promise<{ message: string }> {
    const userId = getUserIdFromContext(ctx);
    return usersService.removeFavorite(userId, locationId);
  }
}
