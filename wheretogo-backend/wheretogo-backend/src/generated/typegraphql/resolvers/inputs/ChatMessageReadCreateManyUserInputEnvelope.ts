import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateManyUserInput } from "../inputs/ChatMessageReadCreateManyUserInput";

@TypeGraphQL.InputType("ChatMessageReadCreateManyUserInputEnvelope", {})
export class ChatMessageReadCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ChatMessageReadCreateManyUserInput], {
    nullable: false
  })
  data!: ChatMessageReadCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
