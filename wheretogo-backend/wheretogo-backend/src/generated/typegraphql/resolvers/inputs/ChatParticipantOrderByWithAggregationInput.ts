import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantAvgOrderByAggregateInput } from "../inputs/ChatParticipantAvgOrderByAggregateInput";
import { ChatParticipantCountOrderByAggregateInput } from "../inputs/ChatParticipantCountOrderByAggregateInput";
import { ChatParticipantMaxOrderByAggregateInput } from "../inputs/ChatParticipantMaxOrderByAggregateInput";
import { ChatParticipantMinOrderByAggregateInput } from "../inputs/ChatParticipantMinOrderByAggregateInput";
import { ChatParticipantSumOrderByAggregateInput } from "../inputs/ChatParticipantSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChatParticipantOrderByWithAggregationInput", {})
export class ChatParticipantOrderByWithAggregationInput {
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
  roomId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  lastReadAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  joinedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  leftAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isAdmin?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  canWrite?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChatParticipantCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ChatParticipantAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChatParticipantMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChatParticipantMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ChatParticipantSumOrderByAggregateInput | undefined;
}
