import { useAuth } from "@/src/contexts/AuthContext";
import { useMutation, useQuery } from "@apollo/client/react";
import {
  MY_SCHEDULES_QUERY,
  SCHEDULE_LOCATION_MUTATION,
} from "./schedules.api";
import type { Schedule } from "./schedules.types";

//Get user's schedules

export const useMySchedules = () => {
  const { isAuthenticated } = useAuth();

  const {
    data,
    loading: isLoading,
    error,
    refetch,
  } = useQuery<{ mySchedules: Schedule[] }>(MY_SCHEDULES_QUERY, {
    skip: !isAuthenticated,
    errorPolicy: "all",
    fetchPolicy: "cache-and-network",
  });

  const schedules = data?.mySchedules || [];

  return {
    data: schedules,
    isLoading,
    error,
    refetch,
  };
};

// Schedule a location
export const useScheduleLocation = () => {
  const { isAuthenticated } = useAuth();
  const [mutate, { loading, error }] = useMutation<
    { scheduleLocation: Schedule },
    { scheduledDate: string; locationId: number }
  >(SCHEDULE_LOCATION_MUTATION, {
    refetchQueries: [{ query: MY_SCHEDULES_QUERY }],
    awaitRefetchQueries: true,
    errorPolicy: "all",
  });

  const scheduleLocation = async (
    locationId: number,
    scheduledDate: string
  ) => {
    if (!isAuthenticated) {
      console.error("❌ User not authenticated for scheduleLocation");
      throw new Error("User not authenticated");
    }

    console.log("📅 Scheduling location:", {
      locationId,
      scheduledDate,
      isAuthenticated,
    });

    try {
      const result = await mutate({
        variables: {
          scheduledDate,
          locationId,
        },
      });
      console.log("✅ Location scheduled successfully:", result.data);
      return result.data?.scheduleLocation;
    } catch (error) {
      console.error("❌ Error scheduling location:", error);
      throw error;
    }
  };

  return {
    mutateAsync: scheduleLocation,
    isPending: loading,
    error,
  };
};
