import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeAvgOrderByAggregateInput } from "../inputs/CommentLikeAvgOrderByAggregateInput";
import { CommentLikeCountOrderByAggregateInput } from "../inputs/CommentLikeCountOrderByAggregateInput";
import { CommentLikeMaxOrderByAggregateInput } from "../inputs/CommentLikeMaxOrderByAggregateInput";
import { CommentLikeMinOrderByAggregateInput } from "../inputs/CommentLikeMinOrderByAggregateInput";
import { CommentLikeSumOrderByAggregateInput } from "../inputs/CommentLikeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CommentLikeOrderByWithAggregationInput", {})
export class CommentLikeOrderByWithAggregationInput {
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
  commentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CommentLikeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CommentLikeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CommentLikeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CommentLikeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CommentLikeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CommentLikeSumOrderByAggregateInput | undefined;
}
