import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageUpdateWithoutSenderInput } from "../inputs/ChatMessageUpdateWithoutSenderInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpdateWithWhereUniqueWithoutSenderInput", {})
export class ChatMessageUpdateWithWhereUniqueWithoutSenderInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageUpdateWithoutSenderInput, {
    nullable: false
  })
  data!: ChatMessageUpdateWithoutSenderInput;
}
