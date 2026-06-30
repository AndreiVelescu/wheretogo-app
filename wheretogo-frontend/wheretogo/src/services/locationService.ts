import apiClient from "./apiClient";
import { API_CONFIG } from "../config/api";
import { ApiResponse } from "../types/auth";
import { Location } from "../types/location";

export interface LocationFilter {
  type?: string;
  priceRange?: string;
  search?: string;
  sortBy?: "rating" | "newest" | "trending" | "name";
}

export const locationService = {
  async getAll(filters?: LocationFilter): Promise<ApiResponse<Location[]>> {
    try {
      const { data, status } = await apiClient.get(
        API_CONFIG.ENDPOINTS.LOCATIONS.BASE,
        { params: filters }
      );

      return {
        success: true,
        data: data, // Backend returnează direct array-ul, nu wrapped
        message: "Locations loaded successfully",
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message: error?.response?.data?.message || "Failed to load locations",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  async getTrending(limit = 10): Promise<ApiResponse<Location[]>> {
    try {
      const { data, status } = await apiClient.get(
        `${API_CONFIG.ENDPOINTS.LOCATIONS.BASE}/trending`,
        { params: { limit } }
      );

      return {
        success: true,
        data: data, // Backend returnează direct array-ul
        message: "Trending locations loaded successfully",
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message:
          error?.response?.data?.message || "Failed to load trending locations",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  async getByType(type: string): Promise<ApiResponse<Location[]>> {
    try {
      // Folosim endpoint-ul dedicat din controller
      const { data, status } = await apiClient.get(
        `${API_CONFIG.ENDPOINTS.LOCATIONS.BASE}/by-type/${type}`
      );

      return {
        success: true,
        data: data,
        message: `Found ${data.length} locations of type ${type}`,
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message:
          error?.response?.data?.message || "Failed to load locations by type",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  // Metodă nouă pentru tipurile disponibile
  async getLocationTypes(): Promise<
    ApiResponse<Array<{ type: string; count: number }>>
  > {
    try {
      const { data, status } = await apiClient.get(
        `${API_CONFIG.ENDPOINTS.LOCATIONS.BASE}/types`
      );

      return {
        success: true,
        data: data,
        message: "Location types loaded successfully",
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message:
          error?.response?.data?.message || "Failed to load location types",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  // Metodă nouă pentru locații populare
  async getPopular(limit = 10): Promise<ApiResponse<Location[]>> {
    try {
      const { data, status } = await apiClient.get(
        `${API_CONFIG.ENDPOINTS.LOCATIONS.BASE}/popular`,
        { params: { limit } }
      );

      return {
        success: true,
        data: data,
        message: "Popular locations loaded successfully",
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message:
          error?.response?.data?.message || "Failed to load popular locations",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  // Metodă nouă pentru locații din apropiere
  async getNearby(
    lat: number,
    lng: number,
    radius = 5,
    limit = 20
  ): Promise<ApiResponse<Location[]>> {
    try {
      const { data, status } = await apiClient.get(
        `${API_CONFIG.ENDPOINTS.LOCATIONS.BASE}/nearby`,
        {
          params: {
            lat: lat.toString(),
            lng: lng.toString(),
            radius: radius.toString(),
            limit: limit.toString(),
          },
        }
      );

      return {
        success: true,
        data: data,
        message: "Nearby locations loaded successfully",
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message:
          error?.response?.data?.message || "Failed to load nearby locations",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  async getById(id: number): Promise<ApiResponse<Location>> {
    try {
      const { data, status } = await apiClient.get(
        `${API_CONFIG.ENDPOINTS.LOCATIONS.BASE}/${id}`
      );
      return {
        success: true,
        data,
        message: "Location details loaded successfully",
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: null as any,
        message:
          error?.response?.data?.message || "Failed to load location details",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  async create(
    locationData: Partial<Location>
  ): Promise<ApiResponse<Location>> {
    try {
      const { data, status } = await apiClient.post(
        API_CONFIG.ENDPOINTS.LOCATIONS.BASE,
        locationData
      );
      return {
        success: true,
        data,
        message: "Location created successfully",
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: null as any,
        message: error?.response?.data?.message || "Failed to create location",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  async update(
    id: number,
    locationData: Partial<Location>
  ): Promise<ApiResponse<Location>> {
    try {
      const { data, status } = await apiClient.patch(
        `${API_CONFIG.ENDPOINTS.LOCATIONS.BASE}/${id}`,
        locationData
      );
      return {
        success: true,
        data,
        message: "Location updated successfully",
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: null as any,
        message: error?.response?.data?.message || "Failed to update location",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  async delete(id: number): Promise<ApiResponse<null>> {
    try {
      const { status } = await apiClient.delete(
        `${API_CONFIG.ENDPOINTS.LOCATIONS.BASE}/${id}`
      );
      return {
        success: true,
        data: null,
        message: "Location deleted successfully",
        statusCode: status,
      };
    } catch (error: any) {
      return {
        success: false,
        data: null,
        message: error?.response?.data?.message || "Failed to delete location",
        statusCode: error?.response?.status || 500,
      };
    }
  },
};
