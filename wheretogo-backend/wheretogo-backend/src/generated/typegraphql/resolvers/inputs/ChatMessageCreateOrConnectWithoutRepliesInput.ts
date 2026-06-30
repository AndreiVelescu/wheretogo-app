import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateWithoutRepliesInput } from "../inputs/ChatMessageCreateWithoutRepliesInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageCreateOrConnectWithoutRepliesInput", {})
export class ChatMessageCreateOrConnectWithoutRepliesInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutRepliesInput, {
    nullable: false
  })
  create!: ChatMessageCreateWithoutRepliesInput;
}
