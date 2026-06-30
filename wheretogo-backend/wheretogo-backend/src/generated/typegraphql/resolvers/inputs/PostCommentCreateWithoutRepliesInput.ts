import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateNestedManyWithoutCommentInput } from "../inputs/CommentLikeCreateNestedManyWithoutCommentInput";
import { PostCommentCreateNestedOneWithoutRepliesInput } from "../inputs/PostCommentCreateNestedOneWithoutRepliesInput";
import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutPostCommentsInput } from "../inputs/UserCreateNestedOneWithoutPostCommentsInput";

@TypeGraphQL.InputType("PostCommentCreateWithoutRepliesInput", {})
export class PostCommentCreateWithoutRepliesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  likesCount?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  editedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostCommentsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutPostCommentsInput;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedOneWithoutRepliesInput, {
    nullable: true
  })
  parent?: PostCommentCreateNestedOneWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeCreateNestedManyWithoutCommentInput, {
    nullable: true
  })
  likes?: CommentLikeCreateNestedManyWithoutCommentInput | undefined;
}
