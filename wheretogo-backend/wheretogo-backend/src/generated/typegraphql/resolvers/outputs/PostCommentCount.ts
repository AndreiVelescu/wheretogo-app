import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCountLikesArgs } from "./args/PostCommentCountLikesArgs";
import { PostCommentCountRepliesArgs } from "./args/PostCommentCountRepliesArgs";

@TypeGraphQL.ObjectType("PostCommentCount", {
  simpleResolvers: true
})
export class PostCommentCount {
  replies!: number;
  likes!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "replies",
    nullable: false
  })
  getReplies(@TypeGraphQL.Root() root: PostCommentCount, @TypeGraphQL.Args() args: PostCommentCountRepliesArgs): number {
    return root.replies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likes",
    nullable: false
  })
  getLikes(@TypeGraphQL.Root() root: PostCommentCount, @TypeGraphQL.Args() args: PostCommentCountLikesArgs): number {
    return root.likes;
  }
}
