import { Resolver, Query, Mutation, Arg, Int, Ctx } from 'type-graphql';
import { NotificationsService } from './notifications.service';
import { Platform } from '@prisma/client';

@Resolver()
export class NotificationsResolver {
  private readonly notificationsService = new NotificationsService();

  @Query(() => [Object], { nullable: true })
  async myNotifications(
    @Ctx() ctx: any,
    @Arg('unreadOnly', { defaultValue: false }) unreadOnly: boolean,
    @Arg('limit', () => Int, { defaultValue: 50 }) limit: number,
    @Arg('offset', () => Int, { defaultValue: 0 }) offset: number,
  ) {
    const userId = ctx.user?.id;
    if (!userId) throw new Error('Not authenticated');

    return this.notificationsService.getForUser(userId, {
      unreadOnly,
      limit,
      offset,
    });
  }

  @Query(() => Int)
  async unreadNotificationsCount(@Ctx() ctx: any) {
    const userId = ctx.user?.id;
    if (!userId) throw new Error('Not authenticated');

    return this.notificationsService.getUnreadCount(userId);
  }

  @Mutation(() => Boolean)
  async registerDeviceToken(
    @Ctx() ctx: any,
    @Arg('token') token: string,
    @Arg('platform') platform: string,
  ) {
    const userId = ctx.user?.id;
    if (!userId) throw new Error('Not authenticated');

    const platformEnum = platform.toUpperCase() as Platform;
    if (!['IOS', 'ANDROID', 'WEB'].includes(platformEnum)) {
      throw new Error('Invalid platform');
    }

    await this.notificationsService.registerDevice({
      userId,
      token,
      platform: platformEnum,
    });

    return true;
  }

  @Mutation(() => Boolean)
  async unregisterDeviceToken(@Arg('token') token: string) {
    await this.notificationsService.unregisterDevice(token);
    return true;
  }

  @Mutation(() => Boolean)
  async markNotificationAsRead(
    @Ctx() ctx: any,
    @Arg('notificationId', () => Int) notificationId: number,
  ) {
    const userId = ctx.user?.id;
    if (!userId) throw new Error('Not authenticated');

    await this.notificationsService.markAsRead(notificationId, userId);
    return true;
  }

  @Mutation(() => Boolean)
  async markAllNotificationsAsRead(@Ctx() ctx: any) {
    const userId = ctx.user?.id;
    if (!userId) throw new Error('Not authenticated');

    await this.notificationsService.markAllAsRead(userId);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteNotification(
    @Ctx() ctx: any,
    @Arg('notificationId', () => Int) notificationId: number,
  ) {
    const userId = ctx.user?.id;
    if (!userId) throw new Error('Not authenticated');

    await this.notificationsService.delete(notificationId, userId);
    return true;
  }
}
