import { Field, InputType, ObjectType, Int } from 'type-graphql';

// Import enum-uri generate de Prisma
import {
  PostType,
  PostVisibility,
  MediaType,
  SharePlatform,
  ReportReason,
  ReportStatus,
} from '../generated/typegraphql/enums';

// ─────────────────────────────────────────────────────────
// MINIMAL TYPES (for nested data)
// ─────────────────────────────────────────────────────────

@ObjectType()
export class UserMinimal {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  bio?: string;
}

@ObjectType()
export class LocationMinimal {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => String)
  type!: string;
}

@ObjectType()
export class TripMinimal {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  title!: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  country?: string;
}

@ObjectType()
export class PostMetricsOutput {
  @Field(() => Int)
  views!: number;

  @Field(() => Int)
  clicks!: number;

  @Field(() => Int)
  impressions!: number;

  @Field(() => Number)
  engagementRate!: number;
}

@ObjectType()
export class CollectionWithPosts {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean)
  isPublic!: boolean;

  @Field(() => String, { nullable: true })
  coverImage?: string;

  @Field(() => [PostWithAuthor])
  posts!: PostWithAuthor[];

  @Field(() => Int)
  postsCount!: number;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}

// Enum-urile sunt deja generate de Prisma și înregistrate automat
// Vezi: src/generated/typegraphql/enums/

// ─────────────────────────────────────────────────────────
// INPUT TYPES - Post
// ─────────────────────────────────────────────────────────

@InputType()
export class CreatePostInput {
  @Field(() => PostType)
  type!: PostType;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true, defaultValue: [] })
  tags?: string[];

  @Field(() => PostVisibility, {
    nullable: true,
    defaultValue: PostVisibility.PUBLIC,
  })
  visibility?: PostVisibility;

  @Field(() => Int, { nullable: true })
  locationId?: number;

  @Field(() => Int, { nullable: true })
  tripId?: number;

  @Field(() => [PostMediaInput], { nullable: true })
  media?: PostMediaInput[];

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  publishNow?: boolean; // If true, set publishedAt to now
}

@ObjectType()
export class CreatePostOutput {
  @Field(() => Int)
  postId!: number;

  @Field(() => Boolean)
  success!: boolean;

  @Field(() => String, { nullable: true })
  message?: string;
}

@InputType()
export class UpdatePostInput {
  @Field(() => Int)
  id!: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field(() => PostVisibility, { nullable: true })
  visibility?: PostVisibility;

  @Field(() => Int, { nullable: true })
  locationId?: number;

  @Field(() => Int, { nullable: true })
  tripId?: number;
}

@InputType()
export class PostFilterInput {
  @Field(() => PostType, { nullable: true })
  type?: PostType;

  @Field(() => PostVisibility, { nullable: true })
  visibility?: PostVisibility;

  @Field(() => Int, { nullable: true })
  authorId?: number;

  @Field(() => Int, { nullable: true })
  locationId?: number;

  @Field(() => Int, { nullable: true })
  tripId?: number;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field(() => String, { nullable: true })
  search?: string; // Search in title and description
}

// ─────────────────────────────────────────────────────────
// INPUT TYPES - Media
// ─────────────────────────────────────────────────────────

@InputType()
export class PostMediaInput {
  @Field(() => MediaType)
  type!: MediaType;

  @Field(() => String)
  url!: string;

  @Field(() => String, { nullable: true })
  thumbnail?: string;

  @Field(() => Int, { nullable: true })
  order?: number;

  @Field(() => Int, { nullable: true })
  width?: number;

  @Field(() => Int, { nullable: true })
  height?: number;

  @Field(() => Int, { nullable: true })
  duration?: number; // For videos (seconds)
}

@InputType()
export class AddMediaToPostInput {
  @Field(() => Int)
  postId!: number;

  @Field(() => [PostMediaInput])
  media!: PostMediaInput[];
}

// ─────────────────────────────────────────────────────────
// INPUT TYPES - Comments
// ─────────────────────────────────────────────────────────

@InputType()
export class CreateCommentInput {
  @Field(() => Int)
  postId!: number;

  @Field(() => String)
  content!: string;

  @Field(() => Int, { nullable: true })
  parentId?: number; // For replies
}

@InputType()
export class UpdateCommentInput {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  content!: string;
}

// ─────────────────────────────────────────────────────────
// INPUT TYPES - Collections
// ─────────────────────────────────────────────────────────

