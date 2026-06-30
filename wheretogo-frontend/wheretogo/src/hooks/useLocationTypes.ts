import { useCallback, useEffect, useState } from "react";
import { locationsApi } from "../features/locations/locations.api";
import { ApiResponse } from "../types/auth";
import { Location } from "../types/location";

export const useLocationTypes = () => {
  const [data, setData] = useState<ApiResponse<Location[]> | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await locationsApi.getTrending();
      setData(response as ApiResponse<Location[]>);
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

export const usePopularLocations = (limit = 10) => {
  const [data, setData] = useState<ApiResponse<Location[]> | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await locationsApi.getTrending(limit || 10);
      setData(response as ApiResponse<Location[]>);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};

export const useNearbyLocations = (params: {
  lat: number;
  lng: number;
  radius?: number;
  limit?: number;
}) => {
  const [data, setData] = useState<ApiResponse<Location[]> | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await locationsApi.getAll({
        lat: params.lat,
        lng: params.lng,
        radius: params.radius,
        limit: params.limit,
      } as any);
      setData(response as ApiResponse<Location[]>);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [params.lat, params.lng, params.radius, params.limit]);

  useEffect(() => {
    if (params.lat && params.lng) {
      fetchData();
    }
  }, [fetchData, params.lat, params.lng]);

  return { data, isLoading, error, refetch: fetchData };
};
