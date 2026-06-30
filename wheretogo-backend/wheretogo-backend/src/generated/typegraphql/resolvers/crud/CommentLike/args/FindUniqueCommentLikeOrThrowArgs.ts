import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentLikeWhereUniqueInput } from "../../../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCommentLikeOrThrowArgs {
  @TypeGraphQL.Field(_type => CommentLikeWhereUniqueInput, {
    nullable: false
  })
  where!: CommentLikeWhereUniqueInput;
}
