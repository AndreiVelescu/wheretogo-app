import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentUpdateWithoutParentInput } from "../inputs/PostCommentUpdateWithoutParentInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpdateWithWhereUniqueWithoutParentInput", {})
export class PostCommentUpdateWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutParentInput, {
    nullable: false
  })
  data!: PostCommentUpdateWithoutParentInput;
}
