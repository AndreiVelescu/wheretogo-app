import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutLikesInput } from "../inputs/PostCommentCreateWithoutLikesInput";
import { PostCommentUpdateWithoutLikesInput } from "../inputs/PostCommentUpdateWithoutLikesInput";
import { PostCommentWhereInput } from "../inputs/PostCommentWhereInput";

@TypeGraphQL.InputType("PostCommentUpsertWithoutLikesInput", {})
export class PostCommentUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: PostCommentUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutLikesInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutLikesInput;

  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;
}
