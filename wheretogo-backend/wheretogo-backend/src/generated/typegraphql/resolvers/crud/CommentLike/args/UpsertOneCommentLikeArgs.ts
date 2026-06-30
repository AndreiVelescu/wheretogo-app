import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentLikeCreateInput } from "../../../inputs/CommentLikeCreateInput";
import { CommentLikeUpdateInput } from "../../../inputs/CommentLikeUpdateInput";
import { CommentLikeWhereUniqueInput } from "../../../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCommentLikeArgs {
  @TypeGraphQL.Field(_type => CommentLikeWhereUniqueInput, {
    nullable: false
  })
  where!: CommentLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentLikeCreateInput, {
    nullable: false
  })
  create!: CommentLikeCreateInput;

  @TypeGraphQL.Field(_type => CommentLikeUpdateInput, {
    nullable: false
  })
  update!: CommentLikeUpdateInput;
}
