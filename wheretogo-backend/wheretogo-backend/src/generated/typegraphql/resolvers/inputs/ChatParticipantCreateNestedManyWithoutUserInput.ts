import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateManyUserInputEnvelope } from "../inputs/ChatParticipantCreateManyUserInputEnvelope";
import { ChatParticipantCreateOrConnectWithoutUserInput } from "../inputs/ChatParticipantCreateOrConnectWithoutUserInput";
import { ChatParticipantCreateWithoutUserInput } from "../inputs/ChatParticipantCreateWithoutUserInput";
import { ChatParticipantWhereUniqueInput } from "../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.InputType("ChatParticipantCreateNestedManyWithoutUserInput", {})
export class ChatParticipantCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ChatParticipantCreateWithoutUserInput], {
    nullable: true
  })
  create?: ChatParticipantCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ChatParticipantCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ChatParticipantCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatParticipantWhereUniqueInput[] | undefined;
}
