import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnChatMessageReplyToArgs } from "./args/CreateManyAndReturnChatMessageReplyToArgs";
import { ChatMessage } from "../../models/ChatMessage";
import { ChatRoom } from "../../models/ChatRoom";
import { User } from "../../models/User";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.ObjectType("CreateManyAndReturnChatMessage", {
  simpleResolvers: true
})
export class CreateManyAndReturnChatMessage {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  roomId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  replyToId!: number | null;

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
  editedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt!: Date | null;

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  sender!: User;

  @TypeGraphQL.Field(_type => ChatRoom, {
    nullable: false
  })
  room!: ChatRoom;

  replyTo!: ChatMessage | null;

  @TypeGraphQL.Field(_type => ChatMessage, {
    name: "replyTo",
    nullable: true
  })
  getReplyTo(@TypeGraphQL.Root() root: CreateManyAndReturnChatMessage, @TypeGraphQL.Args() args: CreateManyAndReturnChatMessageReplyToArgs): ChatMessage | null {
    return root.replyTo;
  }
}
