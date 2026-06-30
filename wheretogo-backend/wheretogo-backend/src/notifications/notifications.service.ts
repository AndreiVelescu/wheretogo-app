import { Injectable, Logger } from '@nestjs/common';
import {
  PrismaClient,
  NotificationType,
  Platform,
  Prisma,
} from '@prisma/client';
import {
  CreateNotificationDto,
  RegisterDeviceDto,
} from './dto/notification.dto';

const prisma = new PrismaClient();

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  // ─────────────────────────────────────────────────────────────
  // DEVICE TOKEN MANAGEMENT
  // ─────────────────────────────────────────────────────────────

  async registerDevice(dto: RegisterDeviceDto) {
    return prisma.deviceToken.upsert({
      where: { token: dto.token },
      update: {
        userId: dto.userId,
        platform: dto.platform,
        isActive: true,
        updatedAt: new Date(),
      },
      create: {
        userId: dto.userId,
        token: dto.token,
        platform: dto.platform,
      },
    });
  }

  async unregisterDevice(token: string) {
    return prisma.deviceToken.updateMany({
      where: { token },
      data: { isActive: false },
    });
  }

  async getActiveTokensForUser(userId: number): Promise<string[]> {
    const tokens = await prisma.deviceToken.findMany({
      where: { userId, isActive: true },
      select: { token: true },
    });
    return tokens.map((t) => t.token);
  }

  async getActiveTokensForUsers(
    userIds: number[],
  ): Promise<Map<number, string[]>> {
    const tokens = await prisma.deviceToken.findMany({
      where: { userId: { in: userIds }, isActive: true },
      select: { userId: true, token: true },
    });

    const result = new Map<number, string[]>();
    for (const t of tokens) {
      const existing = result.get(t.userId) ?? [];
      existing.push(t.token);
      result.set(t.userId, existing);
    }
    return result;
  }

  // ─────────────────────────────────────────────────────────────
  // NOTIFICATION CRUD
  // ─────────────────────────────────────────────────────────────

  async create(dto: CreateNotificationDto) {
    const notification = await prisma.notification.create({
      data: {
        userId: dto.userId,
        type: dto.type,
        title: dto.title,
        body: dto.body,
        data: dto.data ?? Prisma.JsonNull,
        locationId: dto.locationId,
        eventId: dto.eventId,
        tripId: dto.tripId,
      },
    });

    // Send push notification
    await this.sendPushToUser(dto.userId, dto.title, dto.body, dto.data);

    return notification;
  }

  async createMany(dtos: CreateNotificationDto[]) {
    const notifications = await prisma.notification.createMany({
      data: dtos.map((dto) => ({
        userId: dto.userId,
        type: dto.type,
        title: dto.title,
        body: dto.body,
        data: dto.data ?? Prisma.JsonNull,
        locationId: dto.locationId,
        eventId: dto.eventId,
        tripId: dto.tripId,
      })),
    });

    // Send push to all users
    const userIds = [...new Set(dtos.map((d) => d.userId))];
    const tokenMap = await this.getActiveTokensForUsers(userIds);

    for (const dto of dtos) {
      const tokens = tokenMap.get(dto.userId) ?? [];
      if (tokens.length) {
        await this.sendPush(tokens, dto.title, dto.body, dto.data);
      }
    }

    return notifications;
  }

  async getForUser(
    userId: number,
    { unreadOnly = false, limit = 50, offset = 0 },
  ) {
    return prisma.notification.findMany({
      where: {
        userId,
        ...(unreadOnly ? { isRead: false } : {}),
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
      include: {
        location: { select: { id: true, name: true } },
        trip: { select: { id: true, title: true } },
        event: { select: { id: true, name: true } },
      },
    });
  }

  async getUnreadCount(userId: number): Promise<number> {
    return prisma.notification.count({
      where: { userId, isRead: false },
    });
  }

  async markAsRead(notificationId: number, userId: number) {
    return prisma.notification.updateMany({
      where: { id: notificationId, userId },
      data: { isRead: true },
    });
  }

  async markAllAsRead(userId: number) {
    return prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });
  }

  async delete(notificationId: number, userId: number) {
    return prisma.notification.deleteMany({
      where: { id: notificationId, userId },
    });
  }

  async deleteOld(daysOld: number = 30) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - daysOld);

    return prisma.notification.deleteMany({
      where: { createdAt: { lt: cutoff } },
    });
  }

  // ─────────────────────────────────────────────────────────────
  // EXPO PUSH NOTIFICATIONS
  // ─────────────────────────────────────────────────────────────

  private async sendPushToUser(
    userId: number,
    title: string,
    body: string,
    data?: Record<string, any>,
  ) {
    const tokens = await this.getActiveTokensForUser(userId);
    if (tokens.length) {
      await this.sendPush(tokens, title, body, data);
    }
  }

  private isExpoPushToken(token: string): boolean {
    return (
      token.startsWith('ExponentPushToken[') ||
      token.startsWith('ExpoPushToken[')
    );
  }

  private async sendPush(
    tokens: string[],
    title: string,
    body: string,
    data?: Record<string, any>,
  ) {
    if (!tokens.length) return;

    // Filter valid Expo tokens
    const expoTokens = tokens.filter((t) => this.isExpoPushToken(t));
    if (!expoTokens.length) {
      this.logger.warn('No valid Expo push tokens found');
      return;
    }

    // Build Expo push messages
    const messages = expoTokens.map((token) => ({
      to: token,
      sound: 'default' as const,
      title,
      body,
      data: data ?? {},
      priority: 'high' as const,
      channelId: 'default',
    }));

    // Expo recommends sending in batches of 100
    const BATCH_SIZE = 100;
    const batches: (typeof messages)[] = [];
    for (let i = 0; i < messages.length; i += BATCH_SIZE) {
      batches.push(messages.slice(i, i + BATCH_SIZE));
    }

    for (const batch of batches) {
      try {
        const response = await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-Encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(batch),
        });

        const result = await response.json();

        if (result.data) {
          // Check for errors and handle invalid tokens
          for (let i = 0; i < result.data.length; i++) {
            const ticket = result.data[i];
            if (ticket.status === 'error') {
              this.logger.error(
                `Push error for ${batch[i].to}: ${ticket.message}`,
              );

              // Deactivate invalid tokens
              if (
                ticket.details?.error === 'DeviceNotRegistered' ||
                ticket.details?.error === 'InvalidCredentials'
              ) {
                await this.unregisterDevice(batch[i].to);
                this.logger.warn(`Deactivated invalid token: ${batch[i].to}`);
              }
            }
          }
        }

        this.logger.debug(`Push sent to ${batch.length} devices: ${title}`);
      } catch (error) {
        this.logger.error(`Failed to send push notification: ${error}`);
      }
    }
  }

  // Check push receipts (call periodically for reliable delivery confirmation)
  async checkPushReceipts(ticketIds: string[]) {
    if (!ticketIds.length) return;

    try {
      const response = await fetch(
        'https://exp.host/--/api/v2/push/getReceipts',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids: ticketIds }),
        },
      );

      const result = await response.json();

      for (const [id, receipt] of Object.entries(result.data ?? {})) {
        const r = receipt as any;
        if (r.status === 'error') {
          this.logger.error(`Receipt error ${id}: ${r.message}`);

          if (r.details?.error === 'DeviceNotRegistered') {
            // Token is no longer valid - would need to track which token this was
            this.logger.warn(`Device no longer registered for receipt ${id}`);
          }
        }
      }
    } catch (error) {
      this.logger.error(`Failed to check push receipts: ${error}`);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // NOTIFICATION TRIGGERS (call these from other services)
  // ─────────────────────────────────────────────────────────────

  async notifyTripCollaboratorAdded(
    tripId: number,
    tripTitle: string,
    addedUserId: number,
    addedByName: string,
  ) {
    return this.create({
      userId: addedUserId,
      type: NotificationType.TRIP_COLLABORATOR_ADDED,
      title: 'Te-au adăugat la un trip!',
      body: `${addedByName} te-a adăugat ca colaborator la tripul "${tripTitle}"`,
      tripId,
      data: { tripId, screen: 'TripDetail' },
    });
  }

  async notifyTripReminder(
    tripId: number,
    tripTitle: string,
    userId: number,
    daysUntil: number,
  ) {
    const bodyText =
      daysUntil === 0
        ? 'Tripul tău începe azi!'
        : daysUntil === 1
          ? 'Tripul tău începe mâine!'
          : `Tripul tău începe în ${daysUntil} zile!`;

    return this.create({
      userId,
      type: NotificationType.TRIP_REMINDER,
      title: tripTitle,
      body: bodyText,
      tripId,
      data: { tripId, screen: 'TripDetail' },
    });
  }

  async notifyNewFollower(
    userId: number,
    followerName: string,
    followerId: number,
  ) {
    return this.create({
      userId,
      type: NotificationType.NEW_FOLLOWER,
      title: 'Follower nou!',
      body: `${followerName} a început să te urmărească`,
      data: { followerId, screen: 'Profile' },
    });
  }

  async notifyNewReview(
    locationOwnerId: number,
    reviewerName: string,
    locationId: number,
    locationName: string,
    rating: number,
  ) {
    return this.create({
      userId: locationOwnerId,
      type: NotificationType.NEW_REVIEW,
      title: 'Review nou!',
      body: `${reviewerName} a lăsat un review de ${rating}⭐ la ${locationName}`,
      locationId,
      data: { locationId, screen: 'LocationDetail' },
    });
  }

  async notifyBookingConfirmed(
    userId: number,
    locationName: string,
    date: string,
    locationId: number,
  ) {
    return this.create({
      userId,
      type: NotificationType.BOOKING_CONFIRMED,
      title: 'Rezervare confirmată!',
      body: `Rezervarea ta la ${locationName} pentru ${date} a fost confirmată`,
      locationId,
      data: { locationId, screen: 'BookingDetail' },
    });
  }

  async notifyPromo(
    userIds: number[],
    title: string,
    body: string,
    data?: Record<string, any>,
  ) {
    const dtos: CreateNotificationDto[] = userIds.map((userId) => ({
      userId,
      type: NotificationType.PROMO,
      title,
      body,
      data,
    }));
    return this.createMany(dtos);
  }
}
