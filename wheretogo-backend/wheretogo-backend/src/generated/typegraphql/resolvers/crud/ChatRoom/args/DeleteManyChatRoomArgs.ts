import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomWhereInput } from "../../../inputs/ChatRoomWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyChatRoomArgs {
  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;
}
