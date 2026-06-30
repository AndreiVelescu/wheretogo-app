import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentCreateInput } from "../../../inputs/PostCommentCreateInput";
import { PostCommentUpdateInput } from "../../../inputs/PostCommentUpdateInput";
import { PostCommentWhereUniqueInput } from "../../../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostCommentArgs {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentCreateInput, {
    nullable: false
  })
  create!: PostCommentCreateInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateInput, {
    nullable: false
  })
  update!: PostCommentUpdateInput;
}
