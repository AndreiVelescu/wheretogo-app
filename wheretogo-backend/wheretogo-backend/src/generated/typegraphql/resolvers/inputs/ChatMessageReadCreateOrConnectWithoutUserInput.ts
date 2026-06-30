import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateWithoutUserInput } from "../inputs/ChatMessageReadCreateWithoutUserInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadCreateOrConnectWithoutUserInput", {})
export class ChatMessageReadCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageReadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateWithoutUserInput, {
    nullable: false
  })
  create!: ChatMessageReadCreateWithoutUserInput;
}
