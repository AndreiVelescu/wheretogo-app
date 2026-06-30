import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageCreateInput } from "../../../inputs/ChatMessageCreateInput";
import { ChatMessageUpdateInput } from "../../../inputs/ChatMessageUpdateInput";
import { ChatMessageWhereUniqueInput } from "../../../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneChatMessageArgs {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateInput, {
    nullable: false
  })
  create!: ChatMessageCreateInput;

  @TypeGraphQL.Field(_type => ChatMessageUpdateInput, {
    nullable: false
  })
  update!: ChatMessageUpdateInput;
}
