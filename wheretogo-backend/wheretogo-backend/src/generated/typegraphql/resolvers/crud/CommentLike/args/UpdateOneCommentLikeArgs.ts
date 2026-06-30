import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentLikeUpdateInput } from "../../../inputs/CommentLikeUpdateInput";
import { CommentLikeWhereUniqueInput } from "../../../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCommentLikeArgs {
  @TypeGraphQL.Field(_type => CommentLikeUpdateInput, {
    nullable: false
  })
  data!: CommentLikeUpdateInput;

  @TypeGraphQL.Field(_type => CommentLikeWhereUniqueInput, {
    nullable: false
  })
  where!: CommentLikeWhereUniqueInput;
}
