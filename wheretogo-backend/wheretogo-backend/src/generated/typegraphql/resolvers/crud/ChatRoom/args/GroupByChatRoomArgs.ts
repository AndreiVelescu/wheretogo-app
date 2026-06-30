import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomOrderByWithAggregationInput } from "../../../inputs/ChatRoomOrderByWithAggregationInput";
import { ChatRoomScalarWhereWithAggregatesInput } from "../../../inputs/ChatRoomScalarWhereWithAggregatesInput";
import { ChatRoomWhereInput } from "../../../inputs/ChatRoomWhereInput";
import { ChatRoomScalarFieldEnum } from "../../../../enums/ChatRoomScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByChatRoomArgs {
  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ChatRoomOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "name" | "tripId" | "lastMessageAt" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ChatRoomScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ChatRoomScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
