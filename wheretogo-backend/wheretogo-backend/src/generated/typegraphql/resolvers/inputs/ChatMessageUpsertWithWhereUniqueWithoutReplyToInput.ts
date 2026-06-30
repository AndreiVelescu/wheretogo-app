import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateWithoutReplyToInput } from "../inputs/ChatMessageCreateWithoutReplyToInput";
import { ChatMessageUpdateWithoutReplyToInput } from "../inputs/ChatMessageUpdateWithoutReplyToInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpsertWithWhereUniqueWithoutReplyToInput", {})
export class ChatMessageUpsertWithWhereUniqueWithoutReplyToInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageUpdateWithoutReplyToInput, {
    nullable: false
  })
  update!: ChatMessageUpdateWithoutReplyToInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutReplyToInput, {
    nullable: false
  })
  create!: ChatMessageCreateWithoutReplyToInput;
}
