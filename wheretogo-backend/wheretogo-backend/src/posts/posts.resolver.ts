import { UseGuards } from '@nestjs/common';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Post, PostComment } from '../generated/typegraphql';
import { getUserIdFromContext } from '../graphql/custom/auth.helpers';
import { GqlAuthGuard } from '../users/guards/gql-auth.guard';
import { PostsService } from './posts.service';
import {
  AddPostToCollectionInput,
  CreateCollectionInput,
  CreateCommentInput,
  CreatePostInput,
  CreatePostOutput,
  PostFeedResponse,
  PostFilterInput,
  PostWithAuthor,
  ReportPostInput,
  SavePostInput,
  SharePostInput,
  UpdateCommentInput,
  UpdatePostInput,
} from './types';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => PostWithAuthor)
  async getPostById(@Arg('id', () => Int) id: number, @Ctx() ctx: any) {
    const userId = getUserIdFromContext(ctx);
    return this.postsService.getPostById(id, userId);
  }

  @Query(() => [Post])
  @UseGuards(GqlAuthGuard)
  async myPosts(@Ctx() ctx: any) {
    const userId = getUserIdFromContext(ctx);
    return this.postsService.getMyPosts(userId);
  }

  @Query(() => [Post])
  async getPostsByUserId(@Arg('userId', () => Int) userId: number) {
    return this.postsService.getPostsByUserId(userId);
  }

  @Query(() => PostFeedResponse)
  @UseGuards(GqlAuthGuard)
  async myFeed(
    @Arg('filters', () => PostFilterInput, { nullable: true })
    filters: PostFilterInput = {},
    @Arg('limit', () => Int, { nullable: true, defaultValue: 20 })
    limit: number = 20,
    @Arg('cursor', { nullable: true }) cursor?: string,
    @Ctx() ctx?: any,
  ): Promise<PostFeedResponse> {
    const userId = getUserIdFromContext(ctx);
    return this.postsService.getMyFeed(userId, filters, limit, cursor);
  }

  @Mutation(() => CreatePostOutput)
  @UseGuards(GqlAuthGuard)
  async createPost(
    @Arg('input') input: CreatePostInput,
    @Ctx() ctx: any,
  ): Promise<CreatePostOutput> {
    const userId = getUserIdFromContext(ctx);

    const post = await this.postsService.createPost(userId, input);

    return {
      success: true,
      postId: post.id,
      message: 'Post created successfully',
    };
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deletePost(
    @Arg('postId') postId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);

    await this.postsService.deletePost(userId, postId);

    return true;
  }

  @Mutation(() => CreatePostOutput)
  @UseGuards(GqlAuthGuard)
  async updatePost(
    @Arg('input') input: UpdatePostInput,
    @Ctx() ctx: any,
  ): Promise<CreatePostOutput> {
    const userId = getUserIdFromContext(ctx);

    const post = await this.postsService.updatePost(userId, input);

    return {
      success: true,
      postId: post.id,
      message: 'Post updated successfully',
    };
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async publishPost(
    @Arg('postId') postId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);

    await this.postsService.publishPost(userId, postId);

    return true;
  }

  // ─────────────────────────────────────────────────────────
  // LIKES
  // ─────────────────────────────────────────────────────────

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async likePost(
    @Arg('postId', () => Int) postId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.likePost(userId, postId);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async unlikePost(
    @Arg('postId', () => Int) postId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.unlikePost(userId, postId);
    return true;
  }

  // ─────────────────────────────────────────────────────────
  // COMMENTS
  // ─────────────────────────────────────────────────────────

  @Mutation(() => PostComment)
  @UseGuards(GqlAuthGuard)
  async createComment(
    @Arg('input') input: CreateCommentInput,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.postsService.createComment(userId, input);
  }

  @Mutation(() => PostComment)
  @UseGuards(GqlAuthGuard)
  async updateComment(
    @Arg('input') input: UpdateCommentInput,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.postsService.updateComment(userId, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async deleteComment(
    @Arg('commentId', () => Int) commentId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.deleteComment(userId, commentId);
    return true;
  }

  @Query(() => [PostComment])
  async getCommentsByPost(
    @Arg('postId', () => Int) postId: number,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.postsService.getCommentsByPost(postId, userId);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async likeComment(
    @Arg('commentId', () => Int) commentId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.likeComment(userId, commentId);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async unlikeComment(
    @Arg('commentId', () => Int) commentId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.unlikeComment(userId, commentId);
    return true;
  }

  // ─────────────────────────────────────────────────────────
  // SAVE / COLLECTIONS
  // ─────────────────────────────────────────────────────────

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async savePost(
    @Arg('input') input: SavePostInput,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.savePost(userId, input);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async unsavePost(
    @Arg('postId', () => Int) postId: number,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.unsavePost(userId, postId);
    return true;
  }

  @Query(() => [Post])
  @UseGuards(GqlAuthGuard)
  async getSavedPosts(@Ctx() ctx: any) {
    const userId = getUserIdFromContext(ctx);
    return this.postsService.getSavedPosts(userId);
  }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  async createCollection(
    @Arg('input') input: CreateCollectionInput,
    @Ctx() ctx: any,
  ) {
    const userId = getUserIdFromContext(ctx);
    return this.postsService.createCollection(userId, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async addPostToCollection(
    @Arg('input') input: AddPostToCollectionInput,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.addPostToCollection(userId, input);
    return true;
  }

  // ─────────────────────────────────────────────────────────
  // SHARES
  // ─────────────────────────────────────────────────────────

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async sharePost(
    @Arg('input') input: SharePostInput,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.sharePost(userId, input);
    return true;
  }

  // ─────────────────────────────────────────────────────────
  // REPORTS
  // ─────────────────────────────────────────────────────────

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async reportPost(
    @Arg('input') input: ReportPostInput,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);
    await this.postsService.reportPost(userId, input);
    return true;
  }

  // ─────────────────────────────────────────────────────────
  // METRICS
  // ─────────────────────────────────────────────────────────

  @Mutation(() => Boolean)
  async incrementViews(
    @Arg('postId', () => Int) postId: number,
  ): Promise<boolean> {
    await this.postsService.incrementViews(postId);
    return true;
  }
}
