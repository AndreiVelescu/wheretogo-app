import { gql } from "@apollo/client";
import { apolloClient } from "../lib/apolloClient";
import { ApiResponse, User } from "../types/auth";
export interface AddFavoritePayload {
  locationId: number;
}

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

const USERS_QUERY = gql`
  query Users {
    users {
      id
      name
      email
      avatar
      role
    }
  }
`;

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

const MY_FAVORITES_QUERY = gql`
  query MyFavorites {
    myFavorites {
      id
      name
      type
      photos
      rating
    }
  }
`;

const ADD_FAVORITE_MUTATION = gql`
  mutation AddFavorite($input: AddFavoriteInput!) {
    addFavorite(input: $input) {
      message
    }
  }
`;

const REMOVE_FAVORITE_MUTATION = gql`
  mutation RemoveFavorite($locationId: Int!) {
    removeFavorite(locationId: $locationId) {
      message
    }
  }
`;
export const userService = {
  async getCurrentUser(): Promise<ApiResponse<User>> {
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
      message: "User loaded",
      statusCode: 200,
    };
  },

  async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    const result = await apolloClient.mutate<{ updateProfile: User }>({
      mutation: UPDATE_PROFILE_MUTATION,
      variables: { input: userData },
    });
    return {
      success: true,
      data: result.data?.updateProfile,
      message: "Profile updated",
      statusCode: 200,
    };
  },
  async getAllUsers(): Promise<ApiResponse<User[]>> {
    const result = await apolloClient.query<{ users: User[] }>({
      query: USERS_QUERY,
      fetchPolicy: "network-only",
    });
    return {
      success: true,
      data: result.data?.users || [],
      message: "Users loaded",
      statusCode: 200,
    };
  },

  async getUserById(id: number): Promise<ApiResponse<User>> {
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
      message: "User loaded",
      statusCode: 200,
    };
  },

  async updateUser(
    id: number,
    userData: Partial<User>
  ): Promise<ApiResponse<User>> {
    return {
      success: false,
      data: undefined,
      message: "Update user not implemented in GraphQL",
      statusCode: 0,
    };
  },

  async deleteUser(id: number): Promise<ApiResponse<null>> {
    return {
      success: false,
      data: null,
      message: "Delete user not implemented in GraphQL",
      statusCode: 0,
    };
  },

  // --- Favorites ---
  async getMyFavorites(): Promise<ApiResponse<User[]>> {
    const result = await apolloClient.query<{ myFavorites: User[] }>({
      query: MY_FAVORITES_QUERY,
      fetchPolicy: "network-only",
    });
    return {
      success: true,
      data: result.data?.myFavorites || [],
      message: "Favorites loaded",
      statusCode: 200,
    };
  },

  async addFavorite(payload: AddFavoritePayload): Promise<ApiResponse<null>> {
    await apolloClient.mutate({
      mutation: ADD_FAVORITE_MUTATION,
      variables: { input: payload },
    });
    return {
      success: true,
      data: null,
      message: "Favorite added",
      statusCode: 200,
    };
  },

  async removeFavorite(locationId: number): Promise<ApiResponse<null>> {
    await apolloClient.mutate({
      mutation: REMOVE_FAVORITE_MUTATION,
      variables: { locationId },
    });
    return {
      success: true,
      data: null,
      message: "Favorite removed",
      statusCode: 200,
    };
  },

  // --- Follow ---
  async followUser(targetUserId: number): Promise<ApiResponse<null>> {
    await apolloClient.mutate({
      mutation: FOLLOW_USER_MUTATION,
      variables: { targetUserId },
    });
    return {
      success: true,
      data: null,
      message: "User followed",
      statusCode: 200,
    };
  },

  async unfollowUser(targetUserId: number): Promise<ApiResponse<null>> {
    await apolloClient.mutate({
      mutation: UNFOLLOW_USER_MUTATION,
      variables: { targetUserId },
    });
    return {
      success: true,
      data: null,
      message: "User unfollowed",
      statusCode: 200,
    };
  },

  async getFollowers(userId: number): Promise<ApiResponse<User[]>> {
    const result = await apolloClient.query<{ followers: User[] }>({
      query: FOLLOWERS_QUERY,
      variables: { userId },
    });
    return {
      success: true,
      data: result.data?.followers || [],
      message: "Followers loaded",
      statusCode: 200,
    };
  },

  async getFollowing(userId: number): Promise<ApiResponse<User[]>> {
    const result = await apolloClient.query<{ following: User[] }>({
      query: FOLLOWING_QUERY,
      variables: { userId },
    });
    return {
      success: true,
      data: result.data?.following || [],
      message: "Following loaded",
      statusCode: 200,
    };
  },
};
