import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateNestedManyWithoutRoomInput } from "../inputs/ChatParticipantCreateNestedManyWithoutRoomInput";
import { TripCreateNestedOneWithoutChatRoomInput } from "../inputs/TripCreateNestedOneWithoutChatRoomInput";
import { ChatRoomType } from "../../enums/ChatRoomType";

@TypeGraphQL.InputType("ChatRoomCreateWithoutMessagesInput", {})
export class ChatRoomCreateWithoutMessagesInput {
  @TypeGraphQL.Field(_type => ChatRoomType, {
    nullable: false
  })
  type!: "TRIP" | "DIRECT" | "GROUP";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastMessageAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TripCreateNestedOneWithoutChatRoomInput, {
    nullable: true
  })
  trip?: TripCreateNestedOneWithoutChatRoomInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantCreateNestedManyWithoutRoomInput, {
    nullable: true
  })
  participants?: ChatParticipantCreateNestedManyWithoutRoomInput | undefined;
}
