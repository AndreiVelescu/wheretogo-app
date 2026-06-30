/**
 * 📦 Review Types
 */

export interface Review {
  id: number;
  userId: number;
  locationId: number;
  rating: number;
  comment: string;
  likes: number;
  createdAt: string;

  user?: {
    id: number;
    name: string;
    avatarUrl?: string;
  };
  location?: {
    id: number;
    name: string;
    photos?: string[];
  };
}

export interface CreateReviewInput {
  locationId: number;
  rating: number;
  comment: string;
}

export interface UpdateReviewInput {
  rating?: number;
  comment?: string;
}

export interface ReviewResponse {
  success: boolean;
  message?: string;
  data?: Review;
}

export interface ReviewsListResponse {
  success: boolean;
  data: Review[];
}
