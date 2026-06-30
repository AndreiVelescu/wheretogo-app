import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadScalarWhereInput } from "../inputs/ChatMessageReadScalarWhereInput";
import { ChatMessageReadUpdateManyMutationInput } from "../inputs/ChatMessageReadUpdateManyMutationInput";

@TypeGraphQL.InputType("ChatMessageReadUpdateManyWithWhereWithoutUserInput", {})
export class ChatMessageReadUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatMessageReadScalarWhereInput, {
    nullable: false
  })
  where!: ChatMessageReadScalarWhereInput;

  @TypeGraphQL.Field(_type => ChatMessageReadUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChatMessageReadUpdateManyMutationInput;
}
