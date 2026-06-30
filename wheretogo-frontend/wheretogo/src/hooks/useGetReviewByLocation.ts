import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { Review } from "../types/review";

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

export const useGetReviewByLocation = (locationId: number) => {
  const { data, loading, error, refetch } = useQuery<
    { reviews: Review[] },
    { locationId: number }
  >(REVIEWS_BY_LOCATION_QUERY, {
    variables: { locationId },
    skip: !locationId,
  });

  return {
    data: data?.reviews,
    isLoading: loading,
    error,
    refetch,
  };
};
