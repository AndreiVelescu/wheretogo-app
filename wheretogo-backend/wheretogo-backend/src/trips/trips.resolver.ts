import { Resolver, Mutation, Query, Int, Arg, Ctx } from 'type-graphql';
import { TripsService } from './trips.service';
import { Trip } from '../generated/typegraphql';
import {
  CreateTripInput,
  GenerateTripInput,
  MessageResponse,
  UpdateTripInput,
} from '../graphql/custom/types';
import { getUserIdFromContext } from '../graphql/custom/auth.helpers';
import { NotificationsService } from '../notifications/notifications.service';
import { UsersService } from '../users/users.service';

@Resolver(() => Trip)
export class TripsCustomResolver {
  constructor(
    private readonly tripsService: TripsService,
    private readonly notificationsService: NotificationsService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => Trip)
  async createTrip(
    @Arg('input') input: CreateTripInput,
    @Ctx() ctx: any,
  ): Promise<Trip> {
    const ownerId = getUserIdFromContext(ctx);
    return this.tripsService.createTrip(ownerId, {
      ...input,
      startDate: new Date(input.startDate),
      endDate: new Date(input.endDate),
      days: input.days?.map((day) => ({
        ...day,
        date: new Date(day.date),
      })),
    } as any) as any;
  }

  @Mutation(() => Trip)
  async generateTrip(
    @Arg('input') input: GenerateTripInput,
    @Ctx() ctx: any,
  ): Promise<Trip> {
    const ownerId = getUserIdFromContext(ctx);
    return this.tripsService.generateTrip(ownerId, {
      ...input,
      startDate: new Date(input.startDate),
    } as any) as any;
  }

  @Query(() => Trip)
  async trip(@Arg('id', () => Int) id: number, @Ctx() ctx: any): Promise<Trip> {
    const ownerId = getUserIdFromContext(ctx);
    return this.tripsService.getTripById(id, ownerId) as any;
  }

  @Query(() => [Trip])
  async trips(@Ctx() ctx: any): Promise<Trip[]> {
    const ownerId = getUserIdFromContext(ctx);
    return this.tripsService.getTripsByOwner(ownerId) as any;
  }

  @Mutation(() => Trip)
  async updateTrip(
    @Arg('input') input: UpdateTripInput,
    @Ctx() ctx: any,
  ): Promise<Trip> {
    const ownerId = getUserIdFromContext(ctx);
    return this.tripsService.updateTrip(input.id, ownerId, {
      ...input,
      startDate: input.startDate ? new Date(input.startDate) : undefined,
      endDate: input.endDate ? new Date(input.endDate) : undefined,
    } as any) as any;
  }

  @Mutation(() => Trip)
  async reorderTripDayStops(
    @Arg('tripDayId', () => Int) tripDayId: number,
    @Arg('stopIds', () => [Int]) stopIds: number[],
    @Ctx() ctx: any,
  ): Promise<Trip> {
    const userId = getUserIdFromContext(ctx);
    return this.tripsService.reorderDayStops(
      userId,
      tripDayId,
      stopIds,
    ) as any;
  }

  @Mutation(() => Trip)
  async changeTripStatus(
    @Arg('tripId', () => Int) tripId: number,
    @Arg('status') status: string,
    @Ctx() ctx: any,
  ): Promise<Trip> {
    const ownerId = getUserIdFromContext(ctx);
    return this.tripsService.changeTripStatus(tripId, ownerId, status) as any;
  }

  @Mutation(() => MessageResponse)
  async deleteTrip(
    @Arg('tripId', () => Int) tripId: number,
    @Ctx() ctx: any,
  ): Promise<MessageResponse> {
    const ownerId = getUserIdFromContext(ctx);
    return this.tripsService.deleteTrip(tripId, ownerId) as any;
  }

  @Mutation(() => Boolean)
  async addTripCollaborator(
    @Ctx() ctx: any,
    @Arg('tripId', () => Int) tripId: number,
    @Arg('email') email: string,
    @Arg('role', { defaultValue: 'VIEWER' }) role: string,
  ): Promise<boolean> {
    const ownerId = getUserIdFromContext(ctx);
    const ownerName = await this.usersService.getUserName(ownerId);

    const roleEnum = role.toUpperCase() as any;
    const result = await this.tripsService.addCollaborator(
      tripId,
      ownerId,
      email,
      roleEnum,
    );

    // 🔔 Send notification to the added collaborator
    await this.notificationsService.notifyTripCollaboratorAdded(
      tripId,
      result.tripTitle,
      result.addedUserId,
      ownerName,
    );

    return true;
  }

  @Mutation(() => Boolean)
  async removeTripCollaborator(
    @Ctx() ctx: any,
    @Arg('tripId', () => Int) tripId: number,
    @Arg('userId', () => Int) userId: number,
  ): Promise<boolean> {
    const ownerId = getUserIdFromContext(ctx);
    await this.tripsService.removeCollaborator(tripId, ownerId, userId);
    return true;
  }
}
