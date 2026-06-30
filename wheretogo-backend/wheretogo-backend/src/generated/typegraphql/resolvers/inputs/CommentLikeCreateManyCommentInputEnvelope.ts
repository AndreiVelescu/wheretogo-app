import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateManyCommentInput } from "../inputs/CommentLikeCreateManyCommentInput";

@TypeGraphQL.InputType("CommentLikeCreateManyCommentInputEnvelope", {})
export class CommentLikeCreateManyCommentInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentLikeCreateManyCommentInput], {
    nullable: false
  })
  data!: CommentLikeCreateManyCommentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
