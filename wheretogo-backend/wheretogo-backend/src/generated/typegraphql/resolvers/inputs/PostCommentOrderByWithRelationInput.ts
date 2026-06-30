import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeOrderByRelationAggregateInput } from "../inputs/CommentLikeOrderByRelationAggregateInput";
import { PostCommentOrderByRelationAggregateInput } from "../inputs/PostCommentOrderByRelationAggregateInput";
import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PostCommentOrderByWithRelationInput", {})
export class PostCommentOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => PostOrderByWithRelationInput, {
    nullable: true
  })
  post?: PostOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  author?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentOrderByWithRelationInput, {
    nullable: true
  })
  parent?: PostCommentOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentOrderByRelationAggregateInput, {
    nullable: true
  })
  replies?: PostCommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  likes?: CommentLikeOrderByRelationAggregateInput | undefined;
}
