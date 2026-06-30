import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentUpdateInput } from "../../../inputs/PostCommentUpdateInput";
import { PostCommentWhereUniqueInput } from "../../../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostCommentArgs {
  @TypeGraphQL.Field(_type => PostCommentUpdateInput, {
    nullable: false
  })
  data!: PostCommentUpdateInput;

  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;
}
