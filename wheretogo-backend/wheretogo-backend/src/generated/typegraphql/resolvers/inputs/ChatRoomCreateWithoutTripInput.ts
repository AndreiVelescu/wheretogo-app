import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateNestedManyWithoutRoomInput } from "../inputs/ChatMessageCreateNestedManyWithoutRoomInput";
import { ChatParticipantCreateNestedManyWithoutRoomInput } from "../inputs/ChatParticipantCreateNestedManyWithoutRoomInput";
import { ChatRoomType } from "../../enums/ChatRoomType";

@TypeGraphQL.InputType("ChatRoomCreateWithoutTripInput", {})
export class ChatRoomCreateWithoutTripInput {
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

  @TypeGraphQL.Field(_type => ChatMessageCreateNestedManyWithoutRoomInput, {
    nullable: true
  })
  messages?: ChatMessageCreateNestedManyWithoutRoomInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantCreateNestedManyWithoutRoomInput, {
    nullable: true
  })
  participants?: ChatParticipantCreateNestedManyWithoutRoomInput | undefined;
}
