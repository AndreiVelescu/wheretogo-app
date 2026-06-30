import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageUpdateManyWithoutRoomNestedInput } from "../inputs/ChatMessageUpdateManyWithoutRoomNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumChatRoomTypeFieldUpdateOperationsInput } from "../inputs/EnumChatRoomTypeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TripUpdateOneWithoutChatRoomNestedInput } from "../inputs/TripUpdateOneWithoutChatRoomNestedInput";

@TypeGraphQL.InputType("ChatRoomUpdateWithoutParticipantsInput", {})
export class ChatRoomUpdateWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => EnumChatRoomTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumChatRoomTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateOneWithoutChatRoomNestedInput, {
    nullable: true
  })
  trip?: TripUpdateOneWithoutChatRoomNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpdateManyWithoutRoomNestedInput, {
    nullable: true
  })
  messages?: ChatMessageUpdateManyWithoutRoomNestedInput | undefined;
}
