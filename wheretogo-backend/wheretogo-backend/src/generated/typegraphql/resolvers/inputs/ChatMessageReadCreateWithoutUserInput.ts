import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateNestedOneWithoutReadByInput } from "../inputs/ChatMessageCreateNestedOneWithoutReadByInput";

@TypeGraphQL.InputType("ChatMessageReadCreateWithoutUserInput", {})
export class ChatMessageReadCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  readAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateNestedOneWithoutReadByInput, {
    nullable: false
  })
  message!: ChatMessageCreateNestedOneWithoutReadByInput;
}
