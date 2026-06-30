import { gql } from "@apollo/client";

// ============= QUERIES =============
export const MY_NOTIFICATIONS_QUERY = gql`
  query MyNotifications($unreadOnly: Boolean, $limit: Int, $offset: Int) {
    myNotifications(unreadOnly: $unreadOnly, limit: $limit, offset: $offset) {
      id
      userId
      type
      title
      body
      isRead
      createdAt
      location {
        id
        name
      }
      trip {
        id
        title
      }
      event {
        id
        name
      }
    }
  }
`;

export const UNREAD_COUNT_QUERY = gql`
  query UnreadNotificationsCount {
    unreadNotificationsCount
  }
`;

// ============= MUTATIONS =============
export const REGISTER_DEVICE_TOKEN = gql`
  mutation RegisterDeviceToken($token: String!, $platform: String!) {
    registerDeviceToken(token: $token, platform: $platform)
  }
`;

export const UNREGISTER_DEVICE_TOKEN = gql`
  mutation UnregisterDeviceToken($token: String!) {
    unregisterDeviceToken(token: $token)
  }
`;

export const MARK_NOTIFICATION_READ = gql`
  mutation MarkNotificationAsRead($notificationId: Int!) {
    markNotificationAsRead(notificationId: $notificationId)
  }
`;

export const MARK_ALL_NOTIFICATIONS_READ = gql`
  mutation MarkAllNotificationsAsRead {
    markAllNotificationsAsRead
  }
`;

export const DELETE_NOTIFICATION = gql`
  mutation DeleteNotification($notificationId: Int!) {
    deleteNotification(notificationId: $notificationId)
  }
`;

// ============= TYPES =============
export type NotificationType =
  | "TRIP_COLLABORATOR_ADDED"
  | "TRIP_COLLABORATOR_REMOVED"
  | "TRIP_REMINDER"
  | "TRIP_UPDATED"
  | "NEW_FOLLOWER"
  | "NEW_REVIEW"
  | "BOOKING_CONFIRMED"
  | "BOOKING_CANCELLED"
  | "PROMO"
  | "SYSTEM";

export interface Notification {
  id: number;
  userId: number;
  type: string;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string;
  location?: {
    id: number;
    name: string;
  };
  trip?: {
    id: number;
    title: string;
  };
  event?: {
    id: number;
    name: string;
  };
}

export interface NotificationsQueryResult {
  myNotifications: Notification[];
}

export interface UnreadCountResult {
  unreadNotificationsCount: number;
}
