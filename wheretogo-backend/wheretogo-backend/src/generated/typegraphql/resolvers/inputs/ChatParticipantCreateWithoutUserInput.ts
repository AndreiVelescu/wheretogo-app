import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateNestedOneWithoutParticipantsInput } from "../inputs/ChatRoomCreateNestedOneWithoutParticipantsInput";

@TypeGraphQL.InputType("ChatParticipantCreateWithoutUserInput", {})
export class ChatParticipantCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastReadAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  joinedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  leftAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAdmin?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  canWrite?: boolean | undefined;

  @TypeGraphQL.Field(_type => ChatRoomCreateNestedOneWithoutParticipantsInput, {
    nullable: false
  })
  room!: ChatRoomCreateNestedOneWithoutParticipantsInput;
}
