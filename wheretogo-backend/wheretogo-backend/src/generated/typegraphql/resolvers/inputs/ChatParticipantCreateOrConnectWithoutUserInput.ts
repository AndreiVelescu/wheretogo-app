import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateWithoutUserInput } from "../inputs/ChatParticipantCreateWithoutUserInput";
import { ChatParticipantWhereUniqueInput } from "../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.InputType("ChatParticipantCreateOrConnectWithoutUserInput", {})
export class ChatParticipantCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatParticipantWhereUniqueInput, {
    nullable: false
  })
  where!: ChatParticipantWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatParticipantCreateWithoutUserInput, {
    nullable: false
  })
  create!: ChatParticipantCreateWithoutUserInput;
}
