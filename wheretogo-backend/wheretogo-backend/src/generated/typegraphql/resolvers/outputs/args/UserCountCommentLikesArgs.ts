import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentLikeWhereInput } from "../../inputs/CommentLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountCommentLikesArgs {
  @TypeGraphQL.Field(_type => CommentLikeWhereInput, {
    nullable: true
  })
  where?: CommentLikeWhereInput | undefined;
}
