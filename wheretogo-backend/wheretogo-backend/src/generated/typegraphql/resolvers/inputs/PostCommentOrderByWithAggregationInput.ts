import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentAvgOrderByAggregateInput } from "../inputs/PostCommentAvgOrderByAggregateInput";
import { PostCommentCountOrderByAggregateInput } from "../inputs/PostCommentCountOrderByAggregateInput";
import { PostCommentMaxOrderByAggregateInput } from "../inputs/PostCommentMaxOrderByAggregateInput";
import { PostCommentMinOrderByAggregateInput } from "../inputs/PostCommentMinOrderByAggregateInput";
import { PostCommentSumOrderByAggregateInput } from "../inputs/PostCommentSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostCommentOrderByWithAggregationInput", {})
export class PostCommentOrderByWithAggregationInput {
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
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parentId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  likesCount?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => PostCommentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PostCommentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PostCommentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PostCommentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PostCommentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PostCommentSumOrderByAggregateInput | undefined;
}
