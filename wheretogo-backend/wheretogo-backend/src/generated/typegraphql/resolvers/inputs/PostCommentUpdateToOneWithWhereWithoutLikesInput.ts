import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentUpdateWithoutLikesInput } from "../inputs/PostCommentUpdateWithoutLikesInput";
import { PostCommentWhereInput } from "../inputs/PostCommentWhereInput";

@TypeGraphQL.InputType("PostCommentUpdateToOneWithWhereWithoutLikesInput", {})
export class PostCommentUpdateToOneWithWhereWithoutLikesInput {
  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutLikesInput, {
    nullable: false
  })
  data!: PostCommentUpdateWithoutLikesInput;
}
