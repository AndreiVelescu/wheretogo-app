import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutChatParticipantsInput } from "../inputs/UserCreateNestedOneWithoutChatParticipantsInput";

@TypeGraphQL.InputType("ChatParticipantCreateWithoutRoomInput", {})
export class ChatParticipantCreateWithoutRoomInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutChatParticipantsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutChatParticipantsInput;
}
