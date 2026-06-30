/**
 * 📍 Locations Types
 */

export interface Location {
  id: number;
  name: string;
  description: string;
  type: string;
  priceRange: string;
  vibes: string[];
  address: string;
  openHours: string;
  photos: string[];
  lat?: number | string;
  lng?: number | string;
  rating?: number;
  userRatingsTotal?: number;
  menuPdf?: string;
  createdAt: string;

  // Computed fields
  averageRating: number;
  reviewCount: number;
  isHype: boolean;
  isFavorite: boolean;
}

export interface LocationFilter {
  type?: string;
  priceRange?: string;
  search?: string;
  sortBy?: "rating" | "newest" | "trending" | "name";
  vibes?: string[];
  lat?: number;
  lng?: number;
  radius?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}
