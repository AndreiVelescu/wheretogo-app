import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomCreateInput } from "../../../inputs/ChatRoomCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneChatRoomArgs {
  @TypeGraphQL.Field(_type => ChatRoomCreateInput, {
    nullable: false
  })
  data!: ChatRoomCreateInput;
}
