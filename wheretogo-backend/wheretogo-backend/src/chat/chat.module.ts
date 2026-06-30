import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import { PrismaService } from '../prisma/prisma.service';

import { NotificationsModule } from '../notifications/notifications.module';
import { PubsubModule } from '../pubsub/pubsub.module';

@Module({
  imports: [PubsubModule, NotificationsModule],
  providers: [ChatService, ChatResolver, PrismaService],
  exports: [ChatService],
})
export class ChatModule {}
