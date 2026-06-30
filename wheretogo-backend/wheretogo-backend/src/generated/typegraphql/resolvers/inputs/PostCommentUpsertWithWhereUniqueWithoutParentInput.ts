import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutParentInput } from "../inputs/PostCommentCreateWithoutParentInput";
import { PostCommentUpdateWithoutParentInput } from "../inputs/PostCommentUpdateWithoutParentInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpsertWithWhereUniqueWithoutParentInput", {})
export class PostCommentUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutParentInput, {
    nullable: false
  })
  update!: PostCommentUpdateWithoutParentInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutParentInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutParentInput;
}
