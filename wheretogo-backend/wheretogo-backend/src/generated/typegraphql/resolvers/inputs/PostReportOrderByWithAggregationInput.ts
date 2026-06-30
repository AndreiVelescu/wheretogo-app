import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportAvgOrderByAggregateInput } from "../inputs/PostReportAvgOrderByAggregateInput";
import { PostReportCountOrderByAggregateInput } from "../inputs/PostReportCountOrderByAggregateInput";
import { PostReportMaxOrderByAggregateInput } from "../inputs/PostReportMaxOrderByAggregateInput";
import { PostReportMinOrderByAggregateInput } from "../inputs/PostReportMinOrderByAggregateInput";
import { PostReportSumOrderByAggregateInput } from "../inputs/PostReportSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostReportOrderByWithAggregationInput", {})
export class PostReportOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reporterId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reason?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  details?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  reviewedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostReportCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostReportCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostReportAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostReportAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostReportMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostReportMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostReportMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostReportMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostReportSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostReportSumOrderByAggregateInput | undefined;
}
