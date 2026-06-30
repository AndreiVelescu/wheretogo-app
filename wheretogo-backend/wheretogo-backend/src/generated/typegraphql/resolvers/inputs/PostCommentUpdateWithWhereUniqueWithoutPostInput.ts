import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentUpdateWithoutPostInput } from "../inputs/PostCommentUpdateWithoutPostInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentUpdateWithWhereUniqueWithoutPostInput", {})
export class PostCommentUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutPostInput, {
    nullable: false
  })
  data!: PostCommentUpdateWithoutPostInput;
}
