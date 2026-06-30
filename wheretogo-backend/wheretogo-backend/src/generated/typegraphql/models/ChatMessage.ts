import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ChatMessageRead } from "../models/ChatMessageRead";
import { ChatRoom } from "../models/ChatRoom";
import { User } from "../models/User";
import { MessageType } from "../enums/MessageType";
import { ChatMessageCount } from "../resolvers/outputs/ChatMessageCount";

@TypeGraphQL.ObjectType("ChatMessage", {
  simpleResolvers: true
})
export class ChatMessage {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => MessageType, {
    nullable: false
  })
  type!: "TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  senderId!: number;

  sender?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  roomId!: number;

  room?: ChatRoom;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  replyToId?: number | null;

  replyTo?: ChatMessage | null;

  replies?: ChatMessage[];

  readBy?: ChatMessageRead[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  editedAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | null;

  @TypeGraphQL.Field(_type => ChatMessageCount, {
    nullable: true
  })
  _count?: ChatMessageCount | null;
}
