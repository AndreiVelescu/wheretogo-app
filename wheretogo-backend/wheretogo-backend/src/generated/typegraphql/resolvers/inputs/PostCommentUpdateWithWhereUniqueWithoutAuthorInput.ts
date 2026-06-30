import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentUpdateWithoutAuthorInput } from "../inputs/PostCommentUpdateWithoutAuthorInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpdateWithWhereUniqueWithoutAuthorInput", {})
export class PostCommentUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: PostCommentUpdateWithoutAuthorInput;
}
