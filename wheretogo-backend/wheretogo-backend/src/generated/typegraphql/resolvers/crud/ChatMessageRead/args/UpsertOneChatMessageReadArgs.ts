import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageReadCreateInput } from "../../../inputs/ChatMessageReadCreateInput";
import { ChatMessageReadUpdateInput } from "../../../inputs/ChatMessageReadUpdateInput";
import { ChatMessageReadWhereUniqueInput } from "../../../inputs/ChatMessageReadWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneChatMessageReadArgs {
  @TypeGraphQL.Field(_type => ChatMessageReadWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageReadWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateInput, {
    nullable: false
  })
  create!: ChatMessageReadCreateInput;

  @TypeGraphQL.Field(_type => ChatMessageReadUpdateInput, {
    nullable: false
  })
  update!: ChatMessageReadUpdateInput;
}
