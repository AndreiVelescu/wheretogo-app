import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutRepliesInput } from "../inputs/PostCommentCreateWithoutRepliesInput";
import { PostCommentUpdateWithoutRepliesInput } from "../inputs/PostCommentUpdateWithoutRepliesInput";
import { PostCommentWhereInput } from "../inputs/PostCommentWhereInput";

@TypeGraphQL.InputType("PostCommentUpsertWithoutRepliesInput", {})
export class PostCommentUpsertWithoutRepliesInput {
  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutRepliesInput, {
    nullable: false
  })
  update!: PostCommentUpdateWithoutRepliesInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutRepliesInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutRepliesInput;

  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;
}
