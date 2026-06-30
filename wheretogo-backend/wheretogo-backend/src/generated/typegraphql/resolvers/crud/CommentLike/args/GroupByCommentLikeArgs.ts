import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentLikeOrderByWithAggregationInput } from "../../../inputs/CommentLikeOrderByWithAggregationInput";
import { CommentLikeScalarWhereWithAggregatesInput } from "../../../inputs/CommentLikeScalarWhereWithAggregatesInput";
import { CommentLikeWhereInput } from "../../../inputs/CommentLikeWhereInput";
import { CommentLikeScalarFieldEnum } from "../../../../enums/CommentLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCommentLikeArgs {
  @TypeGraphQL.Field(_type => CommentLikeWhereInput, {
    nullable: true
  })
  where?: CommentLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CommentLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "commentId" | "createdAt">;

  @TypeGraphQL.Field(_type => CommentLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CommentLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
