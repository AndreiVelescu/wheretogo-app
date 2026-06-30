import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCommentLikesInput } from "../inputs/UserCreateNestedOneWithoutCommentLikesInput";

@TypeGraphQL.InputType("CommentLikeCreateWithoutCommentInput", {})
export class CommentLikeCreateWithoutCommentInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutCommentLikesInput;
}
