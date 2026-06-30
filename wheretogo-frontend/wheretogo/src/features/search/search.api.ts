/**
 * 🔍 Search API Layer
 */

import { gql } from "@apollo/client";
import { apolloClient } from "@/src/lib/apolloClient";
import { ApiResponse } from "../auth/auth.types";
import {
  SearchFilters,
  SearchPerson,
  SearchPlace,
  SearchResults,
} from "./search.types";

const SEARCH_PLACES_QUERY = gql`
  query SearchPlaces($filter: LocationFilterInput) {
    locations(filter: $filter) {
      id
      name
      type
      address
      photos
      rating
      userRatingsTotal
      priceRange
      vibes
    }
  }
`;

const SEARCH_USERS_QUERY = gql`
  query SearchUsers($query: String!, $limit: Int!) {
    searchUsers(query: $query, limit: $limit) {
      id
      name
      nickname
      avatar
      bio
      _count {
        followers
        following
      }
    }
  }
`;

const normalizeQuery = (query?: string, fallback?: string) =>
  (query || fallback || "").trim();

const filterPlacesByQuery = (places: SearchPlace[], query: string) => {
  const lowerQuery = query.toLowerCase();

  return places.filter((place) => {
    return [place.name, place.type, place.address || ""]
      .join(" ")
      .toLowerCase()
      .includes(lowerQuery);
  });
};

export const searchApi = {
  async searchPlaces(
    query?: string,
    filters?: SearchFilters,
  ): Promise<SearchPlace[]> {
    const normalizedQuery = normalizeQuery(query, filters?.category);

    if (!normalizedQuery) {
      return [];
    }

    const result = await apolloClient.query<{
      locations: SearchPlace[];
    }>({
      query: SEARCH_PLACES_QUERY,
      variables: {
        filter: {
          search: normalizedQuery,
          sortBy: filters?.sortBy || "name",
        },
      },
      fetchPolicy: "network-only",
    });

    return filterPlacesByQuery(result.data?.locations || [], normalizedQuery);
  },

  async searchPeople(query?: string, limit = 12): Promise<SearchPerson[]> {
    const normalizedQuery = normalizeQuery(query);

    if (!normalizedQuery) {
      return [];
    }

    const result = await apolloClient.query<{
      searchUsers: SearchPerson[];
    }>({
      query: SEARCH_USERS_QUERY,
      variables: {
        query: normalizedQuery,
        limit,
      },
      fetchPolicy: "network-only",
    });

    return result.data?.searchUsers || [];
  },

  async searchEverything(
    query?: string,
    filters?: SearchFilters,
    limit = 12,
  ): Promise<ApiResponse<SearchResults>> {
    try {
      const normalizedQuery = normalizeQuery(query, filters?.category);

      if (!normalizedQuery) {
        return {
          success: true,
          data: {
            query: "",
            places: [],
            people: [],
            total: 0,
          },
          message: "Empty search query",
          statusCode: 200,
        };
      }

      const [places, people] = await Promise.all([
        this.searchPlaces(normalizedQuery, filters),
        this.searchPeople(normalizedQuery, limit),
      ]);

      return {
        success: true,
        data: {
          query: normalizedQuery,
          places,
          people,
          total: places.length + people.length,
        },
        message: "Search completed",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        data: {
          query: normalizeQuery(query, filters?.category),
          places: [],
          people: [],
          total: 0,
        },
        message: error?.message || "Search failed",
        statusCode: 500,
      };
    }
  },

  async getSearchSuggestions(query: string): Promise<string[]> {
    const normalizedQuery = normalizeQuery(query);

    if (normalizedQuery.length < 2) {
      return [];
    }

    const response = await this.searchEverything(normalizedQuery, undefined, 5);
    const suggestions = new Set<string>();

    response.data?.people.forEach((person) => {
      suggestions.add(person.name);
      if (person.nickname) {
        suggestions.add(`@${person.nickname}`);
      }
    });

    response.data?.places.forEach((place) => {
      suggestions.add(place.name);
    });

    return Array.from(suggestions).slice(0, 8);
  },

  async getPopularSearches(): Promise<string[]> {
    return [];
  },

  async getAvailableFilters(): Promise<{ scopes: string[] }> {
    return { scopes: ["all", "places", "people"] };
  },
};
