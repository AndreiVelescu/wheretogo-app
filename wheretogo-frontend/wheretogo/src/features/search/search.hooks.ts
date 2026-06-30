/**
 * 🪝 Search Hooks (custom, fără React Query)
 */

import { useCallback, useEffect, useState } from "react";
import { searchApi } from "./search.api";
import {
  SearchFilters,
  SearchPerson,
  SearchPlace,
  SearchResults,
} from "./search.types";

/**
 * Query Keys
 */
export const SEARCH_KEYS = {
  all: ["search"] as const,
  searches: () => [...SEARCH_KEYS.all, "searches"] as const,
  search: (query: string, filters: SearchFilters) =>
    [...SEARCH_KEYS.searches(), query, filters] as const,
  suggestions: () => [...SEARCH_KEYS.all, "suggestions"] as const,
  suggestion: (query: string) => [...SEARCH_KEYS.suggestions(), query] as const,
  popular: () => [...SEARCH_KEYS.all, "popular"] as const,
};

/**
 * Unified search
 */
export const useSearch = (
  query?: string,
  filters?: SearchFilters,
  limit: number = 12,
  enabled: boolean = true,
) => {
  const [data, setData] = useState<SearchResults | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled || (!query && !filters?.category)) {
      setData(undefined);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await searchApi.searchEverything(query, filters, limit);
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [query, filters, limit, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};

/**
 * Search locations only
 */
export const useSearchLocations = (
  query?: string,
  filters?: SearchFilters,
  _page: number = 1,
  limit: number = 10,
  enabled: boolean = true,
) => {
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled || (!query && !filters?.category)) {
      setData(undefined);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const places = await searchApi.searchPlaces(query, filters);
      setData({
        success: true,
        data: {
          data: places,
          pagination: {
            currentPage: 1,
            totalPages: 1,
            totalItems: places.length,
            itemsPerPage: limit,
          },
        },
        message: "Places loaded successfully",
        statusCode: 200,
      });
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [query, filters, limit, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};

/**
 * Search people only
 */
export const useSearchPeople = (
  query?: string,
  limit: number = 12,
  enabled: boolean = true,
) => {
  const [data, setData] = useState<SearchPerson[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled || !query?.trim()) {
      setData(undefined);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const people = await searchApi.searchPeople(query, limit);
      setData(people);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [query, limit, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};

/**
 * Get search suggestions
 */
export const useSearchSuggestions = (
  query: string,
  enabled: boolean = true,
) => {
  const [data, setData] = useState<string[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled || query.length <= 1) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await searchApi.getSearchSuggestions(query);
      setData(response);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [query, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};

/**
 * Get popular searches
 */
export const usePopularSearches = () => {
  const [data, setData] = useState<string[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await searchApi.getPopularSearches();
      setData(response);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};

/**
 * Get available filters
 */
export const useAvailableFilters = () => {
  const [data, setData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await searchApi.getAvailableFilters();
      setData(response);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};
