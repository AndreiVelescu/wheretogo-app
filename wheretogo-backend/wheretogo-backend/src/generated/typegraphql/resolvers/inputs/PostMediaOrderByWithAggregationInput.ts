import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaAvgOrderByAggregateInput } from "../inputs/PostMediaAvgOrderByAggregateInput";
import { PostMediaCountOrderByAggregateInput } from "../inputs/PostMediaCountOrderByAggregateInput";
import { PostMediaMaxOrderByAggregateInput } from "../inputs/PostMediaMaxOrderByAggregateInput";
import { PostMediaMinOrderByAggregateInput } from "../inputs/PostMediaMinOrderByAggregateInput";
import { PostMediaSumOrderByAggregateInput } from "../inputs/PostMediaSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostMediaOrderByWithAggregationInput", {})
export class PostMediaOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  thumbnail?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  width?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  height?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  duration?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostMediaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostMediaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMediaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostMediaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMediaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostMediaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMediaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostMediaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostMediaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostMediaSumOrderByAggregateInput | undefined;
}
