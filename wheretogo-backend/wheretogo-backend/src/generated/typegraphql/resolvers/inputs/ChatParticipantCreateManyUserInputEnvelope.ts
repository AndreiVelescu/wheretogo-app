import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateManyUserInput } from "../inputs/ChatParticipantCreateManyUserInput";

@TypeGraphQL.InputType("ChatParticipantCreateManyUserInputEnvelope", {})
export class ChatParticipantCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ChatParticipantCreateManyUserInput], {
    nullable: false
  })
  data!: ChatParticipantCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
