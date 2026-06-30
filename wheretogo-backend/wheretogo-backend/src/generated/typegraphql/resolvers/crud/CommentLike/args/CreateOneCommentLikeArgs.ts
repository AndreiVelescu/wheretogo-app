import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentLikeCreateInput } from "../../../inputs/CommentLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCommentLikeArgs {
  @TypeGraphQL.Field(_type => CommentLikeCreateInput, {
    nullable: false
  })
  data!: CommentLikeCreateInput;
}
