import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageCreateInput } from "../../../inputs/ChatMessageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneChatMessageArgs {
  @TypeGraphQL.Field(_type => ChatMessageCreateInput, {
    nullable: false
  })
  data!: ChatMessageCreateInput;
}
