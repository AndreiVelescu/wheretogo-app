/**
 * 🪝 User Hooks (Apollo)
 */

import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
import React from "react";
import { ApiResponse, User } from "../auth/auth.types";
import { UpdateProfileInput } from "./user.types";

const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      email
      avatar
      role
      nickname
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
      bio
      role
      createdAt
      _count {
        favorites
        reviews
        bookings
        followers
        following
      }
    }
  }
`;

const IS_FOLLOWING_QUERY = gql`
  query IsFollowing($targetUserId: Int!) {
    isFollowing(targetUserId: $targetUserId)
  }
`;

const USER_POSTS_QUERY = gql`
  query GetPostsByUserId($userId: Int!) {
    getPostsByUserId(userId: $userId) {
      id
      type
      title
      description
      tags
      likesCount
      commentsCount
      savedCount
      sharesCount
      viewsCount
      visibility
      author {
        id
        name
        avatar
        bio
      }
      location {
        id
        name
        address
        type
      }
      trip {
        id
        title
        city
        country
      }
      media {
        id
        type
        url
        thumbnail
        order
        width
        height
        duration
      }
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfile($input: UpdateUserInput!) {
    updateProfile(input: $input) {
      id
      name
      nickname
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

const UPDATE_AVATAR_MUTATION = gql`
  mutation UpdateAvatar($avatarUrl: String!) {
    updateAvatar(avatarUrl: $avatarUrl) {
      id
      name
      avatar
    }
  }
`;

const REMOVE_AVATAR_MUTATION = gql`
  mutation RemoveAvatar {
    removeAvatar {
      id
      avatar
    }
  }
`;

/**
 * Get current user
 */
export const useCurrentUser = (options?: { enabled?: boolean }) => {
  const { data, loading, error, refetch } = useQuery<{ me: User }>(ME_QUERY, {
    skip: options?.enabled === false,
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    // errorPolicy: "none" (default) - Let ErrorLink handle auth errors
  });

  // Debug logging
  React.useEffect(() => {
    console.log("[useCurrentUser] State changed:", {
      hasData: !!data,
      loading,
      hasError: !!error,
      errorMessage: error?.message,
      enabled: options?.enabled !== false,
    });
  }, [data, loading, error, options?.enabled]);

  const response: ApiResponse<User> | undefined = data?.me
    ? {
        success: true,
        data: data.me as User,
        message: "User loaded successfully",
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Get user by ID
 */
export const useUserById = (userId: number) => {
  const { data, loading, error, refetch } = useQuery<
    { user: User },
    { id: number }
  >(USER_QUERY, {
    variables: { id: userId },
    skip: !userId,
  });

  const response: ApiResponse<User> | undefined = data?.user
    ? {
        success: true,
        data: data.user,
        message: "User loaded successfully",
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Update profile
 */
export const useUpdateProfile = () => {
  const [mutate, { loading, error }] = useMutation<
    { updateProfile: User },
    { input: UpdateProfileInput }
  >(UPDATE_PROFILE_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  const updateProfile = async (data: UpdateProfileInput) => {
    const result = await mutate({ variables: { input: data } });
    return result.data?.updateProfile;
  };

  return { updateProfile, isLoading: loading, error };
};

/**
 * Follow user
 */
export const useFollowUser = () => {
  const [mutate, { loading, error }] = useMutation<
    { followUser: { message: string } },
    { targetUserId: number }
  >(FOLLOW_USER_MUTATION);

  const followUser = async (targetUserId: number) => {
    await mutate({ variables: { targetUserId } });
  };

  return { followUser, isLoading: loading, error };
};

/**
 * Unfollow user
 */
export const useUnfollowUser = () => {
  const [mutate, { loading, error }] = useMutation<
    { unfollowUser: { message: string } },
    { targetUserId: number }
  >(UNFOLLOW_USER_MUTATION);

  const unfollowUser = async (targetUserId: number) => {
    await mutate({ variables: { targetUserId } });
  };

  return { unfollowUser, isLoading: loading, error };
};

/**
 * Get followers
 */
export const useFollowers = (userId: number) => {
  const { data, loading, error, refetch } = useQuery<
    { followers: User[] },
    { userId: number }
  >(FOLLOWERS_QUERY, {
    variables: { userId },
    skip: !userId,
  });

  const response: ApiResponse<User[]> | undefined = data?.followers
    ? {
        success: true,
        data: data.followers,
        message: "Followers loaded successfully",
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Get following
 */
export const useFollowing = (userId: number) => {
  const { data, loading, error, refetch } = useQuery<
    { following: User[] },
    { userId: number }
  >(FOLLOWING_QUERY, {
    variables: { userId },
    skip: !userId,
  });

  const response: ApiResponse<User[]> | undefined = data?.following
    ? {
        success: true,
        data: data.following,
        message: "Following loaded successfully",
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Update avatar
 */
export const useUpdateAvatar = () => {
  const [mutate, { loading, error }] = useMutation<
    { updateAvatar: Pick<User, "id" | "name" | "avatar"> },
    { avatarUrl: string }
  >(UPDATE_AVATAR_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  const updateAvatar = async (avatarUrl: string) => {
    const result = await mutate({ variables: { avatarUrl } });
    return result.data?.updateAvatar;
  };

  return { updateAvatar, isLoading: loading, error };
};

/**
 * Remove avatar
 */
export const useRemoveAvatar = () => {
  const [mutate, { loading, error }] = useMutation<{
    removeAvatar: Pick<User, "id" | "avatar">;
  }>(REMOVE_AVATAR_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  const removeAvatar = async () => {
    const result = await mutate();
    return result.data?.removeAvatar;
  };

  return { removeAvatar, isLoading: loading, error };
};

/**
 * Check if current user follows target user
 */
export const useIsFollowing = (targetUserId: number) => {
  const { data, loading, error, refetch } = useQuery<
    { isFollowing: boolean },
    { targetUserId: number }
  >(IS_FOLLOWING_QUERY, {
    variables: { targetUserId },
    skip: !targetUserId,
  });

  return {
    isFollowing: data?.isFollowing ?? false,
    isLoading: loading,
    error,
    refetch,
  };
};

/**
 * Get posts by user ID (public posts)
 */
export const useUserPosts = (userId: number) => {
  const { data, loading, error, refetch } = useQuery<
    { getPostsByUserId: any[] },
    { userId: number }
  >(USER_POSTS_QUERY, {
    variables: { userId },
    skip: !userId,
  });

  return {
    posts: data?.getPostsByUserId ?? [],
    isLoading: loading,
    error,
    refetch,
  };
};

export {
  FOLLOWERS_QUERY,
  FOLLOWING_QUERY,
  IS_FOLLOWING_QUERY,
  USER_POSTS_QUERY,
  USER_QUERY,
};
