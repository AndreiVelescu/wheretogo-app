import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadUpdateManyWithoutMessageNestedInput } from "../inputs/ChatMessageReadUpdateManyWithoutMessageNestedInput";
import { ChatMessageUpdateManyWithoutReplyToNestedInput } from "../inputs/ChatMessageUpdateManyWithoutReplyToNestedInput";
import { ChatMessageUpdateOneWithoutRepliesNestedInput } from "../inputs/ChatMessageUpdateOneWithoutRepliesNestedInput";
import { ChatRoomUpdateOneRequiredWithoutMessagesNestedInput } from "../inputs/ChatRoomUpdateOneRequiredWithoutMessagesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumMessageTypeFieldUpdateOperationsInput } from "../inputs/EnumMessageTypeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ChatMessageUpdateWithoutSenderInput", {})
export class ChatMessageUpdateWithoutSenderInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumMessageTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumMessageTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  editedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpdateOneRequiredWithoutMessagesNestedInput, {
    nullable: true
  })
  room?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpdateOneWithoutRepliesNestedInput, {
    nullable: true
  })
  replyTo?: ChatMessageUpdateOneWithoutRepliesNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpdateManyWithoutReplyToNestedInput, {
    nullable: true
  })
  replies?: ChatMessageUpdateManyWithoutReplyToNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadUpdateManyWithoutMessageNestedInput, {
    nullable: true
  })
  readBy?: ChatMessageReadUpdateManyWithoutMessageNestedInput | undefined;
}
