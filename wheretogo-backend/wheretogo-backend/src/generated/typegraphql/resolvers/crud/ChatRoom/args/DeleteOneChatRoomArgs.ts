import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomWhereUniqueInput } from "../../../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneChatRoomArgs {
  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: false
  })
  where!: ChatRoomWhereUniqueInput;
}