@InputType()
export class CreateCollectionInput {
  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  isPublic?: boolean;

  @Field(() => String, { nullable: true })
  coverImage?: string;
}

@InputType()
export class UpdateCollectionInput {
  @Field(() => Int)
  id!: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Boolean, { nullable: true })
  isPublic?: boolean;

  @Field(() => String, { nullable: true })
  coverImage?: string;
}

@InputType()
export class AddPostToCollectionInput {
  @Field(() => Int)
  collectionId!: number;

  @Field(() => Int)
  postId!: number;

  @Field(() => String, { nullable: true })
  note?: string;

  @Field(() => Int, { nullable: true })
  order?: number;
}

// ─────────────────────────────────────────────────────────
// INPUT TYPES - Reports
// ─────────────────────────────────────────────────────────

@InputType()
export class ReportPostInput {
  @Field(() => Int)
  postId!: number;

  @Field(() => ReportReason)
  reason!: ReportReason;

  @Field(() => String, { nullable: true })
  details?: string;
}

@InputType()
export class ReviewReportInput {
  @Field(() => Int)
  reportId!: number;

  @Field(() => ReportStatus)
  status!: ReportStatus;
}

// ─────────────────────────────────────────────────────────
// INPUT TYPES - Interactions
// ─────────────────────────────────────────────────────────

@InputType()
export class SavePostInput {
  @Field(() => Int)
  postId!: number;

  @Field(() => String, { nullable: true })
  note?: string;
}

@InputType()
export class SharePostInput {
  @Field(() => Int)
  postId!: number;

  @Field(() => SharePlatform, { nullable: true })
  platform?: SharePlatform;
}

// ─────────────────────────────────────────────────────────
// RESPONSE TYPES
// ─────────────────────────────────────────────────────────

@ObjectType()
export class PostResponse {
  @Field(() => Boolean)
  success!: boolean;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => Int, { nullable: true })
  postId?: number;
}

@ObjectType()
export class PostFeedResponse {
  @Field(() => [PostWithAuthor])
  posts!: PostWithAuthor[];

  @Field(() => Int)
  total!: number;

  @Field(() => Boolean)
  hasMore!: boolean;

  @Field(() => String, { nullable: true })
  cursor?: string;
}

@ObjectType()
export class PostWithAuthor {
  @Field(() => Int)
  id!: number;

  @Field(() => PostType)
  type!: PostType;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => [String])
  tags!: string[];

  @Field(() => Int)
  likesCount!: number;

  @Field(() => Int)
  commentsCount!: number;

  @Field(() => Int)
  savedCount!: number;

  @Field(() => Int)
  sharesCount!: number;

  @Field(() => Int)
  viewsCount!: number;

  @Field(() => PostVisibility)
  visibility!: PostVisibility;

  @Field(() => UserMinimal)
  author!: UserMinimal;

  @Field(() => LocationMinimal, { nullable: true })
  location?: LocationMinimal;

  @Field(() => TripMinimal, { nullable: true })
  trip?: TripMinimal;

  @Field(() => [PostMediaOutput])
  media!: PostMediaOutput[];

  @Field(() => Boolean)
  isLikedByMe!: boolean;

  @Field(() => Boolean)
  isSavedByMe!: boolean;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => Date, { nullable: true })
  publishedAt?: Date;
}

@ObjectType()
export class PostMediaOutput {
  @Field(() => Int)
  id!: number;

  @Field(() => MediaType)
  type!: MediaType;

  @Field(() => String)
  url!: string;

  @Field(() => String, { nullable: true })
  thumbnail?: string;

  @Field(() => Int)
  order!: number;

  @Field(() => Int, { nullable: true })
  width?: number;

  @Field(() => Int, { nullable: true })
  height?: number;

  @Field(() => Int, { nullable: true })
  duration?: number;
}

@ObjectType()
export class CommentWithAuthor {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  content!: string;

  @Field(() => Int)
  likesCount!: number;

  @Field(() => UserMinimal)
  author!: UserMinimal;

  @Field(() => Int, { nullable: true })
  parentId?: number;

  @Field(() => [CommentWithAuthor], { nullable: true })
  replies?: CommentWithAuthor[];

  @Field(() => Boolean)
  isLikedByMe!: boolean;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date, { nullable: true })
  editedAt?: Date;
}
