/**
 * 📍 Locations API Layer
 */

import { apolloClient } from "@/src/lib/apolloClient";
import { gql } from "@apollo/client";
import { ApiResponse } from "../auth/auth.types";
import { Location, LocationFilter } from "./locations.types";

const LOCATIONS_QUERY = gql`
  query Locations($filter: LocationFilterInput) {
    locations(filter: $filter) {
      id
      name
      description
      type
      address
      priceRange
      vibes
      photos
      openHours
      rating
      userRatingsTotal
      website
      phone
      lat
      lng
    }
  }
`;

const TRENDING_LOCATIONS_QUERY = gql`
  query TrendingLocations($limit: Int) {
    trendingLocations(limit: $limit) {
      id
      name
      type
      rating
      photos
    }
  }
`;

const LOCATIONS_BY_TYPE_QUERY = gql`
  query LocationsByType($type: String!) {
    locationsByType(type: $type) {
      id
      name
      description
      photos
      rating
    }
  }
`;

const LOCATION_QUERY = gql`
  query Location($id: Int!) {
    location(id: $id) {
      id
      name
      description
      type
      address
      priceRange
      vibes
      photos
      openHours
      rating
      userRatingsTotal
      website
      phone
      lat
      lng
      menuPdf
    }
  }
`;

const CREATE_LOCATION_MUTATION = gql`
  mutation CreateLocation($input: CreateLocationInput!) {
    createLocation(input: $input) {
      id
      name
    }
  }
`;

const UPDATE_LOCATION_MUTATION = gql`
  mutation UpdateLocation($id: Int!, $input: UpdateLocationInput!) {
    updateLocation(id: $id, input: $input) {
      id
      name
    }
  }
`;

const DELETE_LOCATION_MUTATION = gql`
  mutation DeleteLocation($id: Int!) {
    deleteLocation(id: $id) {
      message
    }
  }
`;

const mapLocation = (location: any): Location => ({
  id: location.id,
  name: location.name,
  description: location.description || "",
  type: location.type,
  priceRange: location.priceRange || "",
  vibes: location.vibes || [],
  address: location.address || "",
  openHours: location.openHours || "",
  photos: location.photos || [],
  lat: location.lat,
  lng: location.lng,
  rating: location.rating || 0,
  userRatingsTotal: location.userRatingsTotal || 0,
  menuPdf: location.menuPdf,
  createdAt: location.createdAt || new Date().toISOString(),
  averageRating: location.rating || 0,
  reviewCount: location.userRatingsTotal || 0,
  isHype: location.isHype || false,
  isFavorite: location.isFavorite || false,
});

export const locationsApi = {
  /**
   * Get all locations with optional filters
   */
  async getAll(filters?: LocationFilter): Promise<ApiResponse<Location[]>> {
    try {
      const result = await apolloClient.query<{ locations: Location[] }>({
        query: LOCATIONS_QUERY,
        variables: { filter: filters },
        fetchPolicy: "network-only",
      });
      const locations = result.data?.locations || [];
      return {
        success: true,
        data: locations.map(mapLocation),
        message: "Locations loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message: error?.message || "Failed to load locations",
        statusCode: 500,
      };
    }
  },

  /**
   * Get trending locations
   */
  async getTrending(limit = 10): Promise<ApiResponse<Location[]>> {
    try {
      const result = await apolloClient.query<{
        trendingLocations: Location[];
      }>({
        query: TRENDING_LOCATIONS_QUERY,
        variables: { limit },
        fetchPolicy: "network-only",
      });
      const trending = result.data?.trendingLocations || [];
      return {
        success: true,
        data: trending.map(mapLocation),
        message: "Trending locations loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message: error?.message || "Failed to load trending locations",
        statusCode: 500,
      };
    }
  },

  /**
   * Get locations by type
   */
  async getByType(type: string): Promise<ApiResponse<Location[]>> {
    try {
      const result = await apolloClient.query<{ locationsByType: Location[] }>({
        query: LOCATIONS_BY_TYPE_QUERY,
        variables: { type },
        fetchPolicy: "network-only",
      });
      const byType = result.data?.locationsByType || [];
      return {
        success: true,
        data: byType.map(mapLocation),
        message: `Found ${byType.length} locations of type ${type}`,
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message: error?.message || "Failed to load locations by type",
        statusCode: 500,
      };
    }
  },

  /**
   * Get location by ID
   */
  async getById(id: number): Promise<ApiResponse<Location>> {
    try {
      const result = await apolloClient.query<{ location: Location }>({
        query: LOCATION_QUERY,
        variables: { id },
        fetchPolicy: "network-only",
      });
      if (!result.data?.location) {
        throw new Error("Location not found");
      }
      return {
        success: true,
        data: mapLocation(result.data.location),
        message: "Location loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to load location");
    }
  },

  /**
   * Create new location
   */
  async create(
    locationData: Partial<Location>,
  ): Promise<ApiResponse<Location>> {
    try {
      const result = await apolloClient.mutate<{ createLocation: Location }>({
        mutation: CREATE_LOCATION_MUTATION,
        variables: { input: locationData },
      });
      return {
        success: true,
        data: result.data?.createLocation
          ? mapLocation(result.data.createLocation)
          : (null as any),
        message: "Location created successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to create location");
    }
  },

  /**
   * Update location
   */
  async update(
    id: number,
    locationData: Partial<Location>,
  ): Promise<ApiResponse<Location>> {
    try {
      const result = await apolloClient.mutate<{ updateLocation: Location }>({
        mutation: UPDATE_LOCATION_MUTATION,
        variables: { id, input: locationData },
      });
      return {
        success: true,
        data: result.data?.updateLocation
          ? mapLocation(result.data.updateLocation)
          : (null as any),
        message: "Location updated successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to update location");
    }
  },

  /**
   * Delete location
   */
  async delete(id: number): Promise<ApiResponse<void>> {
    try {
      await apolloClient.mutate({
        mutation: DELETE_LOCATION_MUTATION,
        variables: { id },
      });
      return {
        success: true,
        message: "Location deleted successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to delete location");
    }
  },
};
