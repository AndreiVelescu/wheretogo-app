import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageUpdateInput } from "../../../inputs/ChatMessageUpdateInput";
import { ChatMessageWhereUniqueInput } from "../../../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneChatMessageArgs {
  @TypeGraphQL.Field(_type => ChatMessageUpdateInput, {
    nullable: false
  })
  data!: ChatMessageUpdateInput;

  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;
}
