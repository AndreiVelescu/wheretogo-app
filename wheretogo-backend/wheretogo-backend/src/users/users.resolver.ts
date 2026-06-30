import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, AuthResponse, RefreshTokenResponse } from './models/user.model';
import {
  CreateUserInput,
  LoginUserInput,
  UpdateUserInput,
  AddFavoriteInput,
} from './inputs/user.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { MessageResponse } from '../common/models/message-response.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => AuthResponse)
  async register(@Args('input') input: CreateUserInput): Promise<AuthResponse> {
    return this.usersService.register(input);
  }

  @Mutation(() => AuthResponse)
  async login(@Args('input') input: LoginUserInput): Promise<AuthResponse> {
    return this.usersService.login(input);
  }

  @Mutation(() => RefreshTokenResponse)
  async refreshToken(
    @Args('refreshToken') refreshToken: string,
  ): Promise<RefreshTokenResponse> {
    return this.usersService.refreshAccessToken(refreshToken);
  }

  @Mutation(() => Boolean)
  async logout(@Args('refreshToken') refreshToken: string): Promise<boolean> {
    await this.usersService.revokeRefreshToken(refreshToken);
    return true;
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateAvatar(
    @Args('avatarUrl') avatarUrl: string,
    @Context() context,
  ): Promise<User> {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.addAvatar(userId, avatarUrl);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async removeAvatar(@Context() context): Promise<User> {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.removeAvatar(userId);
  }

  @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async me(@Context() context): Promise<User> {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.getProfile(userId);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateProfile(
    @Args('input') input: UpdateUserInput,
    @Context() context,
  ): Promise<User> {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.updateUser(userId, input);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateUserInput,
  ): Promise<User> {
    return this.usersService.updateUser(id, input);
  }

  @Mutation(() => MessageResponse)
  @UseGuards(GqlAuthGuard)
  async deleteUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<MessageResponse> {
    return this.usersService.deleteUser(id);
  }

  // Favorites
  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  async myFavorites(@Context() context) {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.getFavorites(userId);
  }

  @Mutation(() => MessageResponse)
  @UseGuards(GqlAuthGuard)
  async addFavorite(
    @Args('input') input: AddFavoriteInput,
    @Context() context,
  ): Promise<MessageResponse> {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.addFavorite(userId, input);
  }

  @Mutation(() => MessageResponse)
  @UseGuards(GqlAuthGuard)
  async removeFavorite(
    @Args('locationId', { type: () => Int }) locationId: number,
    @Context() context,
  ): Promise<MessageResponse> {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.removeFavorite(userId, locationId);
  }

  // Follow/Unfollow
  @Mutation(() => MessageResponse)
  @UseGuards(GqlAuthGuard)
  async followUser(
    @Args('targetUserId', { type: () => Int }) targetUserId: number,
    @Context() context,
  ): Promise<MessageResponse> {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.followUser(userId, targetUserId);
  }

  @Mutation(() => MessageResponse)
  @UseGuards(GqlAuthGuard)
  async unfollowUser(
    @Args('targetUserId', { type: () => Int }) targetUserId: number,
    @Context() context,
  ): Promise<MessageResponse> {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.unfollowUser(userId, targetUserId);
  }

  @Query(() => [User])
  async followers(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<User[]> {
    return this.usersService.getFollowers(userId);
  }

  @Query(() => [User])
  async following(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<User[]> {
    return this.usersService.getFollowing(userId);
  }

  @Query(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async isFollowing(
    @Args('targetUserId', { type: () => Int }) targetUserId: number,
    @Context() context,
  ): Promise<boolean> {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.isFollowing(userId, targetUserId);
  }

  @Query(() => User, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async favorite(
    @Args('locationId', { type: () => Int }) locationId: number,
    @Context() context,
  ) {
    const userId = context.req.user.sub || context.req.user.userId;
    return this.usersService.getOneFavorite(locationId, userId);
  }
}
