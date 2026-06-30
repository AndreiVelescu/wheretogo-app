import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CommentLike } from "../models/CommentLike";
import { Post } from "../models/Post";
import { User } from "../models/User";
import { PostCommentCount } from "../resolvers/outputs/PostCommentCount";

@TypeGraphQL.ObjectType("PostComment", {
  simpleResolvers: true
})
export class PostComment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  post?: Post;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  postId!: number;

  author?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  parentId?: number | null;

  parent?: PostComment | null;

  replies?: PostComment[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likesCount!: number;

  likes?: CommentLike[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  editedAt?: Date | null;

  @TypeGraphQL.Field(_type => PostCommentCount, {
    nullable: true
  })
  _count?: PostCommentCount | null;
}
