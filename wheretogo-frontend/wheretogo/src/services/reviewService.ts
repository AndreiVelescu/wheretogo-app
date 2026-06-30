import {
  CreateReviewInput,
  Review,
  ReviewResponse,
  ReviewsListResponse,
  UpdateReviewInput,
} from "../types/review";
import apiClient from "./apiClient";

export const reviewService = {
  async getReviewById(id: number): Promise<ReviewResponse> {
    const { data } = await apiClient.get<ReviewResponse>(
      `/api/v1/reviews/${id}`
    );
    return data;
  },

  async getReviewsByLocation(locationId: number): Promise<Review[]> {
    const { data } = await apiClient.get<ReviewsListResponse>(
      `/api/v1/reviews/location/${locationId}`
    );
    return data.data;
  },

  async getUserReviews(userId: number): Promise<ReviewsListResponse> {
    const { data } = await apiClient.get<ReviewsListResponse>(
      `/api/v1/reviews/user/${userId}`
    );
    return data;
  },

  async createReview(payload: CreateReviewInput): Promise<ReviewResponse> {
    const { data } = await apiClient.post<ReviewResponse>(
      `/api/v1/reviews`,
      payload
    );
    return data;
  },

  async updateReview(
    id: number,
    payload: UpdateReviewInput
  ): Promise<ReviewResponse> {
    const { data } = await apiClient.patch<ReviewResponse>(
      `/api/v1/reviews/${id}`,
      payload
    );
    return data;
  },

  async deleteReview(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    const { data } = await apiClient.delete(`/api/v1/reviews/${id}`);
    return data;
  },

  async likeReview(id: number): Promise<ReviewResponse> {
    const { data } = await apiClient.post<ReviewResponse>(
      `/api/v1/reviews/${id}/like`
    );
    return data;
  },

  async unlikeReview(id: number): Promise<ReviewResponse> {
    const { data } = await apiClient.delete<ReviewResponse>(
      `/api/v1/reviews/${id}/like`
    );
    return data;
  },
};
