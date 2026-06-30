import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreatePostInput,
  UpdatePostInput,
  PostFilterInput,
  CreateCommentInput,
  UpdateCommentInput,
  CreateCollectionInput,
  UpdateCollectionInput,
  AddPostToCollectionInput,
  ReportPostInput,
  SavePostInput,
  SharePostInput,
} from './types';

import { Post, PostVisibility } from '../generated/typegraphql';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  // ─────────────────────────────────────────────────────────
  // POSTS CRUD
  // ─────────────────────────────────────────────────────────

  async createPost(userId: number, input: CreatePostInput) {
    const { media, publishNow, locationId, tripId, ...postData } = input;

    const post = await this.prisma.post.create({
      data: {
        ...postData,
        authorId: userId,
        ...(locationId && { locationId }),
        ...(tripId && { tripId }),
        publishedAt: publishNow ? new Date() : null,
        ...(media &&
          media.length > 0 && {
            media: {
              create: media.map((m, index) => ({
                type: m.type,
                url: m.url,
                thumbnail: m.thumbnail,
                order: m.order ?? index,
                width: m.width,
                height: m.height,
                duration: m.duration,
              })),
            },
          }),
      },
      include: {
        author: { select: { id: true, name: true, avatar: true, bio: true } },
        location: {
          select: { id: true, name: true, address: true, type: true },
        },
        trip: { select: { id: true, title: true, city: true, country: true } },
        media: { orderBy: { order: 'asc' } },
      },
    });

    return post;
  }

  async getMyPosts(userId: number) {
    return this.prisma.post.findMany({
      where: { authorId: userId },
      orderBy: { createdAt: 'desc' },
      include: {
        location: {
          select: { id: true, name: true, address: true, type: true },
        },
        trip: { select: { id: true, title: true, city: true, country: true } },
        media: { orderBy: { order: 'asc' } },
      },
    });
  }

  async getPostsByUserId(userId: number) {
    return this.prisma.post.findMany({
      where: {
        authorId: userId,
        visibility: 'PUBLIC',
        publishedAt: { not: null },
      },
      orderBy: { createdAt: 'desc' },
      include: {
        author: { select: { id: true, name: true, avatar: true, bio: true } },
        location: {
          select: { id: true, name: true, address: true, type: true },
        },
        trip: { select: { id: true, title: true, city: true, country: true } },
        media: { orderBy: { order: 'asc' } },
        _count: {
          select: {
            likes: true,
            comments: true,
            saves: true,
            shares: true,
          },
        },
      },
    });
  }

  async updatePost(userId: number, input: UpdatePostInput) {
    const { id, ...updateData } = input;

    // Verify ownership
    const post = await this.prisma.post.findUnique({
      where: { id },
      select: { authorId: true },
    });

    if (!post || post.authorId !== userId) {
      throw new Error('Post not found or unauthorized');
    }

    return this.prisma.post.update({
      where: { id },
      data: updateData,
      include: {
        author: { select: { id: true, name: true, avatar: true, bio: true } },
        location: {
          select: { id: true, name: true, address: true, type: true },
        },
        trip: { select: { id: true, title: true, city: true, country: true } },
        media: { orderBy: { order: 'asc' } },
      },
    });
  }

  async deletePost(userId: number, postId: number) {
    const post = await this.prisma.post.findUnique({
      where: { id: postId },
      select: { authorId: true },
    });

    if (!post || post.authorId !== userId) {
      throw new Error('Post not found or unauthorized');
    }

    await this.prisma.post.delete({ where: { id: postId } });
    return true;
  }

  async getPostById(postId: number, currentUserId?: number) {
    const post = await this.prisma.post.findUnique({
      where: { id: postId },
      include: {
        author: { select: { id: true, name: true, avatar: true, bio: true } },
        location: {
          select: { id: true, name: true, address: true, type: true },
        },
        trip: { select: { id: true, title: true, city: true, country: true } },
        media: { orderBy: { order: 'asc' } },
        _count: {
          select: {
            likes: true,
            comments: true,
            saves: true,
            shares: true,
          },
        },
      },
    });

    if (!post) {
      throw new Error('Post not found');
    }

    // Increment views
    await this.incrementViews(postId);

    // Check if current user liked/saved this post
    let isLikedByMe = false;
    let isSavedByMe = false;

    if (currentUserId) {
      const [like, save] = await Promise.all([
        this.prisma.postLike.findUnique({
          where: { userId_postId: { userId: currentUserId, postId } },
        }),
        this.prisma.savedPost.findUnique({
          where: { userId_postId: { userId: currentUserId, postId } },
        }),
      ]);

      isLikedByMe = !!like;
      isSavedByMe = !!save;
    }

    return {
      ...post,
      isLikedByMe,
      isSavedByMe,
    };
  }

  async getFeed(
    filters: PostFilterInput,
    limit = 20,
    cursor?: string,
    currentUserId?: number,
  ) {
    const where: any = {
      visibility: PostVisibility.PUBLIC,
      publishedAt: { not: null },
    };

    if (filters.type) where.type = filters.type;
    if (filters.authorId) where.authorId = filters.authorId;
    if (filters.locationId) where.locationId = filters.locationId;
    if (filters.tripId) where.tripId = filters.tripId;
    if (filters.tags && filters.tags.length > 0) {
      where.tags = { hasSome: filters.tags };
    }
    if (filters.search) {
      where.OR = [
        { title: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    const posts = await this.prisma.post.findMany({
      where,
      take: limit + 1,
      ...(cursor && { cursor: { id: parseInt(cursor) }, skip: 1 }),
      orderBy: { createdAt: 'desc' },
      include: {
        author: { select: { id: true, name: true, avatar: true, bio: true } },
        location: {
          select: { id: true, name: true, address: true, type: true },
        },
        trip: { select: { id: true, title: true, city: true, country: true } },
        media: { orderBy: { order: 'asc' } },
      },
    });

    const hasMore = posts.length > limit;
    const items = hasMore ? posts.slice(0, -1) : posts;

    // Enrich with isLikedByMe, isSavedByMe if user is authenticated
    const enrichedPosts = await Promise.all(
      items.map(async (post) => {
        let isLikedByMe = false;
        let isSavedByMe = false;

        if (currentUserId) {
          const [like, save] = await Promise.all([
            this.prisma.postLike.findUnique({
              where: {
                userId_postId: { userId: currentUserId, postId: post.id },
              },
            }),
            this.prisma.savedPost.findUnique({
              where: {
                userId_postId: { userId: currentUserId, postId: post.id },
              },
            }),
          ]);

          isLikedByMe = !!like;
          isSavedByMe = !!save;
        }

        return { ...post, isLikedByMe, isSavedByMe };
      }),
    );

    return {
      posts: enrichedPosts,
      hasMore,
      cursor: hasMore ? items[items.length - 1].id.toString() : null,
    };
  }

  async publishPost(userId: number, postId: number) {
    const post = await this.prisma.post.findUnique({
      where: { id: postId },
      select: { authorId: true },
    });

    if (!post || post.authorId !== userId) {
      throw new Error('Post not found or unauthorized');
    }

    return this.prisma.post.update({
      where: { id: postId },
      data: { publishedAt: new Date() },
    });
  }

  async getMyFeed(
    userId: number,
    filters: PostFilterInput,
    limit = 20,
    cursor?: string,
  ) {
    // ============================================================
    // STEP 1: User Profiling - Gather user context
    // ============================================================
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        followers: true, // People I follow (I am userId, they are followerId)
        favorites: true,
        postLikes: {
          select: { post: { select: { type: true, tags: true } } },
          take: 50,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!user) throw new Error('User not found');

    const followingIds = user.followers.map((f) => f.followerId);
    const favoriteLocationIds = user.favorites.map((f) => f.locationId);

    // Extract user interests from liked posts
    const userInterestTags = new Set<string>();
    user.postLikes.forEach((like) => {
      like.post.tags.forEach((tag) => userInterestTags.add(tag));
    });

    // ============================================================
    // STEP 2: Candidate Generation - Gather potential posts
    // ============================================================
    const candidatesQuery: any = {
      publishedAt: { not: null },
      visibility: 'PUBLIC',
      AND: [],
    };

    // Apply user filters if provided
    if (filters.type) candidatesQuery.type = filters.type;
    if (filters.search) {
      candidatesQuery.OR = [
        { title: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    // Exclude user's own posts from feed
    candidatesQuery.authorId = { not: userId };

    const rawPosts = await this.prisma.post.findMany({
      where: candidatesQuery,
      take: 200, // Get more candidates than needed for better ranking
      ...(cursor && { cursor: { id: parseInt(cursor) }, skip: 1 }),
      orderBy: { createdAt: 'desc' },
      include: {
        author: { select: { id: true, name: true, avatar: true, bio: true } },
        location: {
          select: { id: true, name: true, address: true, type: true },
        },
        trip: { select: { id: true, title: true, city: true, country: true } },
        media: { orderBy: { order: 'asc' } },
        _count: {
          select: { likes: true, comments: true, saves: true, shares: true },
        },
      },
    });

    // ============================================================
    // STEP 3: Filtering - Remove unwanted content
    // ============================================================
    // Already filtered by Prisma query (public, published)

    // ============================================================
    // STEP 4: Feature Engineering & Scoring
    // ============================================================
    const now = new Date();
    const scoredPosts = await Promise.all(
      rawPosts.map(async (post) => {
        // --- Time Decay Score (0-1) ---
        const postAgeHours =
          (now.getTime() - post.createdAt.getTime()) / (1000 * 60 * 60);
        const recencyScore = Math.exp(-postAgeHours / 24); // Decay over 24 hours

        // --- Engagement Score (normalized) ---
        const totalEngagement =
          post._count.likes * 1.0 +
          post._count.comments * 2.0 +
          post._count.saves * 3.0 +
          post._count.shares * 2.5;
        const engagementScore = Math.min(totalEngagement / 100, 1); // Cap at 1

        // --- Relationship Score (0-1) ---
        const isFollowing = followingIds.includes(post.authorId);
        const relationshipScore = isFollowing ? 1.0 : 0.3;

        // --- Relevance Score (interest matching) ---
        const postTags = new Set(post.tags);
        const matchingTags = [...userInterestTags].filter((tag) =>
          postTags.has(tag),
        );
        const relevanceScore = matchingTags.length > 0 ? 0.8 : 0.4;

        // --- Location Interest Score ---
        const locationScore =
          post.locationId && favoriteLocationIds.includes(post.locationId)
            ? 1.0
            : 0.5;

        // --- Virality Score (trending detection) ---
        const viralityScore =
          postAgeHours < 6 && totalEngagement > 50 ? 1.2 : 1.0;

        // --- Check if user already interacted ---
        const [isLikedByMe, isSavedByMe] = await Promise.all([
          this.prisma.postLike.findUnique({
            where: { userId_postId: { userId, postId: post.id } },
          }),
          this.prisma.savedPost.findUnique({
            where: { userId_postId: { userId, postId: post.id } },
          }),
        ]);

        // ============================================================
        // STEP 5: ML-like Prediction Score (Weighted Sum)
        // ============================================================
        const weights = {
          recency: 0.25,
          engagement: 0.2,
          relationship: 0.3,
          relevance: 0.15,
          location: 0.1,
        };

        const predictionScore =
          weights.recency * recencyScore +
          weights.engagement * engagementScore +
          weights.relationship * relationshipScore +
          weights.relevance * relevanceScore +
          weights.location * locationScore;

        const finalScore = predictionScore * viralityScore;

        return {
          ...post,
          isLikedByMe: !!isLikedByMe,
          isSavedByMe: !!isSavedByMe,
          _score: finalScore,
          _signals: {
            recencyScore,
            engagementScore,
            relationshipScore,
            relevanceScore,
            locationScore,
            viralityScore,
          },
        };
      }),
    );

    // ============================================================
    // STEP 6: Business Logic & Adjustments
    // ============================================================
    const adjustedPosts = scoredPosts.map((post) => {
      let score = post._score;

      // Boost posts from close friends (last interaction < 7 days)
      if (followingIds.includes(post.authorId)) {
        score *= 1.2;
      }

      // Boost recent posts (< 2 hours)
      const postAgeHours =
        (now.getTime() - post.createdAt.getTime()) / (1000 * 60 * 60);
      if (postAgeHours < 2) {
        score *= 1.3;
      }

      // Penalize posts without media
      if (post.media.length === 0) {
        score *= 0.85;
      }

      // Boost posts with locations user favorited
      if (post.locationId && favoriteLocationIds.includes(post.locationId)) {
        score *= 1.4;
      }

      return { ...post, _score: score };
    });

    // ============================================================
    // STEP 7: Rank & Sort
    // ============================================================
    const rankedPosts = adjustedPosts.sort((a, b) => b._score - a._score);

    // ============================================================
    // STEP 8: Diversity & Final Selection
    // ============================================================
    const finalFeed: any[] = [];
    const seenAuthors = new Set<number>();
    const seenTypes = new Map<string, number>();

    for (const post of rankedPosts) {
      if (finalFeed.length >= limit) break;

      // Ensure diversity - max 3 posts from same author in top feed
      const authorCount = seenAuthors.has(post.authorId)
        ? Array.from(finalFeed).filter((p) => p.authorId === post.authorId)
            .length
        : 0;

      if (authorCount >= 3) continue;

      // Ensure type diversity
      const typeCount = seenTypes.get(post.type) || 0;
      if (typeCount >= Math.ceil(limit / 2)) continue;

      seenAuthors.add(post.authorId);
      seenTypes.set(post.type, typeCount + 1);

      // Remove scoring metadata before returning
      const { _score, _signals, ...cleanPost } = post;
      finalFeed.push(cleanPost);
    }

    // ============================================================
    // STEP 9: Pagination
    // ============================================================
    const hasMore = rankedPosts.length > limit;
    const nextCursor = hasMore
      ? finalFeed[finalFeed.length - 1]?.id.toString()
      : null;

    return {
      posts: finalFeed,
      total: finalFeed.length,
      hasMore,
      cursor: nextCursor,
    };
  }

  // ─────────────────────────────────────────────────────────
  // LIKES
  // ─────────────────────────────────────────────────────────

  async likePost(userId: number, postId: number) {
    // Check if already liked
    const existingLike = await this.prisma.postLike.findUnique({
      where: { userId_postId: { userId, postId } },
    });

    if (existingLike) {
      return existingLike; // Already liked, return existing
    }

    const like = await this.prisma.postLike.create({
      data: { userId, postId },
    });

    // Increment counter
    await this.prisma.post.update({
      where: { id: postId },
      data: { likesCount: { increment: 1 } },
    });

    return like;
  }

  async unlikePost(userId: number, postId: number) {
    await this.prisma.postLike.delete({
      where: { userId_postId: { userId, postId } },
    });

    // Decrement counter
    await this.prisma.post.update({
      where: { id: postId },
      data: { likesCount: { decrement: 1 } },
    });

    return true;
  }

  // ─────────────────────────────────────────────────────────
  // COMMENTS
  // ─────────────────────────────────────────────────────────

  async createComment(userId: number, input: CreateCommentInput) {
    const comment = await this.prisma.postComment.create({
      data: {
        postId: input.postId,
        authorId: userId,
        content: input.content,
        ...(input.parentId && { parentId: input.parentId }),
      },
      include: {
        author: { select: { id: true, name: true, avatar: true, bio: true } },
      },
    });

    // Increment post comments count
    await this.prisma.post.update({
      where: { id: input.postId },
      data: { commentsCount: { increment: 1 } },
    });

    return comment;
  }

  async updateComment(userId: number, input: UpdateCommentInput) {
    const comment = await this.prisma.postComment.findUnique({
      where: { id: input.id },
      select: { authorId: true },
    });

    if (!comment || comment.authorId !== userId) {
      throw new Error('Comment not found or unauthorized');
    }

    return this.prisma.postComment.update({
      where: { id: input.id },
      data: {
        content: input.content,
        editedAt: new Date(),
      },
      include: {
        author: { select: { id: true, name: true, avatar: true, bio: true } },
      },
    });
  }

  async deleteComment(userId: number, commentId: number) {
    const comment = await this.prisma.postComment.findUnique({
      where: { id: commentId },
      select: { authorId: true, postId: true },
    });

    if (!comment || comment.authorId !== userId) {
      throw new Error('Comment not found or unauthorized');
    }

    await this.prisma.postComment.delete({ where: { id: commentId } });

    // Decrement post comments count
    await this.prisma.post.update({
      where: { id: comment.postId },
      data: { commentsCount: { decrement: 1 } },
    });

    return true;
  }

  async getCommentsByPost(postId: number, currentUserId?: number) {
    const comments = await this.prisma.postComment.findMany({
      where: { postId, parentId: null },
      orderBy: { createdAt: 'desc' },
      include: {
        author: { select: { id: true, name: true, avatar: true, bio: true } },
        replies: {
          orderBy: { createdAt: 'asc' },
          include: {
            author: {
              select: { id: true, name: true, avatar: true, bio: true },
            },
          },
        },
      },
    });

    // Enrich with isLikedByMe
    if (currentUserId) {
      // Implementation for comment likes would go here
    }

    return comments;
  }

  async likeComment(userId: number, commentId: number) {
    // Check if already liked
    const existingLike = await this.prisma.commentLike.findUnique({
      where: { userId_commentId: { userId, commentId } },
    });

    if (existingLike) {
      return existingLike; // Already liked, return existing
    }

    const like = await this.prisma.commentLike.create({
      data: { userId, commentId },
    });

    await this.prisma.postComment.update({
      where: { id: commentId },
      data: { likesCount: { increment: 1 } },
    });

    return like;
  }

  async unlikeComment(userId: number, commentId: number) {
    await this.prisma.commentLike.delete({
      where: { userId_commentId: { userId, commentId } },
    });

    await this.prisma.postComment.update({
      where: { id: commentId },
      data: { likesCount: { decrement: 1 } },
    });

    return true;
  }

  // ─────────────────────────────────────────────────────────
  // SAVE / COLLECTIONS
  // ─────────────────────────────────────────────────────────

  async savePost(userId: number, input: SavePostInput) {
    const saved = await this.prisma.savedPost.create({
      data: {
        userId,
        postId: input.postId,
        note: input.note,
      },
    });

    await this.prisma.post.update({
      where: { id: input.postId },
      data: { savedCount: { increment: 1 } },
    });

    return saved;
  }

  async unsavePost(userId: number, postId: number) {
    await this.prisma.savedPost.delete({
      where: { userId_postId: { userId, postId } },
    });

    await this.prisma.post.update({
      where: { id: postId },
      data: { savedCount: { decrement: 1 } },
    });

    return true;
  }

  async getSavedPosts(userId: number) {
    return this.prisma.savedPost.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        post: {
          include: {
            author: {
              select: { id: true, name: true, avatar: true, bio: true },
            },
            media: { orderBy: { order: 'asc' } },
          },
        },
      },
    });
  }

  async createCollection(userId: number, input: CreateCollectionInput) {
    return this.prisma.postCollection.create({
      data: {
        userId,
        name: input.name,
        description: input.description,
        isPublic: input.isPublic ?? false,
        coverImage: input.coverImage,
      },
    });
  }

  async addPostToCollection(userId: number, input: AddPostToCollectionInput) {
    // Verify collection ownership
    const collection = await this.prisma.postCollection.findUnique({
      where: { id: input.collectionId },
      select: { userId: true },
    });

    if (!collection || collection.userId !== userId) {
      throw new Error('Collection not found or unauthorized');
    }

    return this.prisma.postCollectionItem.create({
      data: {
        collectionId: input.collectionId,
        postId: input.postId,
        order: input.order ?? 0,
        note: input.note,
      },
    });
  }

  // ─────────────────────────────────────────────────────────
  // SHARES
  // ─────────────────────────────────────────────────────────

  async sharePost(userId: number, input: SharePostInput) {
    const share = await this.prisma.postShare.create({
      data: {
        userId,
        postId: input.postId,
        platform: input.platform,
      },
    });

    await this.prisma.post.update({
      where: { id: input.postId },
      data: { sharesCount: { increment: 1 } },
    });

    return share;
  }

  // ─────────────────────────────────────────────────────────
  // REPORTS
  // ─────────────────────────────────────────────────────────

  async reportPost(userId: number, input: ReportPostInput) {
    return this.prisma.postReport.create({
      data: {
        reporterId: userId,
        postId: input.postId,
        reason: input.reason,
        details: input.details,
      },
    });
  }

  // ─────────────────────────────────────────────────────────
  // METRICS
  // ─────────────────────────────────────────────────────────

  async incrementViews(postId: number) {
    await this.prisma.post.update({
      where: { id: postId },
      data: { viewsCount: { increment: 1 } },
    });

    // Update metrics table
    await this.prisma.postMetrics.upsert({
      where: { postId },
      create: { postId, views: 1 },
      update: { views: { increment: 1 } },
    });
  }
}
