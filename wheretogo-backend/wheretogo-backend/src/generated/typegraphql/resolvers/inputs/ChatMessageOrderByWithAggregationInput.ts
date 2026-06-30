import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageAvgOrderByAggregateInput } from "../inputs/ChatMessageAvgOrderByAggregateInput";
import { ChatMessageCountOrderByAggregateInput } from "../inputs/ChatMessageCountOrderByAggregateInput";
import { ChatMessageMaxOrderByAggregateInput } from "../inputs/ChatMessageMaxOrderByAggregateInput";
import { ChatMessageMinOrderByAggregateInput } from "../inputs/ChatMessageMinOrderByAggregateInput";
import { ChatMessageSumOrderByAggregateInput } from "../inputs/ChatMessageSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChatMessageOrderByWithAggregationInput", {})
export class ChatMessageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  senderId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  roomId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  replyToId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  editedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  deletedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChatMessageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ChatMessageAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChatMessageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChatMessageMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ChatMessageSumOrderByAggregateInput | undefined;
}
