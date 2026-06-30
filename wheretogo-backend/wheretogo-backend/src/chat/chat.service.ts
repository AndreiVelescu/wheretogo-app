import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  Inject,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { ChatRoomType, MessageType } from '@prisma/client';

import { PUB_SUB } from '../pubsub/pubsub.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { ChatMessage } from '../generated/typegraphql';
import { MessageCreateInput } from './ChatMessageInput';
import { PubSubEngine } from 'graphql-subscriptions';
import { PUBSUB_EVENTS } from './chat.resolver';

@Injectable()
export class ChatService {
  constructor(
    private prisma: PrismaService,
    private notificationsService: NotificationsService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  // ==================== CHAT ROOM MANAGEMENT ====================

  /**
   * Creare automată chat room direct între doi useri
   */
  async createDirectChatRoom(
    userId1: number,
    userId2: number,
    creatorId: number,
  ) {
    // Verifică dacă deja există un chat room direct între cei doi
    const existingRoom = await this.prisma.chatRoom.findFirst({
      where: {
        type: ChatRoomType.DIRECT,
        participants: {
          every: {
            OR: [{ userId: userId1 }, { userId: userId2 }],
          },
        },
      },
      include: {
        participants: true,
      },
    });

    if (existingRoom) {
      return existingRoom;
    }

    // Crează chat room direct
    const chatRoom = await this.prisma.chatRoom.create({
      data: {
        type: ChatRoomType.DIRECT,
        participants: {
          create: [
            { userId: userId1, isAdmin: false, canWrite: true },
            { userId: userId2, isAdmin: false, canWrite: true },
          ],
        },
      },
      include: {
        participants: {
          include: { user: true },
        },
      },
    });

    // Mesaj de sistem
    await this.prisma.chatMessage.create({
      data: {
        content: `Direct chat created between ${userId1} and ${userId2}`,
        type: MessageType.SYSTEM,
        senderId: creatorId,
        roomId: chatRoom.id,
      },
    });

    return chatRoom;
  }

  /**
   * Creare automată chat room pentru trip
   */
  async createTripChatRoom(tripId: number, creatorId: number) {
    const trip = await this.prisma.trip.findUnique({
      where: { id: tripId },
      include: {
        collaborators: true,
        owner: true,
        chatRoom: true,
      },
    });

    if (!trip) {
      throw new NotFoundException('Trip not found');
    }

    // Verifică dacă deja există un chat room
    if (trip.chatRoom) {
      return trip.chatRoom;
    }

    // Crează lista de participanți: owner + colaboratori
    const participantIds = [
      trip.ownerId,
      ...trip.collaborators.map((c) => c.userId),
    ];

    // Elimină duplicate
    const uniqueParticipantIds = [...new Set(participantIds)];

    // Crează chat room
    const chatRoom = await this.prisma.chatRoom.create({
      data: {
        type: ChatRoomType.TRIP,
        name: trip.title,
        tripId: tripId,
        participants: {
          create: uniqueParticipantIds.map((userId) => ({
            userId,
            isAdmin: userId === trip.ownerId,
            canWrite: true,
          })),
        },
      },
      include: {
        participants: {
          include: { user: true },
        },
      },
    });

    // Mesaj de sistem
    await this.prisma.chatMessage.create({
      data: {
        content: `Chat created for trip: ${trip.title}`,
        type: MessageType.SYSTEM,
        senderId: creatorId,
        roomId: chatRoom.id,
      },
    });

    return chatRoom;
  }

  /**
   * Obține toate chat rooms pentru un user
   */
  async getUserChatRooms(userId: number) {
    return this.prisma.chatRoom.findMany({
      where: {
        participants: {
          some: {
            userId: userId,
            leftAt: null,
          },
        },
      },
      include: {
        participants: {
          where: { leftAt: null },
          include: { user: true },
        },
        messages: {
          where: { deletedAt: null },
          orderBy: { createdAt: 'desc' },
          take: 1,
          include: {
            sender: true,
            readBy: true,
          },
        },
        trip: true,
      },
      orderBy: {
        lastMessageAt: 'desc',
      },
    });
  }

  /**
   * Obține un chat room specific
   */
  async getChatRoom(roomId: number, userId: number) {
    const room = await this.prisma.chatRoom.findUnique({
      where: { id: roomId },
      include: {
        participants: {
          where: { leftAt: null },
          include: { user: true },
        },
        trip: true,
      },
    });

    if (!room) {
      throw new NotFoundException('Chat room not found');
    }

    // Verifică dacă user-ul este participant
    const isParticipant = room.participants.some((p) => p.userId === userId);
    if (!isParticipant) {
      throw new ForbiddenException('You are not a member of this chat');
    }

    return room;
  }

  /**
   * Adaugă participant la chat
   */
  async addParticipant(
    roomId: number,
    userIdToAdd: number,
    requesterId: number,
  ) {
    const room = await this.getChatRoom(roomId, requesterId);

    // Verifică dacă requester-ul este admin
    const requesterParticipant = room.participants.find(
      (p) => p.userId === requesterId,
    );
    if (!requesterParticipant?.isAdmin) {
      throw new ForbiddenException('Only admins can add participants');
    }

    // Verifică dacă user-ul nu este deja participant
    const existingParticipant = await this.prisma.chatParticipant.findUnique({
      where: {
        userId_roomId: { userId: userIdToAdd, roomId },
      },
    });

    if (existingParticipant && !existingParticipant.leftAt) {
      throw new Error('User is already a participant');
    }

    // Adaugă participant
    const participant = await this.prisma.chatParticipant.upsert({
      where: {
        userId_roomId: { userId: userIdToAdd, roomId },
      },
      update: {
        leftAt: null,
        joinedAt: new Date(),
      },
      create: {
        userId: userIdToAdd,
        roomId,
        isAdmin: false,
        canWrite: true,
      },
      include: { user: true },
    });

    // Mesaj de sistem
    const requester = await this.prisma.user.findUnique({
      where: { id: requesterId },
    });
    if (!requester) {
      throw new NotFoundException('Requester not found');
    }
    await this.prisma.chatMessage.create({
      data: {
        content: `${requester.name} added ${participant.user.name} to the chat`,
        type: MessageType.SYSTEM,
        senderId: requesterId,
        roomId,
      },
    });

    return participant;
  }

  /**
   * Părăsește chat room
   */
  async leaveRoom(roomId: number, userId: number) {
    await this.getChatRoom(roomId, userId);

    await this.prisma.chatParticipant.updateMany({
      where: {
        roomId,
        userId,
      },
      data: {
        leftAt: new Date(),
      },
    });

    // Mesaj de sistem
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.chatMessage.create({
      data: {
        content: `${user.name} left the chat`,
        type: MessageType.SYSTEM,
        senderId: userId,
        roomId,
      },
    });

    return true;
  }

  // ==================== MESSAGES ====================

  /**
   * Trimite mesaj
   */
  async sendMessage(
    userId: number,
    roomId: MessageCreateInput['roomId'],
    content: MessageCreateInput['content'],
    type: MessageCreateInput['type'] = MessageType.TEXT,
  ) {
    // Verifică dacă user-ul este participant
    if (!roomId) {
      throw new Error('roomId is required');
    }
    const participant = await this.prisma.chatParticipant.findUnique({
      where: { userId_roomId: { userId, roomId } },
    });

    if (!participant || participant.leftAt || !participant.canWrite) {
      throw new ForbiddenException(
        'Not authorized to send messages in this room',
      );
    }

    const message = await this.prisma.chatMessage.create({
      data: { content, type, senderId: userId, roomId },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    // Update lastMessageAt pe chat room
    await this.prisma.chatRoom.update({
      where: { id: roomId },
      data: { lastMessageAt: new Date() },
    });

    // Publish la subscription specifică roomId
    await this.pubSub.publish(PUBSUB_EVENTS.CHAT_MESSAGE(roomId), message);
    console.log(
      `[PUBSUB] Published to room topic, message id ${message.id}, roomId ${roomId}`,
    );

    // Obține lista de participanți pentru subscription globală
    const participants = await this.prisma.chatParticipant.findMany({
      where: { roomId, leftAt: null },
      select: { userId: true },
    });
    const participantIds = participants.map((p) => p.userId);

    // Publish la subscription globală
    await this.pubSub.publish(PUBSUB_EVENTS.MESSAGE_CREATED_GLOBAL, {
      roomId,
      message,
      participantIds,
    });
    console.log(
      `[PUBSUB] Published to global topic, message id ${message.id}, roomId ${roomId}, participants: ${participantIds.length}`,
    );

    await this.notifyNewMessage(message, userId);

    return message;
  }

  /**
   * Obține mesaje cu pagination
   */
  async getMessages(
    roomId: number,
    userId: number,
    options: { limit?: number; before?: Date } = {},
  ) {
    // Verifică access
    const participant = await this.prisma.chatParticipant.findUnique({
      where: { userId_roomId: { userId, roomId } },
    });

    if (!participant || participant.leftAt) {
      throw new ForbiddenException('Not a participant of this chat');
    }

    const { limit = 50, before } = options;

    return this.prisma.chatMessage.findMany({
      where: {
        roomId,
        deletedAt: null,
        ...(before && {
          createdAt: { lt: before },
        }),
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        replyTo: {
          include: {
            sender: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
        readBy: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  /**
   * Marchează mesaje ca citite
   */
  async markMessagesAsRead(userId: number, messageIds: number[]) {
    // Verifică că toate mesajele există și user-ul are acces
    const messages = await this.prisma.chatMessage.findMany({
      where: {
        id: { in: messageIds },
      },
      include: {
        room: {
          include: {
            participants: {
              where: { userId },
            },
          },
        },
      },
    });

    if (messages.length !== messageIds.length) {
      throw new NotFoundException('Some messages not found');
    }

    // Verifică access pentru toate mesajele
    for (const message of messages) {
      if (message.room.participants.length === 0) {
        throw new ForbiddenException('Not authorized to access these messages');
      }
    }

    // Creează read receipts
    const readReceipts = await Promise.all(
      messageIds.map((messageId) =>
        this.prisma.chatMessageRead.upsert({
          where: {
            userId_messageId: { userId, messageId },
          },
          update: {
            readAt: new Date(),
          },
          create: {
            userId,
            messageId,
          },
        }),
      ),
    );

    // Update lastReadAt pentru participant
    if (messages.length > 0) {
      await this.prisma.chatParticipant.updateMany({
        where: {
          userId,
          roomId: messages[0].roomId,
        },
        data: {
          lastReadAt: new Date(),
        },
      });
    }

    return readReceipts;
  }

  /**
   * Șterge mesaj (soft delete)
   */
  async deleteMessage(messageId: number, userId: number) {
    const message = await this.prisma.chatMessage.findUnique({
      where: { id: messageId },
      include: {
        room: {
          include: {
            participants: {
              where: { userId, isAdmin: true },
            },
          },
        },
      },
    });

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    // Doar sender-ul sau admin-ul pot șterge
    const isAdmin = message.room.participants.length > 0;
    if (message.senderId !== userId && !isAdmin) {
      throw new ForbiddenException('Not authorized to delete this message');
    }

    await this.prisma.chatMessage.update({
      where: { id: messageId },
      data: { deletedAt: new Date() },
    });

    return true;
  }

  /**
   * Editează mesaj
   */
  async editMessage(messageId: number, userId: number, newContent: string) {
    const message = await this.prisma.chatMessage.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    // Doar sender-ul poate edita
    if (message.senderId !== userId) {
      throw new ForbiddenException('Not authorized to edit this message');
    }

    // Nu poți edita mesaje șterse
    if (message.deletedAt) {
      throw new ForbiddenException('Cannot edit deleted messages');
    }

    const updatedMessage = await this.prisma.chatMessage.update({
      where: { id: messageId },
      data: {
        content: newContent,
        editedAt: new Date(),
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        replyTo: {
          include: {
            sender: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    return updatedMessage;
  }

  /**
   * Trimite mesaj cu reply
   */
  async sendMessageWithReply(
    userId: number,
    roomId: number,
    content: string,
    replyToId: number,
    type: MessageType = MessageType.TEXT,
  ) {
    // Verifică dacă mesajul la care se răspunde există și este din același room
    const replyToMessage = await this.prisma.chatMessage.findUnique({
      where: { id: replyToId },
    });

    if (!replyToMessage) {
      throw new NotFoundException('Reply-to message not found');
    }

    if (replyToMessage.roomId !== roomId) {
      throw new ForbiddenException(
        'Cannot reply to message from different room',
      );
    }

    // Verifică access
    const participant = await this.prisma.chatParticipant.findUnique({
      where: { userId_roomId: { userId, roomId } },
    });

    if (!participant || participant.leftAt || !participant.canWrite) {
      throw new ForbiddenException(
        'Not authorized to send messages in this room',
      );
    }

    const message = await this.prisma.chatMessage.create({
      data: {
        content,
        type,
        senderId: userId,
        roomId,
        replyToId,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        replyTo: {
          include: {
            sender: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    // Update lastMessageAt
    await this.prisma.chatRoom.update({
      where: { id: roomId },
      data: { lastMessageAt: new Date() },
    });

    // Publish la subscription specifică roomId
    await this.pubSub.publish(PUBSUB_EVENTS.CHAT_MESSAGE(roomId), message);
    console.log(
      `[PUBSUB] Published reply message id ${message.id} to room ${roomId}`,
    );

    // Obține lista de participanți pentru subscription globală
    const participants = await this.prisma.chatParticipant.findMany({
      where: { roomId, leftAt: null },
      select: { userId: true },
    });
    const participantIds = participants.map((p) => p.userId);

    // Publish la subscription globală
    await this.pubSub.publish(PUBSUB_EVENTS.MESSAGE_CREATED_GLOBAL, {
      roomId,
      message,
      participantIds,
    });
    console.log(
      `[PUBSUB] Published reply to global topic, message id ${message.id}, participants: ${participantIds.length}`,
    );

    await this.notifyNewMessage(message, userId);

    return message;
  }

  // ==================== NOTIFICATIONS ====================

  /**
   * Notifică participanții despre mesaj nou
   */
  async notifyNewMessage(message: any, senderId: number) {
    const room = await this.prisma.chatRoom.findUnique({
      where: { id: message.roomId },
      include: {
        participants: {
          where: {
            userId: { not: senderId },
            leftAt: null,
          },
          include: { user: true },
        },
      },
    });

    if (!room) return;

    // Trimite notificări tuturor participanților (exceptând sender-ul)
    for (const participant of room.participants) {
      await this.notificationsService.create({
        userId: participant.userId,
        type: 'SYSTEM', // Using SYSTEM since NEW_MESSAGE is not in the enum yet
        title: `New message from ${message.sender.name}`,
        body: message.content.substring(0, 100),
        data: {
          roomId: message.roomId,
          messageId: message.id,
          senderId: senderId,
        },
      });
    }
  }

  // ==================== UNREAD COUNTS ====================

  /**
   * Obține numărul de mesaje necitite pentru fiecare chat room
   */
  async getUnreadCounts(userId: number) {
    const rooms = await this.getUserChatRooms(userId);

    const counts = await Promise.all(
      rooms.map(async (room) => {
        const participant = room.participants.find((p) => p.userId === userId);
        const lastReadAt = participant?.lastReadAt || participant?.joinedAt;

        const unreadCount = await this.prisma.chatMessage.count({
          where: {
            roomId: room.id,
            deletedAt: null,
            senderId: { not: userId },
            createdAt: {
              gt: lastReadAt || new Date(0),
            },
          },
        });

        return {
          roomId: room.id,
          unreadCount,
        };
      }),
    );

    return counts;
  }

  /**
   * Obține numărul total de mesaje necitite
   */
  async getTotalUnreadCount(userId: number) {
    const counts = await this.getUnreadCounts(userId);
    return counts.reduce((total, { unreadCount }) => total + unreadCount, 0);
  }
}
