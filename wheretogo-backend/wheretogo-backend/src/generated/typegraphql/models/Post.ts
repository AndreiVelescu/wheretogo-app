import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Location } from "../models/Location";
import { PostCollectionItem } from "../models/PostCollectionItem";
import { PostComment } from "../models/PostComment";
import { PostLike } from "../models/PostLike";
import { PostMedia } from "../models/PostMedia";
import { PostMetrics } from "../models/PostMetrics";
import { PostReport } from "../models/PostReport";
import { PostShare } from "../models/PostShare";
import { SavedPost } from "../models/SavedPost";
import { Trip } from "../models/Trip";
import { User } from "../models/User";
import { PostType } from "../enums/PostType";
import { PostVisibility } from "../enums/PostVisibility";
import { PostCount } from "../resolvers/outputs/PostCount";

@TypeGraphQL.ObjectType("Post", {
  simpleResolvers: true
})
export class Post {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  author?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => PostType, {
    nullable: false
  })
  type!: "EXPERIENCE" | "TIP" | "TRIP";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  tags!: string[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likesCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  commentsCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  savedCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sharesCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  viewsCount!: number;

  @TypeGraphQL.Field(_type => PostVisibility, {
    nullable: false
  })
  visibility!: "PUBLIC" | "FRIENDS" | "PRIVATE";

  location?: Location | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  locationId?: number | null;

  trip?: Trip | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tripId?: number | null;

  media?: PostMedia[];

  likes?: PostLike[];

  comments?: PostComment[];

  saves?: SavedPost[];

  shares?: PostShare[];

  reports?: PostReport[];

  collections?: PostCollectionItem[];

  metrics?: PostMetrics | null;

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
  publishedAt?: Date | null;

  @TypeGraphQL.Field(_type => PostCount, {
    nullable: true
  })
  _count?: PostCount | null;
}
