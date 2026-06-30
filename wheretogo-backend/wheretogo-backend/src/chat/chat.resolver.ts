import { UseGuards, Inject } from '@nestjs/common';
import { PubSub, PubSubEngine, withFilter } from 'graphql-subscriptions';
import { ChatService } from './chat.service';
import { GqlAuthGuard } from '../users/guards/gql-auth.guard';
import { getUserIdFromContext } from '../graphql/custom/auth.helpers';
import { MessageType } from '@prisma/client';

import { ChatMessageCreateInput, ChatRoom } from '../generated/typegraphql';
import { ChatMessage } from '../generated/typegraphql/models/ChatMessage';
import { ChatParticipant } from '../generated/typegraphql/models/ChatParticipant';
import { MessageType as MessageTypeEnum } from '../generated/typegraphql/enums/MessageType';
import {
  Query,
  Mutation,
  Arg,
  Ctx,
  Int,
  Resolver,
  Root,
  Subscription,
} from 'type-graphql';

import { PUB_SUB } from '../pubsub/pubsub.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';

import { MessageCreateInput } from './ChatMessageInput';
import { TypingIndicator } from './dto/TypingIndicator';
import { UserStatus, UserStatusEnum } from './dto/UserStatus';
import { MessageCreatedPayload } from './dto/MessageCreatedPayload';

export const PUBSUB_EVENTS = {
  CHAT_MESSAGE: (roomId: number) => `CHAT_${roomId}`,
  MESSAGE_CREATED_GLOBAL: 'MESSAGE_CREATED_GLOBAL', // Global subscription
  TYPING: (roomId: number) => `TYPING_${roomId}`,
  USER_STATUS: (userId: number) => `USER_STATUS_${userId}`,
  NOTIFICATION: (userId: number) => `NOTIFICATION_${userId}`,
} as const;

