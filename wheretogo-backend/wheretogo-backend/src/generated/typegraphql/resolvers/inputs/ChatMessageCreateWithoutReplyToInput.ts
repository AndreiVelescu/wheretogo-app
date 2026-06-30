import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateNestedManyWithoutReplyToInput } from "../inputs/ChatMessageCreateNestedManyWithoutReplyToInput";
import { ChatMessageReadCreateNestedManyWithoutMessageInput } from "../inputs/ChatMessageReadCreateNestedManyWithoutMessageInput";
import { ChatRoomCreateNestedOneWithoutMessagesInput } from "../inputs/ChatRoomCreateNestedOneWithoutMessagesInput";
import { UserCreateNestedOneWithoutChatMessagesInput } from "../inputs/UserCreateNestedOneWithoutChatMessagesInput";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.InputType("ChatMessageCreateWithoutReplyToInput", {})
export class ChatMessageCreateWithoutReplyToInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => MessageType, {
    nullable: true
  })
  type?: "TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  editedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutChatMessagesInput, {
    nullable: false
  })
  sender!: UserCreateNestedOneWithoutChatMessagesInput;

  @TypeGraphQL.Field(_type => ChatRoomCreateNestedOneWithoutMessagesInput, {
    nullable: false
  })
  room!: ChatRoomCreateNestedOneWithoutMessagesInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateNestedManyWithoutReplyToInput, {
    nullable: true
  })
  replies?: ChatMessageCreateNestedManyWithoutReplyToInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateNestedManyWithoutMessageInput, {
    nullable: true
  })
  readBy?: ChatMessageReadCreateNestedManyWithoutMessageInput | undefined;
}
