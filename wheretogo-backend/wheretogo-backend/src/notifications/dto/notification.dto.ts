import { NotificationType, Platform } from '@prisma/client';

export class CreateNotificationDto {
  userId: number;
  type: NotificationType;
  title: string;
  body: string;
  data?: Record<string, any>;
  locationId?: number;
  eventId?: number;
  tripId?: number;
}

export class RegisterDeviceDto {
  userId: number;
  token: string;
  platform: Platform;
}

export class SendPushDto {
  tokens: string[];
  title: string;
  body: string;
  data?: Record<string, any>;
}
