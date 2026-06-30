import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadUpdateWithoutMessageInput } from "../inputs/ChatMessageReadUpdateWithoutMessageInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadUpdateWithWhereUniqueWithoutMessageInput", {})
export class ChatMessageReadUpdateWithWhereUniqueWithoutMessageInput {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageReadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageReadUpdateWithoutMessageInput, {
    nullable: false
  })
  data!: ChatMessageReadUpdateWithoutMessageInput;
}
