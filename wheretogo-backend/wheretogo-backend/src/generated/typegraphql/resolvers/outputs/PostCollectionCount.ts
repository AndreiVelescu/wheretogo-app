import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCountPostsArgs } from "./args/PostCollectionCountPostsArgs";

@TypeGraphQL.ObjectType("PostCollectionCount", {
  simpleResolvers: true
})
export class PostCollectionCount {
  posts!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: PostCollectionCount, @TypeGraphQL.Args() args: PostCollectionCountPostsArgs): number {
    return root.posts;
  }
}
