import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentCreateInput } from "../../../inputs/PostCommentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostCommentArgs {
  @TypeGraphQL.Field(_type => PostCommentCreateInput, {
    nullable: false
  })
  data!: PostCommentCreateInput;
}
