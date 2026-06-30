import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomCreateInput } from "../../../inputs/ChatRoomCreateInput";
import { ChatRoomUpdateInput } from "../../../inputs/ChatRoomUpdateInput";
import { ChatRoomWhereUniqueInput } from "../../../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneChatRoomArgs {
  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: false
  })
  where!: ChatRoomWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatRoomCreateInput, {
    nullable: false
  })
  create!: ChatRoomCreateInput;

  @TypeGraphQL.Field(_type => ChatRoomUpdateInput, {
    nullable: false
  })
  update!: ChatRoomUpdateInput;
}
