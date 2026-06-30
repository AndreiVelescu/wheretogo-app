import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMetricsAvgOrderByAggregateInput } from "../inputs/PostMetricsAvgOrderByAggregateInput";
import { PostMetricsCountOrderByAggregateInput } from "../inputs/PostMetricsCountOrderByAggregateInput";
import { PostMetricsMaxOrderByAggregateInput } from "../inputs/PostMetricsMaxOrderByAggregateInput";
import { PostMetricsMinOrderByAggregateInput } from "../inputs/PostMetricsMinOrderByAggregateInput";
import { PostMetricsSumOrderByAggregateInput } from "../inputs/PostMetricsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostMetricsOrderByWithAggregationInput", {})
export class PostMetricsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  views?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  clicks?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  impressions?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  engagementRate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostMetricsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostMetricsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostMetricsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostMetricsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostMetricsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostMetricsSumOrderByAggregateInput | undefined;
}
