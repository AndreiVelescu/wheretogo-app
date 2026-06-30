import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateManyMessageInput } from "../inputs/ChatMessageReadCreateManyMessageInput";

@TypeGraphQL.InputType("ChatMessageReadCreateManyMessageInputEnvelope", {})
export class ChatMessageReadCreateManyMessageInputEnvelope {
  @TypeGraphQL.Field(_type => [ChatMessageReadCreateManyMessageInput], {
    nullable: false
  })
  data!: ChatMessageReadCreateManyMessageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
