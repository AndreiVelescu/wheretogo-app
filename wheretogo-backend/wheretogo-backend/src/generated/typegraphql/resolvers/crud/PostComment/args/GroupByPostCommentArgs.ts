import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentOrderByWithAggregationInput } from "../../../inputs/PostCommentOrderByWithAggregationInput";
import { PostCommentScalarWhereWithAggregatesInput } from "../../../inputs/PostCommentScalarWhereWithAggregatesInput";
import { PostCommentWhereInput } from "../../../inputs/PostCommentWhereInput";
import { PostCommentScalarFieldEnum } from "../../../../enums/PostCommentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostCommentArgs {
  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostCommentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostCommentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "postId" | "authorId" | "content" | "parentId" | "likesCount" | "createdAt" | "updatedAt" | "editedAt">;

  @TypeGraphQL.Field(_type => PostCommentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostCommentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
