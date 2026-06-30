import { Query, Resolver, Mutation, Arg, Int, Ctx } from 'type-graphql';
import { ScheduleService } from './schedule.service';
import { ScheduleLocationInCalendar } from '../generated/typegraphql';
import { getUserIdFromContext } from '../graphql/custom/auth.helpers';

@Resolver()
export class ScheduleResolver {
  private readonly scheduleService = new ScheduleService();

  @Query(() => [ScheduleLocationInCalendar])
  async mySchedules(@Ctx() ctx: any): Promise<ScheduleLocationInCalendar[]> {
    const userId = getUserIdFromContext(ctx);
    return this.scheduleService.getScheduledLocationsForUser(userId);
  }

  @Query(() => [ScheduleLocationInCalendar])
  async mySchedulesByDate(
    @Ctx() ctx: any,
    @Arg('date') date: string,
  ): Promise<ScheduleLocationInCalendar[]> {
    const userId = getUserIdFromContext(ctx);
    return this.scheduleService.getScheduledLocationsForUserByDate(
      userId,
      new Date(date),
    );
  }

  @Mutation(() => ScheduleLocationInCalendar)
  async scheduleLocation(
    @Ctx() ctx: any,
    @Arg('locationId', () => Int) locationId: number,
    @Arg('scheduledDate') scheduledDate: string,
  ): Promise<ScheduleLocationInCalendar> {
    const userId = getUserIdFromContext(ctx);
    return this.scheduleService.scheduleLocationForUser(
      userId,
      locationId,
      new Date(scheduledDate),
    );
  }

  @Mutation(() => Boolean)
  async removeScheduledLocation(
    @Ctx() ctx: any,
    @Arg('locationId', () => Int) locationId: number,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.scheduleService.removeScheduledLocationForUser(
      userId,
      locationId,
    );
    return true;
  }

  @Mutation(() => ScheduleLocationInCalendar)
  async updateScheduledDate(
    @Ctx() ctx: any,
    @Arg('locationId', () => Int) locationId: number,
    @Arg('newDate') newDate: string,
  ): Promise<ScheduleLocationInCalendar> {
    const userId = getUserIdFromContext(ctx);
    return this.scheduleService.updateScheduledDateForLocation(
      userId,
      locationId,
      new Date(newDate),
    );
  }
}
