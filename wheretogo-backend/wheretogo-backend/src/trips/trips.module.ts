import { Module } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripsCustomResolver } from './trips.resolver';
import { ChatModule } from '../chat/chat.module';
import { NotificationsService } from '../notifications/notifications.service';
import { NotificationsModule } from '../notifications/notifications.module';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ChatModule, NotificationsModule],
  providers: [
    TripsService,
    TripsCustomResolver,
    NotificationsService,
    UsersService,
    JwtService,
  ],
  exports: [TripsService],
})
export class TripsModule {}
