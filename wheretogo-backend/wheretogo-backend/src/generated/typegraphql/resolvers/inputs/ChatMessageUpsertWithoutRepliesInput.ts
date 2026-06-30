import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateWithoutRepliesInput } from "../inputs/ChatMessageCreateWithoutRepliesInput";
import { ChatMessageUpdateWithoutRepliesInput } from "../inputs/ChatMessageUpdateWithoutRepliesInput";
import { ChatMessageWhereInput } from "../inputs/ChatMessageWhereInput";

@TypeGraphQL.InputType("ChatMessageUpsertWithoutRepliesInput", {})
export class ChatMessageUpsertWithoutRepliesInput {
  @TypeGraphQL.Field(_type => ChatMessageUpdateWithoutRepliesInput, {
    nullable: false
  })
  update!: ChatMessageUpdateWithoutRepliesInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutRepliesInput, {
    nullable: false
  })
  create!: ChatMessageCreateWithoutRepliesInput;

  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  where?: ChatMessageWhereInput | undefined;
}
