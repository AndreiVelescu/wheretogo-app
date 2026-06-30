import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomOrderByWithRelationInput } from "../../../inputs/ChatRoomOrderByWithRelationInput";
import { ChatRoomWhereInput } from "../../../inputs/ChatRoomWhereInput";
import { ChatRoomWhereUniqueInput } from "../../../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateChatRoomArgs {
  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ChatRoomOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: true
  })
  cursor?: ChatRoomWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
