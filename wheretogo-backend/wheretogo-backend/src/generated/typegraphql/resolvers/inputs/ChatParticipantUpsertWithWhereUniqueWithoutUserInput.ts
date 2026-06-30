import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateWithoutUserInput } from "../inputs/ChatParticipantCreateWithoutUserInput";
import { ChatParticipantUpdateWithoutUserInput } from "../inputs/ChatParticipantUpdateWithoutUserInput";
import { ChatParticipantWhereUniqueInput } from "../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.InputType("ChatParticipantUpsertWithWhereUniqueWithoutUserInput", {})
export class ChatParticipantUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatParticipantWhereUniqueInput, {
    nullable: false
  })
  where!: ChatParticipantWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatParticipantUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ChatParticipantUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ChatParticipantCreateWithoutUserInput, {
    nullable: false
  })
  create!: ChatParticipantCreateWithoutUserInput;
}
