import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadUpdateWithoutUserInput } from "../inputs/ChatMessageReadUpdateWithoutUserInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadUpdateWithWhereUniqueWithoutUserInput", {})
export class ChatMessageReadUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageReadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageReadUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ChatMessageReadUpdateWithoutUserInput;
}
