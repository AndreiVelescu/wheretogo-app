export interface User {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
  lastSeen?: Date;
}

export interface TripGroup {
  id: string;
  name: string;
  destination: string;
  members: User[];
  lastMessage?: string;
  lastMessageTime?: Date;
}

// Backend GraphQL types
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
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
  isAdmin: boolean;
  canWrite?: boolean;
  lastReadAt?: string;
}

export type ChatType = "selection" | "user" | "group";

export const formatTimeAgo = (date: Date | string) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const diff = Date.now() - dateObj.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (days > 0) return `${days}z`;
  if (hours > 0) return `${hours}h`;
  return `${minutes}min`;
};

// Helper function to get chat display name
export const getChatDisplayName = (
  chatRoom: ChatRoom,
  currentUserId: number
): string => {
  if (chatRoom.name) return chatRoom.name;

  if (chatRoom.type === "TRIP" && chatRoom.trip) {
    return chatRoom.trip.title;
  }

  if (chatRoom.type === "DIRECT") {
    const otherParticipant = chatRoom.participants.find(
      (p) => p.user.id !== currentUserId
    );
    return otherParticipant?.user.name || "Unknown User";
  }

  return "Group Chat";
};

// Helper function to get chat avatar/icon
export const getChatIcon = (
  chatRoom: ChatRoom
): "person" | "airplane" | "people" => {
  switch (chatRoom.type) {
    case "TRIP":
      return "airplane";
    case "DIRECT":
      return "person";
    case "GROUP":
      return "people";
    default:
      return "people";
  }
};

// Helper to get unread count for a chat
export const getUnreadCount = (
  chatRoom: ChatRoom,
  currentUserId: number
): number => {
  const participant = chatRoom.participants.find(
    (p) => p.user.id === currentUserId
  );
  if (!participant?.lastReadAt) return chatRoom.messages.length;

  const lastReadDate = new Date(participant.lastReadAt);
  return chatRoom.messages.filter(
    (m) => new Date(m.createdAt) > lastReadDate && m.sender.id !== currentUserId
  ).length;
};
