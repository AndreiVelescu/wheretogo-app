import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutLikesInput } from "../inputs/PostCommentCreateWithoutLikesInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentCreateOrConnectWithoutLikesInput", {})
export class PostCommentCreateOrConnectWithoutLikesInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutLikesInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutLikesInput;
}
