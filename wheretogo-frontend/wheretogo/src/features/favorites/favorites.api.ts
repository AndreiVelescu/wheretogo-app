/**
 * ❤️ Favorites API Layer
 */

import { apolloClient } from "@/src/lib/apolloClient";
import { gql } from "@apollo/client";
import { ApiResponse } from "../auth/auth.types";
import { AddFavoriteInput } from "./favorites.types";

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

export const favoritesApi = {
  /**
   * Get user's favorite locations
   */
  async getMyFavorites(): Promise<ApiResponse<any[]>> {
    try {
      const result = await apolloClient.query<{ myFavorites: any[] }>({
        query: MY_FAVORITES_QUERY,
        fetchPolicy: "network-only",
      });
      return {
        success: true,
        data: result.data?.myFavorites || [],
        message: "Favorites loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message: error?.message || "Failed to load favorites",
        statusCode: 500,
      };
    }
  },

  /**
   * Add location to favorites
   */
  async add(payload: AddFavoriteInput): Promise<ApiResponse<null>> {
    try {
      await apolloClient.mutate({
        mutation: ADD_FAVORITE_MUTATION,
        variables: { input: payload },
      });
      return {
        success: true,
        data: null,
        message: "Added to favorites",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to add to favorites");
    }
  },

  /**
   * Remove location from favorites
   */
  async remove(locationId: number): Promise<ApiResponse<null>> {
    try {
      await apolloClient.mutate({
        mutation: REMOVE_FAVORITE_MUTATION,
        variables: { locationId },
      });
      return {
        success: true,
        data: null,
        message: "Removed from favorites",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to remove from favorites");
    }
  },
};
