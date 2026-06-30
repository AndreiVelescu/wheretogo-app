/**
 * 🪝 Favorites Hooks (Apollo)
 */

import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Query Keys
 */
export const FAVORITES_KEYS = {
  all: ["favorites"] as const,
  lists: () => [...FAVORITES_KEYS.all, "list"] as const,
};

const MY_FAVORITES_QUERY = gql`
  query MyFavorites {
    myFavorites {
      id
      placeId
      name
      description
      type
      types
      priceRange
      vibes
      address
      lat
      lng
      rating
      userRatingsTotal
      website
      phone
      googleUrl
      openHours
      photos
      menuPdf
      estimatedCost
      createdAt
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

const IS_FAVORITE_QUERY = gql`
  query Query($locationId: Int!) {
    isLocationFavorited(locationId: $locationId)
  }
`;

/**
 * Get user's favorites
 */
export const useFavorites = () => {
  const { isAuthenticated } = useAuth();
  const { data, loading, error, refetch } = useQuery<{
    myFavorites: any[];
  }>(MY_FAVORITES_QUERY, {
    skip: !isAuthenticated,
    errorPolicy: "all",
  });

  return { data: data?.myFavorites, isLoading: loading, error, refetch };
};

/**
 * Add to favorites
 */
export const useAddFavorite = () => {
  const { isAuthenticated } = useAuth();
  const [mutate, { loading, error }] = useMutation<
    { addFavorite: { message: string } },
    { input: { locationId: number } }
  >(ADD_FAVORITE_MUTATION, {
    refetchQueries: [{ query: MY_FAVORITES_QUERY }],
    awaitRefetchQueries: true,
    errorPolicy: "all",
  });

  const addFavorite = async (locationId: number | string) => {
    if (!isAuthenticated) {
      console.error("❌ User not authenticated for addFavorite");
      throw new Error("User not authenticated");
    }

    const numericId =
      typeof locationId === "string" ? parseInt(locationId, 10) : locationId;

    await mutate({ variables: { input: { locationId: numericId } } });
  };

  return { mutateAsync: addFavorite, isPending: loading, error };
};

/**
 * Remove from favorites
 */
export const useRemoveFavorite = () => {
  const { isAuthenticated } = useAuth();
  const [mutate, { loading, error }] = useMutation<
    { removeFavorite: { message: string } },
    { locationId: number }
  >(REMOVE_FAVORITE_MUTATION, {
    refetchQueries: [{ query: MY_FAVORITES_QUERY }],
    awaitRefetchQueries: true,
    errorPolicy: "all",
  });

  const removeFavorite = async ({ locationId }: { locationId: number }) => {
    if (!isAuthenticated) {
      console.error("❌ User not authenticated for removeFavorite");
      throw new Error("User not authenticated");
    }

    await mutate({ variables: { locationId } });
  };

  return { mutateAsync: removeFavorite, isPending: loading, error };
};

export const useIsFavorite = (locationId: number | string) => {
  const { data, loading, error } = useQuery<
    { isLocationFavorited: boolean },
    { locationId: number }
  >(IS_FAVORITE_QUERY, {
    variables: {
      locationId:
        typeof locationId === "string" ? parseInt(locationId, 10) : locationId,
    },
    skip: !locationId,
  });

  const isFavorited = data?.isLocationFavorited || false;
  const isLoading = loading;

  return { isFavorited, isLoading, error };
};
