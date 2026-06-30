import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageUpdateWithoutReplyToInput } from "../inputs/ChatMessageUpdateWithoutReplyToInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpdateWithWhereUniqueWithoutReplyToInput", {})
export class ChatMessageUpdateWithWhereUniqueWithoutReplyToInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageUpdateWithoutReplyToInput, {
    nullable: false
  })
  data!: ChatMessageUpdateWithoutReplyToInput;
}
