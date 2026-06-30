import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateManyCommentInputEnvelope } from "../inputs/CommentLikeCreateManyCommentInputEnvelope";
import { CommentLikeCreateOrConnectWithoutCommentInput } from "../inputs/CommentLikeCreateOrConnectWithoutCommentInput";
import { CommentLikeCreateWithoutCommentInput } from "../inputs/CommentLikeCreateWithoutCommentInput";
import { CommentLikeWhereUniqueInput } from "../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.InputType("CommentLikeCreateNestedManyWithoutCommentInput", {})
export class CommentLikeCreateNestedManyWithoutCommentInput {
  @TypeGraphQL.Field(_type => [CommentLikeCreateWithoutCommentInput], {
    nullable: true
  })
  create?: CommentLikeCreateWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeCreateOrConnectWithoutCommentInput], {
    nullable: true
  })
  connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentLikeCreateManyCommentInputEnvelope, {
    nullable: true
  })
  createMany?: CommentLikeCreateManyCommentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentLikeWhereUniqueInput[] | undefined;
}
