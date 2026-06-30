import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateWithoutMessageInput } from "../inputs/ChatMessageReadCreateWithoutMessageInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadCreateOrConnectWithoutMessageInput", {})
export class ChatMessageReadCreateOrConnectWithoutMessageInput {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageReadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateWithoutMessageInput, {
    nullable: false
  })
  create!: ChatMessageReadCreateWithoutMessageInput;
}