@Resolver()
export class ChatResolver {
  constructor(
    private readonly chatService: ChatService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {
    // ✅ Doar logging pentru debug
    console.log('📱 ChatResolver constructor called');
    console.log('  ChatService:', this.chatService ? '✅ OK' : '❌ UNDEFINED');
    console.log('  PubSub:', this.pubSub ? '✅ OK' : '❌ UNDEFINED');
  }

  // ==================== QUERIES ====================

  @Query(() => [ChatRoom])
  @UseGuards(GqlAuthGuard)
  async myChats(@Ctx() ctx: any) {
    console.log('🔍 myChats query called');
    const userId = getUserIdFromContext(ctx);
    return this.chatService.getUserChatRooms(userId);
  }

  @Query(() => ChatRoom)
  @UseGuards(GqlAuthGuard)
  async chatRoom(@Arg('roomId', () => Int) roomId: number, @Ctx() ctx: any) {
    const userId = getUserIdFromContext(ctx);
    return this.chatService.getChatRoom(roomId, userId);
  }

  @Query(() => [ChatMessage])
  @UseGuards(GqlAuthGuard)
  async chatMessages(
    @Arg('roomId', () => Int) roomId: number,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('before', { nullable: true }) before?: Date,
    @Ctx() ctx?: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.chatService.getMessages(roomId, userId, { limit, before });
  }

  @Query(() => Int)
  @UseGuards(GqlAuthGuard)
  async unreadMessagesCount(@Ctx() ctx: any) {
    const userId = getUserIdFromContext(ctx);
    return this.chatService.getTotalUnreadCount(userId);
  }

  // ==================== MUTATIONS ====================

  @Mutation(() => ChatRoom)
  @UseGuards(GqlAuthGuard)
  async createTripChat(
    @Arg('tripId', () => Int) tripId: number,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.chatService.createTripChatRoom(tripId, userId);
  }

  @Mutation(() => ChatRoom)
  @UseGuards(GqlAuthGuard)
  async createDirectChat(
    @Arg('userId', () => Int) otherUserId: number,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.chatService.createDirectChatRoom(userId, otherUserId, userId);
  }

  @Mutation(() => ChatMessage)
  @UseGuards(GqlAuthGuard)
  async sendMessage(
    @Arg('message') message: MessageCreateInput,
    @Ctx() ctx?: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    const chatMessage = await this.chatService.sendMessage(
      userId,
      message.roomId,
      message.content,
      message.type || MessageType.TEXT,
    );

    return chatMessage;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async markMessagesAsRead(
    @Arg('messageIds', () => [Int]) messageIds: number[],
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    await this.chatService.markMessagesAsRead(userId, messageIds);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteMessage(
    @Arg('messageId', () => Int) messageId: number,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    await this.chatService.deleteMessage(messageId, userId);
    return true;
  }

  @Mutation(() => ChatMessage)
  @UseGuards(GqlAuthGuard)
  async editMessage(
    @Arg('messageId', () => Int) messageId: number,
    @Arg('content', () => String) content: string,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.chatService.editMessage(messageId, userId, content);
  }

  @Mutation(() => ChatMessage)
  @UseGuards(GqlAuthGuard)
  async sendMessageWithReply(
    @Arg('roomId', () => Int) roomId: number,
    @Arg('content', () => String) content: string,
    @Arg('replyToId', () => Int) replyToId: number,
    @Arg('type', () => MessageTypeEnum, { nullable: true }) type?: MessageType,
    @Ctx() ctx?: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.chatService.sendMessageWithReply(
      userId,
      roomId,
      content,
      replyToId,
      type || MessageType.TEXT,
    );
  }

  @Mutation(() => ChatParticipant)
  @UseGuards(GqlAuthGuard)
  async addChatParticipant(
    @Arg('roomId', () => Int) roomId: number,
    @Arg('userId', () => Int) userIdToAdd: number,
    @Ctx() ctx: any,
  ) {
    const requesterId = getUserIdFromContext(ctx);
    return this.chatService.addParticipant(roomId, userIdToAdd, requesterId);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async leaveChatRoom(
    @Arg('roomId', () => Int) roomId: number,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.chatService.leaveRoom(roomId, userId);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async startTyping(@Arg('roomId', () => Int) roomId: number, @Ctx() ctx: any) {
    const userId = getUserIdFromContext(ctx);

    const topic = PUBSUB_EVENTS.TYPING(roomId);
    await this.pubSub.publish(topic, {
      userId,
      roomId,
      isTyping: true,
    });

    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async stopTyping(@Arg('roomId', () => Int) roomId: number, @Ctx() ctx: any) {
    const userId = getUserIdFromContext(ctx);

    const topic = PUBSUB_EVENTS.TYPING(roomId);
    await this.pubSub.publish(topic, {
      userId,
      roomId,
      isTyping: false,
    });

    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async setUserStatus(
    @Arg('status', () => UserStatusEnum) status: UserStatusEnum,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);

    const userStatus: UserStatus = {
      userId,
      status,
      lastSeen: new Date(),
    };

    const topic = PUBSUB_EVENTS.USER_STATUS(userId);
    await this.pubSub.publish(topic, userStatus);

    console.log(`[USER STATUS] User ${userId} is now ${status}`);

    return true;
  }

  // SUBSCRIPTIONS (REAL-TIME)

  @Subscription(() => ChatMessage, {
    subscribe: async ({ args, context }) => {
      const roomId = args.roomId;
      console.log(`[SUBSCRIPTION] Subscribing to roomId: ${roomId}`);

      if (!roomId) {
        throw new Error("Subscription missing 'roomId' argument");
      }

      if (!context.pubSub) {
        throw new Error('PubSub system not initialized in context');
      }

      // Verifică autentificarea
      const userId = context.user?.sub;
      if (!userId) {
        throw new Error('User not authenticated');
      }

      // Verifică că user-ul este participant în room
      const participant = await context.prisma.chatParticipant.findUnique({
        where: { userId_roomId: { userId, roomId: Number(roomId) } },
      });

      if (!participant || participant.leftAt) {
        throw new Error('Not authorized to subscribe to this room');
      }

      console.log(
        `[SUBSCRIPTION] User ${userId} authorized for room ${roomId}`,
      );

      const topic = PUBSUB_EVENTS.CHAT_MESSAGE(Number(roomId));
      console.log(`[SUBSCRIPTION] Topic: ${topic}`);

      return context.pubSub.asyncIterator(topic);
    },
  })
  sentMessage(
    @Arg('roomId', () => Int) roomId: number,
    @Root() payload: ChatMessage,
  ): ChatMessage {
    console.log(
      `[SUBSCRIPTION RESOLVER] Message received for room ${roomId}:`,
      payload,
    );
    return payload;
  }

  // Typing indicator subscription
  @Subscription(() => TypingIndicator, {
    subscribe: async ({ args, context }) => {
      const roomId = args.roomId;
      console.log(`[TYPING SUBSCRIPTION] Subscribing to roomId: ${roomId}`);

      if (!roomId) {
        throw new Error("Typing subscription missing 'roomId' argument");
      }

      if (!context.pubSub) {
        throw new Error('PubSub system not initialized in context');
      }

      // Verifică autentificarea
      const userId = context.user?.sub;
      if (!userId) {
        throw new Error('User not authenticated');
      }

      // Verifică că user-ul este participant în room
      const participant = await context.prisma.chatParticipant.findUnique({
        where: { userId_roomId: { userId, roomId: Number(roomId) } },
      });

      if (!participant || participant.leftAt) {
        throw new Error('Not authorized to subscribe to this room');
      }

      console.log(
        `[TYPING SUBSCRIPTION] User ${userId} authorized for room ${roomId}`,
      );

      const topic = PUBSUB_EVENTS.TYPING(Number(roomId));
      console.log(`[TYPING SUBSCRIPTION] Topic: ${topic}`);

      return context.pubSub.asyncIterator(topic);
    },
  })
  userTyping(
    @Arg('roomId', () => Int) roomId: number,
    @Root() payload: TypingIndicator,
  ): TypingIndicator {
    console.log(`[TYPING RESOLVER] Typing event for room ${roomId}:`, payload);
    return payload;
  }

  // User Status subscription
  @Subscription(() => UserStatus, {
    subscribe: ({ args, context }) => {
      const targetUserId = args.userId;
      console.log(
        `[USER STATUS SUBSCRIPTION] Subscribing to userId: ${targetUserId}`,
      );

      if (!targetUserId) {
        throw new Error("User status subscription missing 'userId' argument");
      }

      if (!context.pubSub) {
        throw new Error('PubSub system not initialized in context');
      }

      // Verifică autentificarea (oricine autentificat poate vedea status-ul altcuiva)
      const requesterId = context.user?.sub;
      if (!requesterId) {
        throw new Error('User not authenticated');
      }

      console.log(
        `[USER STATUS SUBSCRIPTION] User ${requesterId} subscribing to status of ${targetUserId}`,
      );

      const topic = PUBSUB_EVENTS.USER_STATUS(Number(targetUserId));
      console.log(`[USER STATUS SUBSCRIPTION] Topic: ${topic}`);

      return context.pubSub.asyncIterator(topic);
    },
  })
  onUserStatusChange(
    @Arg('userId', () => Int) userId: number,
    @Root() payload: UserStatus,
  ): UserStatus {
    console.log(
      `[USER STATUS RESOLVER] Status change for user ${userId}:`,
      payload,
    );
    return payload;
  }

  // Global message subscription (fără roomId)
  @Subscription(() => MessageCreatedPayload, {
    subscribe: async function* ({ context }: any) {
      console.log(
        '[GLOBAL MESSAGE SUBSCRIPTION] User subscribing to all messages',
      );

      if (!context?.pubSub) {
        throw new Error('PubSub system not initialized in context');
      }

      // User ar trebui să fie acum disponibil în context
      const userId = context.user?.sub;

      console.log(
        `[GLOBAL MESSAGE SUBSCRIPTION] userId=${userId}, user:`,
        context.user,
      );

      // Dacă nu există userId, returnăm un iterator gol
      if (!userId) {
        console.log(
          '[GLOBAL MESSAGE SUBSCRIPTION] No userId found, creating empty iterator',
        );
        return (async function* () {})();
      }

      const asyncIterator = context.pubSub.asyncIterator(
        PUBSUB_EVENTS.MESSAGE_CREATED_GLOBAL,
      );

      // Filter messages - doar pentru participanți
      for await (const payload of asyncIterator) {
        const participantIds = payload?.participantIds || [];
        const isParticipant = participantIds.includes(userId);

        console.log(
          `[GLOBAL MESSAGE FILTER] userId=${userId}, roomId=${payload?.roomId}, isParticipant=${isParticipant}`,
        );

        if (isParticipant) {
          yield payload;
        }
      }
    },
  })
  messageCreated(
    @Root() payload: MessageCreatedPayload,
  ): MessageCreatedPayload {
    console.log(
      `[GLOBAL MESSAGE RESOLVER] Message created in room ${payload.roomId}`,
    );
    return payload;
  }
}
