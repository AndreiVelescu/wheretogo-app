import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerAvgOrderByAggregateInput } from "../inputs/FollowerAvgOrderByAggregateInput";
import { FollowerCountOrderByAggregateInput } from "../inputs/FollowerCountOrderByAggregateInput";
import { FollowerMaxOrderByAggregateInput } from "../inputs/FollowerMaxOrderByAggregateInput";
import { FollowerMinOrderByAggregateInput } from "../inputs/FollowerMinOrderByAggregateInput";
import { FollowerSumOrderByAggregateInput } from "../inputs/FollowerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FollowerOrderByWithAggregationInput", {})
export class FollowerOrderByWithAggregationInput {
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
  followerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FollowerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FollowerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FollowerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FollowerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FollowerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FollowerSumOrderByAggregateInput | undefined;
}
