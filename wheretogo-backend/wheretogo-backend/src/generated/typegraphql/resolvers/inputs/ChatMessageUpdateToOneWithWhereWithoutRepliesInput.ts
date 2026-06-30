import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageUpdateWithoutRepliesInput } from "../inputs/ChatMessageUpdateWithoutRepliesInput";
import { ChatMessageWhereInput } from "../inputs/ChatMessageWhereInput";

@TypeGraphQL.InputType("ChatMessageUpdateToOneWithWhereWithoutRepliesInput", {})
export class ChatMessageUpdateToOneWithWhereWithoutRepliesInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  where?: ChatMessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpdateWithoutRepliesInput, {
    nullable: false
  })
  data!: ChatMessageUpdateWithoutRepliesInput;
}
