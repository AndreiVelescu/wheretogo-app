import { useApolloClient, useMutation, useQuery } from "@apollo/client/react";
import { useCallback } from "react";
import {
  DELETE_NOTIFICATION,
  MARK_ALL_NOTIFICATIONS_READ,
  MARK_NOTIFICATION_READ,
  MY_NOTIFICATIONS_QUERY,
  Notification,
  NotificationsQueryResult,
  UNREAD_COUNT_QUERY,
  UnreadCountResult,
} from "./notifications.api";

interface UseNotificationsOptions {
  unreadOnly?: boolean;
  limit?: number;
  enabled?: boolean;
}

export function useNotifications(options: UseNotificationsOptions = {}) {
  const { unreadOnly = false, limit = 50, enabled = true } = options;
  const client = useApolloClient();

  const { data, loading, error, refetch, fetchMore } =
    useQuery<NotificationsQueryResult>(MY_NOTIFICATIONS_QUERY, {
      variables: { unreadOnly, limit, offset: 0 },
      skip: !enabled,
      fetchPolicy: "cache-and-network",
    });

  const loadMore = useCallback(async () => {
    const currentLength = data?.myNotifications?.length || 0;
    await fetchMore({
      variables: { offset: currentLength },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          myNotifications: [
            ...prev.myNotifications,
            ...fetchMoreResult.myNotifications,
          ],
        };
      },
    });
  }, [data, fetchMore]);

  return {
    notifications: data?.myNotifications || [],
    loading,
    error,
    refetch,
    loadMore,
  };
}

export function useUnreadNotificationsCount(enabled = true) {
  const { data, loading, refetch } = useQuery<UnreadCountResult>(
    UNREAD_COUNT_QUERY,
    {
      skip: !enabled,
      fetchPolicy: "cache-and-network",
      pollInterval: 30000, // Poll every 30 seconds
    }
  );

  return {
    count: data?.unreadNotificationsCount || 0,
    loading,
    refetch,
  };
}

export function useMarkNotificationRead() {
  const [mutate, { loading }] = useMutation(MARK_NOTIFICATION_READ);
  const client = useApolloClient();

  const markAsRead = useCallback(
    async (notificationId: number) => {
      try {
        await mutate({
          variables: { notificationId },
          update: (cache) => {
            // Update the notification in cache
            cache.modify({
              id: cache.identify({
                __typename: "Notification",
                id: notificationId,
              }),
              fields: {
                read: () => true,
              },
            });
          },
          refetchQueries: [{ query: UNREAD_COUNT_QUERY }],
        });
        return true;
      } catch (error) {
        console.error("[Notifications] Failed to mark as read:", error);
        return false;
      }
    },
    [mutate]
  );

  return { markAsRead, loading };
}

export function useMarkAllNotificationsRead() {
  const [mutate, { loading }] = useMutation(MARK_ALL_NOTIFICATIONS_READ);

  const markAllAsRead = useCallback(async () => {
    try {
      await mutate({
        refetchQueries: [
          { query: MY_NOTIFICATIONS_QUERY },
          { query: UNREAD_COUNT_QUERY },
        ],
      });
      return true;
    } catch (error) {
      console.error("[Notifications] Failed to mark all as read:", error);
      return false;
    }
  }, [mutate]);

  return { markAllAsRead, loading };
}

export function useDeleteNotification() {
  const [mutate, { loading }] = useMutation(DELETE_NOTIFICATION);

  const deleteNotification = useCallback(
    async (notificationId: number) => {
      try {
        await mutate({
          variables: { notificationId },
          update: (cache) => {
            cache.evict({
              id: cache.identify({
                __typename: "Notification",
                id: notificationId,
              }),
            });
            cache.gc();
          },
          refetchQueries: [{ query: UNREAD_COUNT_QUERY }],
        });
        return true;
      } catch (error) {
        console.error("[Notifications] Failed to delete:", error);
        return false;
      }
    },
    [mutate]
  );

  return { deleteNotification, loading };
}

// Helper to get notification icon based on type
export function getNotificationIcon(type: Notification["type"]) {
  switch (type) {
    case "TRIP_COLLABORATOR_ADDED":
      return { name: "people", color: "#3B82F6" };
    case "TRIP_COLLABORATOR_REMOVED":
      return { name: "person-remove", color: "#EF4444" };
    case "TRIP_REMINDER":
      return { name: "alarm", color: "#F59E0B" };
    case "TRIP_UPDATED":
      return { name: "create", color: "#8B5CF6" };
    case "NEW_FOLLOWER":
      return { name: "person-add", color: "#10B981" };
    case "NEW_REVIEW":
      return { name: "star", color: "#F59E0B" };
    case "BOOKING_CONFIRMED":
      return { name: "checkmark-circle", color: "#10B981" };
    case "BOOKING_CANCELLED":
      return { name: "close-circle", color: "#EF4444" };
    case "PROMO":
      return { name: "gift", color: "#EC4899" };
    case "SYSTEM":
    default:
      return { name: "notifications", color: "#6B7280" };
  }
}

// Helper to format notification time
export function formatNotificationTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Acum";
  if (diffMins < 60) return `${diffMins} min`;
  if (diffHours < 24) return `${diffHours}h`;
  if (diffDays < 7) return `${diffDays}z`;

  return date.toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "short",
  });
}
