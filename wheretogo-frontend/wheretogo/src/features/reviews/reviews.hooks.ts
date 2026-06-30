/**
 * 🪝 Reviews Hooks (Apollo)
 */

import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
import { CreateReviewInput, Review, UpdateReviewInput } from "./reviews.types";

const REVIEWS_BY_LOCATION_QUERY = gql`
  query ReviewsByLocation($locationId: Int!) {
    reviews(where: { locationId: { equals: $locationId } }) {
      id
      userId
      locationId
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

const REVIEW_QUERY = gql`
  query Review($id: Int!) {
    review(id: $id) {
      id
      userId
      locationId
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
      userId
      locationId
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
      userId
      locationId
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
      userId
      locationId
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
      userId
      locationId
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
      userId
      locationId
      rating
      comment
      createdAt
    }
  }
`;

export const useReviewsByLocation = (locationId: number) => {
  return useQuery<{ reviews: Review[] }, { locationId: number }>(
    REVIEWS_BY_LOCATION_QUERY,
    {
      variables: { locationId },
      skip: !locationId,
    }
  );
};

export const useReviewById = (id: number) => {
  return useQuery<{ review: Review }, { id: number }>(REVIEW_QUERY, {
    variables: { id },
    skip: !id,
  });
};

export const useUserReviews = () => {
  return useQuery<{ myReviews: Review[] }>(USER_REVIEWS_QUERY);
};

export const useCreateReview = () => {
  return useMutation<{ createReview: Review }, { input: CreateReviewInput }>(
    CREATE_REVIEW_MUTATION,
    {
      refetchQueries: [USER_REVIEWS_QUERY],
    }
  );
};

export const useUpdateReview = () => {
  return useMutation<
    { updateReview: Review },
    { id: number; input: UpdateReviewInput }
  >(UPDATE_REVIEW_MUTATION);
};

export const useDeleteReview = () => {
  return useMutation<{ deleteReview: { message: string } }, { id: number }>(
    DELETE_REVIEW_MUTATION
  );
};

export const useLikeReview = () => {
  return useMutation<{ likeReview: Review }, { id: number }>(
    LIKE_REVIEW_MUTATION
  );
};

export const useUnlikeReview = () => {
  return useMutation<{ unlikeReview: Review }, { id: number }>(
    UNLIKE_REVIEW_MUTATION
  );
};
