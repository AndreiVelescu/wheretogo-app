import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentLikeUpdateManyMutationInput } from "../../../inputs/CommentLikeUpdateManyMutationInput";
import { CommentLikeWhereInput } from "../../../inputs/CommentLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCommentLikeArgs {
  @TypeGraphQL.Field(_type => CommentLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommentLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CommentLikeWhereInput, {
    nullable: true
  })
  where?: CommentLikeWhereInput | undefined;
}
