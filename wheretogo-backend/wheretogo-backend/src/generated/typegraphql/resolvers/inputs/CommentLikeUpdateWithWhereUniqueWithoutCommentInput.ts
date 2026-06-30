import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeUpdateWithoutCommentInput } from "../inputs/CommentLikeUpdateWithoutCommentInput";
import { CommentLikeWhereUniqueInput } from "../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.InputType("CommentLikeUpdateWithWhereUniqueWithoutCommentInput", {})
export class CommentLikeUpdateWithWhereUniqueWithoutCommentInput {
  @TypeGraphQL.Field(_type => CommentLikeWhereUniqueInput, {
    nullable: false
  })
  where!: CommentLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentLikeUpdateWithoutCommentInput, {
    nullable: false
  })
  data!: CommentLikeUpdateWithoutCommentInput;
}
