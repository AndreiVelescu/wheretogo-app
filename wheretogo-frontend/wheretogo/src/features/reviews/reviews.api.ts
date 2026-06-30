/**
 * ⭐ Reviews API Layer
 */

import { apolloClient } from "@/src/lib/apolloClient";
import { gql } from "@apollo/client";
import {
  CreateReviewInput,
  Review,
  ReviewResponse,
  ReviewsListResponse,
  UpdateReviewInput,
} from "./reviews.types";

const mapReview = (review: any): Review => ({
  id: review.id,
  userId: review.userId || review.user?.id || 0,
  locationId: review.locationId || 0,
  rating: review.rating,
  comment: review.comment,
  likes: review.likes || review.likesCount || 0,
  createdAt: review.createdAt,
  user: review.user
    ? {
        id: review.user.id,
        name: review.user.name,
        avatarUrl: review.user.avatar || undefined,
      }
    : undefined,
  location: review.location
    ? {
        id: review.location.id,
        name: review.location.name,
        photos: review.location.photos || [],
      }
    : undefined,
});

const REVIEW_QUERY = gql`
  query Review($id: Int!) {
    review(id: $id) {
      id
      rating
      comment
      createdAt
      user {
        id
        name
        avatar
      }
    }
  }
`;

const REVIEWS_BY_LOCATION_QUERY = gql`
  query ReviewsByLocation($locationId: Int!) {
    reviews(where: { locationId: { equals: $locationId } }) {
      id
      rating
      comment
      createdAt
      user {
        id
        name
        avatar
      }
    }
  }
`;

const USER_REVIEWS_QUERY = gql`
  query MyReviews {
    myReviews {
      id
      rating
      comment
      createdAt
    }
  }
`;

const CREATE_REVIEW_MUTATION = gql`
  mutation CreateReview($input: CreateReviewInput!) {
    createReview(input: $input) {
      id
      rating
      comment
      createdAt
    }
  }
`;

const UPDATE_REVIEW_MUTATION = gql`
  mutation UpdateReview($id: Int!, $input: UpdateReviewInput!) {
    updateReview(id: $id, input: $input) {
      id
      rating
      comment
      createdAt
    }
  }
`;

const DELETE_REVIEW_MUTATION = gql`
  mutation DeleteReview($id: Int!) {
    deleteReview(id: $id) {
      message
    }
  }
`;

const LIKE_REVIEW_MUTATION = gql`
  mutation LikeReview($id: Int!) {
    likeReview(id: $id) {
      id
      rating
      comment
      createdAt
    }
  }
`;

const UNLIKE_REVIEW_MUTATION = gql`
  mutation UnlikeReview($id: Int!) {
    unlikeReview(id: $id) {
      id
      rating
      comment
      createdAt
    }
  }
`;

export const reviewsApi = {
  /**
   * Get review by ID
   */
  async getById(id: number): Promise<ReviewResponse> {
    try {
      const result = await apolloClient.query<{ review: Review }>({
        query: REVIEW_QUERY,
        variables: { id },
        fetchPolicy: "network-only",
      });
      if (!result.data?.review) {
        throw new Error("Review not found");
      }
      return {
        success: true,
        data: mapReview(result.data.review),
      };
    } catch (error) {
      console.error("Error fetching review by id:", error);
      throw error;
    }
  },

  /**
   * Get all reviews for a location
   */
  async getByLocation(locationId: number): Promise<Review[]> {
    try {
      const result = await apolloClient.query<{ reviews: Review[] }>({
        query: REVIEWS_BY_LOCATION_QUERY,
        variables: { locationId },
        fetchPolicy: "network-only",
      });
      return (result.data?.reviews || []).map(mapReview);
    } catch (error) {
      console.error("Error fetching reviews by location:", error);
      return [];
    }
  },

  /**
   * Get user's reviews
   */
  async getUserReviews(userId: number): Promise<ReviewsListResponse> {
    try {
      const result = await apolloClient.query<{ myReviews: Review[] }>({
        query: USER_REVIEWS_QUERY,
        fetchPolicy: "network-only",
      });
      return {
        success: true,
        data: (result.data?.myReviews || []).map(mapReview),
      };
    } catch (error) {
      console.error("Error fetching user reviews:", error);
      throw error;
    }
  },

  /**
   * Create new review
   */
  async create(payload: CreateReviewInput): Promise<ReviewResponse> {
    try {
      const result = await apolloClient.mutate<{ createReview: Review }>({
        mutation: CREATE_REVIEW_MUTATION,
        variables: { input: payload },
      });
      return {
        success: true,
        data: result.data?.createReview
          ? mapReview(result.data.createReview)
          : undefined,
      };
    } catch (error) {
      console.error("Error creating review:", error);
      throw error;
    }
  },

  /**
   * Update existing review
   */
  async update(
    id: number,
    payload: UpdateReviewInput
  ): Promise<ReviewResponse> {
    try {
      const result = await apolloClient.mutate<{ updateReview: Review }>({
        mutation: UPDATE_REVIEW_MUTATION,
        variables: { id, input: payload },
      });
      return {
        success: true,
        data: result.data?.updateReview
          ? mapReview(result.data.updateReview)
          : undefined,
      };
    } catch (error) {
      console.error("Error updating review:", error);
      throw error;
    }
  },

  /**
   * Delete review
   */
  async delete(id: number): Promise<{ success: boolean; message?: string }> {
    try {
      await apolloClient.mutate({
        mutation: DELETE_REVIEW_MUTATION,
        variables: { id },
      });
      return { success: true, message: "Review deleted" };
    } catch (error) {
      console.error("Error deleting review:", error);
      throw error;
    }
  },

  /**
   * Like a review
   */
  async like(id: number): Promise<ReviewResponse> {
    try {
      const result = await apolloClient.mutate<{ likeReview: Review }>({
        mutation: LIKE_REVIEW_MUTATION,
        variables: { id },
      });
      return {
        success: true,
        data: result.data?.likeReview
          ? mapReview(result.data.likeReview)
          : undefined,
      };
    } catch (error) {
      console.error("Error liking review:", error);
      throw error;
    }
  },

  /**
   * Unlike a review
   */
  async unlike(id: number): Promise<ReviewResponse> {
    try {
      const result = await apolloClient.mutate<{ unlikeReview: Review }>({
        mutation: UNLIKE_REVIEW_MUTATION,
        variables: { id },
      });
      return {
        success: true,
        data: result.data?.unlikeReview
          ? mapReview(result.data.unlikeReview)
          : undefined,
      };
    } catch (error) {
      console.error("Error unliking review:", error);
      throw error;
    }
  },
};
