/**
 * 👤 User API Layer
 */

import { apolloClient } from "@/src/lib/apolloClient";
import { gql } from "@apollo/client";
import { ApiResponse, User } from "../auth/auth.types";
import { UpdateProfileInput } from "./user.types";

const USER_QUERY = gql`
  query User($id: Int!) {
    user(id: $id) {
      id
      name
      email
      avatar
      role
    }
  }
`;

const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      email
      avatar
      role
    }
  }
`;

const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfile($input: UpdateUserInput!) {
    updateProfile(input: $input) {
      id
      name
      email
      avatar
      role
    }
  }
`;

const FOLLOW_USER_MUTATION = gql`
  mutation FollowUser($targetUserId: Int!) {
    followUser(targetUserId: $targetUserId) {
      message
    }
  }
`;

const UNFOLLOW_USER_MUTATION = gql`
  mutation UnfollowUser($targetUserId: Int!) {
    unfollowUser(targetUserId: $targetUserId) {
      message
    }
  }
`;

const FOLLOWERS_QUERY = gql`
  query Followers($userId: Int!) {
    followers(userId: $userId) {
      id
      name
      email
      avatar
      role
    }
  }
`;

const FOLLOWING_QUERY = gql`
  query Following($userId: Int!) {
    following(userId: $userId) {
      id
      name
      email
      avatar
      role
    }
  }
`;

export const userApi = {
  /**
   * Get current user
   */
  async getCurrentUser(): Promise<ApiResponse<User>> {
    try {
      const result = await apolloClient.query<{ me: User }>({
        query: ME_QUERY,
        fetchPolicy: "network-only",
      });
      if (!result.data?.me) {
        throw new Error("Failed to load user");
      }
      return {
        success: true,
        data: result.data.me,
        message: "User loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || "Failed to load user");
    }
  },

  /**
   * Get user by ID
   */
  async getById(id: number): Promise<ApiResponse<User>> {
    try {
      const result = await apolloClient.query<{ user: User }>({
        query: USER_QUERY,
        variables: { id },
      });
      if (!result.data?.user) {
        throw new Error("Failed to load user");
      }
      return {
        success: true,
        data: result.data.user,
        message: "User loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.response?.data?.message || "Failed to load user");
    }
  },

  /**
   * Update profile
   */
  async updateProfile(
    userData: UpdateProfileInput
  ): Promise<ApiResponse<User>> {
    try {
      const result = await apolloClient.mutate<{ updateProfile: User }>({
        mutation: UPDATE_PROFILE_MUTATION,
        variables: { input: userData },
      });
      return {
        success: true,
        data: result.data?.updateProfile,
        message: "Profile updated successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || "Failed to update profile"
      );
    }
  },

  /**
   * Follow user
   */
  async follow(targetUserId: number): Promise<ApiResponse<null>> {
    try {
      await apolloClient.mutate({
        mutation: FOLLOW_USER_MUTATION,
        variables: { targetUserId },
      });
      return {
        success: true,
        data: null,
        message: "User followed successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || "Failed to follow user"
      );
    }
  },

  /**
   * Unfollow user
   */
  async unfollow(targetUserId: number): Promise<ApiResponse<null>> {
    try {
      await apolloClient.mutate({
        mutation: UNFOLLOW_USER_MUTATION,
        variables: { targetUserId },
      });
      return {
        success: true,
        data: null,
        message: "User unfollowed successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || "Failed to unfollow user"
      );
    }
  },

  /**
   * Get followers
   */
  async getFollowers(userId: number): Promise<ApiResponse<User[]>> {
    try {
      const result = await apolloClient.query<{ followers: User[] }>({
        query: FOLLOWERS_QUERY,
        variables: { userId },
      });
      return {
        success: true,
        data: result.data?.followers || [],
        message: "Followers loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || "Failed to load followers"
      );
    }
  },

  /**
   * Get following
   */
  async getFollowing(userId: number): Promise<ApiResponse<User[]>> {
    try {
      const result = await apolloClient.query<{ following: User[] }>({
        query: FOLLOWING_QUERY,
        variables: { userId },
      });
      return {
        success: true,
        data: result.data?.following || [],
        message: "Following loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || "Failed to load following"
      );
    }
  },
};
