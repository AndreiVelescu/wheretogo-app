import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Location } from './models/location.model';
import {
  CreateLocationInput,
  UpdateLocationInput,
  LocationFilterInput,
} from './inputs/location.input';
import { GqlAuthGuard } from '../users/guards/gql-auth.guard';
import { MessageResponse } from '../common/models/message-response.model';
import { LocationFilterDto } from './dto/location.dto';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private locationsService: LocationsService) {}

  @Mutation(() => Location)
  @UseGuards(GqlAuthGuard)
  async createLocation(
    @Args('input') input: CreateLocationInput,
  ): Promise<Location> {
    return this.locationsService.createLocation(input);
  }

  @Query(() => [Location])
  async locations(
    @Args('filter', { nullable: true }) filter: LocationFilterInput,
    @Context() context,
  ): Promise<Location[]> {
    const userId = context.req.user?.sub;
    return this.locationsService.getAllLocations(
      (filter as LocationFilterDto) || {},
      userId,
    );
  }

  @Query(() => [Location])
  async trendingLocations(
    @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
    @Context() context,
  ): Promise<Location[]> {
    const userId = context.req.user?.sub;
    return this.locationsService.getTrendingLocations(limit, userId);
  }

  @Query(() => [Location])
  async locationsByType(
    @Args('type') type: string,
    @Context() context,
  ): Promise<Location[]> {
    const userId = context.req.user?.sub;
    return this.locationsService.getLocationsByType(type, userId);
  }

  @Query(() => Location)
  async location(
    @Args('id', { type: () => Int }) id: number,
    @Context() context,
  ): Promise<Location> {
    const userId = context.req.user?.sub;
    return this.locationsService.getLocationById(id, userId);
  }

  @Mutation(() => Location)
  @UseGuards(GqlAuthGuard)
  async updateLocation(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateLocationInput,
  ): Promise<Location> {
    return this.locationsService.updateLocation(id, input);
  }

  @Mutation(() => MessageResponse)
  @UseGuards(GqlAuthGuard)
  async deleteLocation(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<MessageResponse> {
    return this.locationsService.deleteLocation(id);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async isLikedByUser(
    @Args('id', { type: () => Int }) id: number,
    @Context() context,
  ): Promise<boolean> {
    const userId = context.req.user?.sub;
    return this.locationsService.isLikedByUser(id, userId);
  }
}
