import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateWithoutReplyToInput } from "../inputs/ChatMessageCreateWithoutReplyToInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageCreateOrConnectWithoutReplyToInput", {})
export class ChatMessageCreateOrConnectWithoutReplyToInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutReplyToInput, {
    nullable: false
  })
  create!: ChatMessageCreateWithoutReplyToInput;
}
