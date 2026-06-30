import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentWhereUniqueInput } from "../../../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePostCommentOrThrowArgs {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;
}
