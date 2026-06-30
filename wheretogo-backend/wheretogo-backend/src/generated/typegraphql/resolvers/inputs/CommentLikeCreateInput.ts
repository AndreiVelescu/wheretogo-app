import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateNestedOneWithoutLikesInput } from "../inputs/PostCommentCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutCommentLikesInput } from "../inputs/UserCreateNestedOneWithoutCommentLikesInput";

@TypeGraphQL.InputType("CommentLikeCreateInput", {})
export class CommentLikeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCommentLikesInput;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  comment!: PostCommentCreateNestedOneWithoutLikesInput;
}
