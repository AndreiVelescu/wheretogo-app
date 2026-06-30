import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentScalarWhereInput } from "../inputs/PostCommentScalarWhereInput";
import { PostCommentUpdateManyMutationInput } from "../inputs/PostCommentUpdateManyMutationInput";

@TypeGraphQL.InputType("PostCommentUpdateManyWithWhereWithoutParentInput", {})
export class PostCommentUpdateManyWithWhereWithoutParentInput {
  @TypeGraphQL.Field(_type => PostCommentScalarWhereInput, {
    nullable: false
  })
  where!: PostCommentScalarWhereInput;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostCommentUpdateManyMutationInput;
}
