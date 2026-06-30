import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPostCommentParentArgs } from "./args/CreateManyAndReturnPostCommentParentArgs";
import { Post } from "../../models/Post";
import { PostComment } from "../../models/PostComment";
import { User } from "../../models/User";

@TypeGraphQL.ObjectType("CreateManyAndReturnPostComment", {
  simpleResolvers: true
})
export class CreateManyAndReturnPostComment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  postId!: number;

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
  parentId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likesCount!: number;

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
  editedAt!: Date | null;

  @TypeGraphQL.Field(_type => Post, {
    nullable: false
  })
  post!: Post;

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  author!: User;

  parent!: PostComment | null;

  @TypeGraphQL.Field(_type => PostComment, {
    name: "parent",
    nullable: true
  })
  getParent(@TypeGraphQL.Root() root: CreateManyAndReturnPostComment, @TypeGraphQL.Args() args: CreateManyAndReturnPostCommentParentArgs): PostComment | null {
    return root.parent;
  }
}
