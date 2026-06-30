import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomUpdateInput } from "../../../inputs/ChatRoomUpdateInput";
import { ChatRoomWhereUniqueInput } from "../../../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneChatRoomArgs {
  @TypeGraphQL.Field(_type => ChatRoomUpdateInput, {
    nullable: false
  })
  data!: ChatRoomUpdateInput;

  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: false
  })
  where!: ChatRoomWhereUniqueInput;
}
