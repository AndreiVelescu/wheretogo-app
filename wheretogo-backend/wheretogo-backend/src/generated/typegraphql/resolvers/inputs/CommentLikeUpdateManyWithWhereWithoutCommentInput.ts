import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeScalarWhereInput } from "../inputs/CommentLikeScalarWhereInput";
import { CommentLikeUpdateManyMutationInput } from "../inputs/CommentLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("CommentLikeUpdateManyWithWhereWithoutCommentInput", {})
export class CommentLikeUpdateManyWithWhereWithoutCommentInput {
  @TypeGraphQL.Field(_type => CommentLikeScalarWhereInput, {
    nullable: false
  })
  where!: CommentLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => CommentLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: CommentLikeUpdateManyMutationInput;
}
