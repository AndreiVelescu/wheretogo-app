import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateWithoutMessageInput } from "../inputs/ChatMessageReadCreateWithoutMessageInput";
import { ChatMessageReadUpdateWithoutMessageInput } from "../inputs/ChatMessageReadUpdateWithoutMessageInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadUpsertWithWhereUniqueWithoutMessageInput", {})
export class ChatMessageReadUpsertWithWhereUniqueWithoutMessageInput {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageReadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageReadUpdateWithoutMessageInput, {
    nullable: false
  })
  update!: ChatMessageReadUpdateWithoutMessageInput;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateWithoutMessageInput, {
    nullable: false
  })
  create!: ChatMessageReadCreateWithoutMessageInput;
}
