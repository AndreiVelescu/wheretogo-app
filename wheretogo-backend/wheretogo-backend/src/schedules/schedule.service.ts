import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ScheduleService {
  async scheduleLocationForUser(
    userId: number,
    locationId: number,
    scheduledDate: Date,
  ) {
    // normalize date (server authoritative)
    const day = new Date(scheduledDate);
    day.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (day < today) {
      throw new BadRequestException('CANNOT_SCHEDULE_IN_PAST');
    }

    try {
      return await prisma.scheduleLocationInCalendar.create({
        data: {
          userId,
          locationId,
          scheduledDate: day,
        },
      });
    } catch (e: any) {
      // Prisma unique constraint
      if (e.code === 'P2002') {
        throw new ConflictException('LOCATION_ALREADY_SCHEDULED_FOR_DAY');
      }

      // FK errors (user / location not found)
      if (e.code === 'P2003') {
        throw new NotFoundException('USER_OR_LOCATION_NOT_FOUND');
      }

      throw e;
    }
  }

  async getScheduledLocationsForUser(userId: number) {
    return prisma.scheduleLocationInCalendar.findMany({
      where: { userId },
      include: { location: true },
      orderBy: { scheduledDate: 'desc' },
    });
  }

  async getScheduledLocationsForUserByDate(userId: number, date: Date) {
    return prisma.scheduleLocationInCalendar.findMany({
      where: { userId, scheduledDate: date },
      include: { location: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async removeScheduledLocationForUser(userId: number, locationId: number) {
    return prisma.scheduleLocationInCalendar.deleteMany({
      where: { userId, locationId },
    });
  }

  async updateScheduledDateForLocation(
    userId: number,
    locationId: number,
    newDate: Date,
  ) {
    const schedule = await prisma.scheduleLocationInCalendar.findFirst({
      where: { userId, locationId },
    });
    if (!schedule) throw new Error('Scheduled location not found');

    return prisma.scheduleLocationInCalendar.update({
      where: { id: schedule.id },
      data: { scheduledDate: newDate },
    });
  }
}
