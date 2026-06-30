/**
 * 🪝 Locations Hooks (Apollo)
 */

import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
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
      createdAt
    }
  }
`;

const TRENDING_QUERY = gql`
  query TrendingLocations($limit: Int) {
    trendingLocations(limit: $limit) {
      id
      name
      type
      rating
      userRatingsTotal
      photos
      createdAt
    }
  }
`;

const BY_TYPE_QUERY = gql`
  query LocationsByType($type: String!) {
    locationsByType(type: $type) {
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
      createdAt
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
      createdAt
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

/**
 * Get all locations
 */
export const useLocations = (filters?: LocationFilter) => {
  const { data, loading, error, refetch } = useQuery<
    { locations: Location[] },
    { filter?: LocationFilter }
  >(LOCATIONS_QUERY, {
    variables: { filter: filters },
  });

  const response: ApiResponse<Location[]> | undefined = data?.locations
    ? {
        success: true,
        data: data.locations.map(mapLocation),
        message: "Locations loaded successfully",
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Get trending locations
 */
export const useTrendingLocations = (limit = 10) => {
  const { data, loading, error, refetch } = useQuery<
    { trendingLocations: Location[] },
    { limit?: number }
  >(TRENDING_QUERY, {
    variables: { limit },
  });

  const response: ApiResponse<Location[]> | undefined = data?.trendingLocations
    ? {
        success: true,
        data: data.trendingLocations.map(mapLocation),
        message: "Trending locations loaded successfully",
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Get locations by type
 */
export const useLocationsByType = (type: string) => {
  const { data, loading, error, refetch } = useQuery<
    { locationsByType: Location[] },
    { type: string }
  >(BY_TYPE_QUERY, {
    variables: { type },
    skip: !type,
  });

  const response: ApiResponse<Location[]> | undefined = data?.locationsByType
    ? {
        success: true,
        data: data.locationsByType.map(mapLocation),
        message: `Found ${data.locationsByType.length} locations of type ${type}`,
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Get location by ID
 */
export const useLocationById = (id?: number) => {
  const { data, loading, error, refetch } = useQuery<
    { location: Location },
    { id: number }
  >(LOCATION_QUERY, {
    variables: { id: id as number },
    skip: !id,
  });

  const response: ApiResponse<Location> | undefined = data?.location
    ? {
        success: true,
        data: mapLocation(data.location),
        message: "Location loaded successfully",
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Create location
 */
export const useCreateLocation = () => {
  const [mutate, { loading, error }] = useMutation<
    { createLocation: Location },
    { input: Partial<Location> }
  >(CREATE_LOCATION_MUTATION, {
    refetchQueries: [{ query: LOCATIONS_QUERY }],
  });

  const createLocation = async (locationData: Partial<Location>) => {
    const result = await mutate({ variables: { input: locationData } });
    return result.data?.createLocation;
  };

  return { createLocation, isLoading: loading, error };
};

/**
 * Update location
 */
export const useUpdateLocation = () => {
  const [mutate, { loading, error }] = useMutation<
    { updateLocation: Location },
    { id: number; input: Partial<Location> }
  >(UPDATE_LOCATION_MUTATION, {
    refetchQueries: [{ query: LOCATIONS_QUERY }],
  });

  const updateLocation = async (id: number, data: Partial<Location>) => {
    const result = await mutate({ variables: { id, input: data } });
    return result.data?.updateLocation;
  };

  return { updateLocation, isLoading: loading, error };
};

/**
 * Delete location
 */
export const useDeleteLocation = () => {
  const [mutate, { loading, error }] = useMutation<
    { deleteLocation: { message: string } },
    { id: number }
  >(DELETE_LOCATION_MUTATION, {
    refetchQueries: [{ query: LOCATIONS_QUERY }],
  });

  const deleteLocation = async (id: number) => {
    await mutate({ variables: { id } });
  };

  return { deleteLocation, isLoading: loading, error };
};
