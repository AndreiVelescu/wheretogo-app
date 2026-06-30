import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutAuthorInput } from "../inputs/PostCommentCreateWithoutAuthorInput";
import { PostCommentUpdateWithoutAuthorInput } from "../inputs/PostCommentUpdateWithoutAuthorInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpsertWithWhereUniqueWithoutAuthorInput", {})
export class PostCommentUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: PostCommentUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutAuthorInput;
}
