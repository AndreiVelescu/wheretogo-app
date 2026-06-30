import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostLikeAvgOrderByAggregateInput } from "../inputs/PostLikeAvgOrderByAggregateInput";
import { PostLikeCountOrderByAggregateInput } from "../inputs/PostLikeCountOrderByAggregateInput";
import { PostLikeMaxOrderByAggregateInput } from "../inputs/PostLikeMaxOrderByAggregateInput";
import { PostLikeMinOrderByAggregateInput } from "../inputs/PostLikeMinOrderByAggregateInput";
import { PostLikeSumOrderByAggregateInput } from "../inputs/PostLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostLikeOrderByWithAggregationInput", {})
export class PostLikeOrderByWithAggregationInput {
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
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PostLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostLikeSumOrderByAggregateInput | undefined;
}
