import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageReadCreateInput } from "../../../inputs/ChatMessageReadCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneChatMessageReadArgs {
  @TypeGraphQL.Field(_type => ChatMessageReadCreateInput, {
    nullable: false
  })
  data!: ChatMessageReadCreateInput;
}
