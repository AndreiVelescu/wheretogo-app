import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateWithoutSenderInput } from "../inputs/ChatMessageCreateWithoutSenderInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageCreateOrConnectWithoutSenderInput", {})
export class ChatMessageCreateOrConnectWithoutSenderInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutSenderInput, {
    nullable: false
  })
  create!: ChatMessageCreateWithoutSenderInput;
}
