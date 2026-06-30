import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCountCollectionsArgs } from "./args/PostCountCollectionsArgs";
import { PostCountCommentsArgs } from "./args/PostCountCommentsArgs";
import { PostCountLikesArgs } from "./args/PostCountLikesArgs";
import { PostCountMediaArgs } from "./args/PostCountMediaArgs";
import { PostCountReportsArgs } from "./args/PostCountReportsArgs";
import { PostCountSavesArgs } from "./args/PostCountSavesArgs";
import { PostCountSharesArgs } from "./args/PostCountSharesArgs";

@TypeGraphQL.ObjectType("PostCount", {
  simpleResolvers: true
})
export class PostCount {
  media!: number;
  likes!: number;
  comments!: number;
  saves!: number;
  shares!: number;
  reports!: number;
  collections!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "media",
    nullable: false
  })
  getMedia(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountMediaArgs): number {
    return root.media;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likes",
    nullable: false
  })
  getLikes(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountLikesArgs): number {
    return root.likes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "comments",
    nullable: false
  })
  getComments(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountCommentsArgs): number {
    return root.comments;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "saves",
    nullable: false
  })
  getSaves(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountSavesArgs): number {
    return root.saves;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "shares",
    nullable: false
  })
  getShares(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountSharesArgs): number {
    return root.shares;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "reports",
    nullable: false
  })
  getReports(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountReportsArgs): number {
    return root.reports;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "collections",
    nullable: false
  })
  getCollections(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountCollectionsArgs): number {
    return root.collections;
  }
}
