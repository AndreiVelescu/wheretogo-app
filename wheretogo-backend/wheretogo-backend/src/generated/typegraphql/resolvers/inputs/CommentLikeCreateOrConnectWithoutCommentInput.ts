import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateWithoutCommentInput } from "../inputs/CommentLikeCreateWithoutCommentInput";
import { CommentLikeWhereUniqueInput } from "../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.InputType("CommentLikeCreateOrConnectWithoutCommentInput", {})
export class CommentLikeCreateOrConnectWithoutCommentInput {
  @TypeGraphQL.Field(_type => CommentLikeWhereUniqueInput, {
    nullable: false
  })
  where!: CommentLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentLikeCreateWithoutCommentInput, {
    nullable: false
  })
  create!: CommentLikeCreateWithoutCommentInput;
}
