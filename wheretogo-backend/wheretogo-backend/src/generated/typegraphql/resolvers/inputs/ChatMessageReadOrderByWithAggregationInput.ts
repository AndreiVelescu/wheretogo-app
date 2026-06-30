import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadAvgOrderByAggregateInput } from "../inputs/ChatMessageReadAvgOrderByAggregateInput";
import { ChatMessageReadCountOrderByAggregateInput } from "../inputs/ChatMessageReadCountOrderByAggregateInput";
import { ChatMessageReadMaxOrderByAggregateInput } from "../inputs/ChatMessageReadMaxOrderByAggregateInput";
import { ChatMessageReadMinOrderByAggregateInput } from "../inputs/ChatMessageReadMinOrderByAggregateInput";
import { ChatMessageReadSumOrderByAggregateInput } from "../inputs/ChatMessageReadSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChatMessageReadOrderByWithAggregationInput", {})
export class ChatMessageReadOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  messageId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  readAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChatMessageReadCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ChatMessageReadAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChatMessageReadMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChatMessageReadMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ChatMessageReadSumOrderByAggregateInput | undefined;
}
