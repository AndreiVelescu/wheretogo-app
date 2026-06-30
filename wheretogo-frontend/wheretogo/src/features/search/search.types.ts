/**
 * 🔍 Search Types
 */

export type SearchScope = "all" | "places" | "people";

export interface SearchFilters {
  category?: string;
  sortBy?: "rating" | "name" | "newest" | "trending";
}

export interface SearchPlace {
  id: number;
  name: string;
  type: string;
  address?: string | null;
  photos: string[];
  rating?: number | null;
  userRatingsTotal?: number | null;
  priceRange?: string | null;
  vibes: string[];
}

export interface SearchPerson {
  id: number;
  name: string;
  nickname?: string | null;
  avatar?: string | null;
  bio?: string | null;
  _count?: {
    followers: number;
    following: number;
  };
}

export interface SearchResults {
  query: string;
  places: SearchPlace[];
  people: SearchPerson[];
  total: number;
}
