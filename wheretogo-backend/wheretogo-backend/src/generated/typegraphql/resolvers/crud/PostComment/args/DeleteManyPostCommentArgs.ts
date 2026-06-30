import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentWhereInput } from "../../../inputs/PostCommentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostCommentArgs {
  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;
}
