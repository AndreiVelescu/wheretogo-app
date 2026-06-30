import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomAvgOrderByAggregateInput } from "../inputs/ChatRoomAvgOrderByAggregateInput";
import { ChatRoomCountOrderByAggregateInput } from "../inputs/ChatRoomCountOrderByAggregateInput";
import { ChatRoomMaxOrderByAggregateInput } from "../inputs/ChatRoomMaxOrderByAggregateInput";
import { ChatRoomMinOrderByAggregateInput } from "../inputs/ChatRoomMinOrderByAggregateInput";
import { ChatRoomSumOrderByAggregateInput } from "../inputs/ChatRoomSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChatRoomOrderByWithAggregationInput", {})
export class ChatRoomOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tripId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  lastMessageAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChatRoomCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChatRoomCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ChatRoomAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChatRoomMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChatRoomMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ChatRoomSumOrderByAggregateInput | undefined;
}
