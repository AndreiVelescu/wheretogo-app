import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadCreateWithoutUserInput } from "../inputs/ChatMessageReadCreateWithoutUserInput";
import { ChatMessageReadUpdateWithoutUserInput } from "../inputs/ChatMessageReadUpdateWithoutUserInput";
import { ChatMessageReadWhereUniqueInput } from "../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageReadUpsertWithWhereUniqueWithoutUserInput", {})
export class ChatMessageReadUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageReadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageReadUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ChatMessageReadUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateWithoutUserInput, {
    nullable: false
  })
  create!: ChatMessageReadCreateWithoutUserInput;
}
