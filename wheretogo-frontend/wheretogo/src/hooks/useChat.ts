import {
  MESSAGE_CREATED_SUBSCRIPTION,
  MY_CHATS,
  UNREAD_COUNT,
} from "@/src/graphql/chat";
import {
  useApolloClient,
  useQuery,
  useSubscription,
} from "@apollo/client/react";
import { useEffect } from "react";
import { AppState } from "react-native";

export interface ChatRoom {
  id: number;
  type: "TRIP" | "DIRECT" | "GROUP";
  name?: string;
  lastMessageAt?: string;
  participants: ChatParticipant[];
  messages: ChatMessage[];
  trip?: {
    id: number;
    title: string;
  };
}

export interface ChatMessage {
  __typename?: string;
  id: number | string;
  content: string;
  type: "TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM";
  createdAt: string;
  editedAt?: string | null;
  senderId?: number | string;
  roomId?: number;
  sender: {
    __typename?: string;
    id: number | string;
    name: string;
    avatar?: string | null;
  };
  replyTo?: {
    __typename?: string;
    id: number | string;
    content: string;
    sender: {
      __typename?: string;
      id: number | string;
      name: string;
      avatar?: string | null;
    };
  } | null;
  readBy?: Array<{
    __typename?: string;
    userId?: number | string;
    readAt: string;
    user?: {
      __typename?: string;
      id?: number | string;
      name?: string;
      avatar?: string | null;
    };
  }>;
}

export interface ChatParticipant {
  userId?: number;
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
  isAdmin: boolean;
  canWrite?: boolean;
  lastReadAt?: string;
}

export const useMyChats = () => {
  const client = useApolloClient();
  const { data, loading, error, refetch } = useQuery<{ myChats: ChatRoom[] }>(
    MY_CHATS,
    {
      fetchPolicy: "cache-first",
      nextFetchPolicy: "cache-first",
      notifyOnNetworkStatusChange: false,
    }
  );

  // Ensure chat list refreshes when app becomes active
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        refetch().catch((error) => {
          console.warn("⚠️ Failed to refetch chats on app focus:", error);
        });
      }
    });

    return () => subscription.remove();
  }, [refetch]);

  useSubscription<{
    messageCreated: {
      roomId: number;
      participantIds: Array<number | string>;
      message: ChatMessage;
    };
  }>(MESSAGE_CREATED_SUBSCRIPTION, {
    onData: ({ data: subscriptionData }) => {
      const payload = subscriptionData?.data?.messageCreated;
      const message = payload?.message;
      const roomId = payload?.roomId;

      if (!roomId || !message) {
        return;
      }

      const existing = client.readQuery<{ myChats: ChatRoom[] }>({
        query: MY_CHATS,
      });

      if (!existing?.myChats) {
        refetch();
        return;
      }

      let updatedRoom: ChatRoom | null = null;
      const otherRooms: ChatRoom[] = [];

      for (const chat of existing.myChats) {
        if (chat.id !== roomId) {
          otherRooms.push(chat);
          continue;
        }

        const existingMessages = chat.messages || [];
        const alreadyExists = existingMessages.some(
          (m) => String(m.id) === String(message.id)
        );

        updatedRoom = {
          ...chat,
          lastMessageAt: message.createdAt || chat.lastMessageAt,
          messages: alreadyExists
            ? existingMessages
            : [message, ...existingMessages],
        };
      }

      if (!updatedRoom) {
        refetch();
        return;
      }

      client.writeQuery({
        query: MY_CHATS,
        data: {
          myChats: [updatedRoom, ...otherRooms],
        },
      });
    },
    onError: (error) => {
      const message = String((error as any)?.message ?? error);
      const normalized = message.toLowerCase();

      // Expected transient error when WS is closed due to expired token.
      // Apollo/WS will reconnect after the refresh flow updates the token.
      if (normalized.includes("4500") && normalized.includes("jwt expired")) {
        return;
      }

      console.warn("⚠️ Global message subscription error:", error);
    },
  });

  const chats: ChatRoom[] = data?.myChats || [];

  // Separate trip chats from direct messages
  const tripChats = chats.filter((chat) => chat.type === "TRIP");
  const directChats = chats.filter((chat) => chat.type === "DIRECT");
  const groupChats = chats.filter((chat) => chat.type === "GROUP");

  return {
    chats,
    tripChats,
    directChats,
    groupChats,
    loading: loading && !data?.myChats,
    error,
    refetch,
  };
};

export const useUnreadCount = () => {
  const { data, loading } = useQuery<{ unreadMessagesCount: number }>(
    UNREAD_COUNT,
    {
      pollInterval: 10000, // Poll every 10 seconds
    }
  );

  return {
    unreadCount: data?.unreadMessagesCount || 0,
    loading,
  };
};
