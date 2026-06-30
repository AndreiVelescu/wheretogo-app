import { IMessage } from "react-native-gifted-chat";
import { create } from "zustand";

export interface ChatRoom {
  id: number;
  name?: string;
  type: "DIRECT" | "GROUP" | "TRIP";
  tripId?: number;
  lastMessage?: {
    text: string;
    createdAt: string;
  };
  unreadCount?: number;
  participants?: Array<{
    id: number;
    name: string;
    avatar?: string;
    status?: "ONLINE" | "OFFLINE" | "AWAY";
  }>;
}

interface ChatState {
  // Active chat
  activeChatId: number | null;
  activeChat: ChatRoom | null;

  // Message interactions
  replyingTo: IMessage | null;
  editingMessage: IMessage | null;
  selectedMessage: IMessage | null;
  composerText: string;

  // UI state
  isTyping: boolean;
  typingUsers: Array<{ id: number; name: string }>;
  menuVisible: boolean;
  messageLayout: {
    x: number;
    y: number;
    width: number;
    height: number;
  } | null;

  // Actions
  setActiveChat: (chatId: number, chat?: ChatRoom) => void;
  clearActiveChat: () => void;
  setReplyingTo: (message: IMessage | null) => void;
  setEditingMessage: (message: IMessage | null) => void;
  setSelectedMessage: (message: IMessage | null) => void;
  setComposerText: (text: string) => void;
  setMenuVisible: (visible: boolean) => void;
  setMessageLayout: (layout: ChatState["messageLayout"]) => void;
  setTyping: (isTyping: boolean) => void;
  addTypingUser: (user: { id: number; name: string }) => void;
  removeTypingUser: (userId: number) => void;
  clearChatState: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  // Initial state
  activeChatId: null,
  activeChat: null,
  replyingTo: null,
  editingMessage: null,
  composerText: "",
  selectedMessage: null,
  isTyping: false,
  typingUsers: [],
  menuVisible: false,
  messageLayout: null,

  // Actions
  setActiveChat: (chatId, chat) =>
    set({
      activeChatId: chatId,
      activeChat: chat || null,
      // Clear message interactions when switching chats
      replyingTo: null,
      editingMessage: null,
      selectedMessage: null,
      menuVisible: false,
    }),

  clearActiveChat: () =>
    set({
      activeChatId: null,
      activeChat: null,
      replyingTo: null,
      editingMessage: null,
      selectedMessage: null,
      menuVisible: false,
      messageLayout: null,
    }),

  setReplyingTo: (message) =>
    set({
      replyingTo: message,
      editingMessage: null, // Can't reply and edit at the same time
    }),

  setEditingMessage: (message) =>
    set({
      editingMessage: message,
      composerText: message?.text || "",
      replyingTo: null, // Can't reply and edit at the same time
    }),

  setSelectedMessage: (message) =>
    set({
      selectedMessage: message,
      menuVisible: !!message,
    }),

  setMenuVisible: (visible) =>
    set({
      menuVisible: visible,
      selectedMessage: visible ? get().selectedMessage : null,
      messageLayout: visible ? get().messageLayout : null,
    }),

  setComposerText: (text) => set({ composerText: text }),

  setMessageLayout: (layout) =>
    set({
      messageLayout: layout,
    }),

  setTyping: (isTyping) => set({ isTyping }),

  addTypingUser: (user) =>
    set((state) => ({
      typingUsers: state.typingUsers.some((u) => u.id === user.id)
        ? state.typingUsers
        : [...state.typingUsers, user],
    })),

  removeTypingUser: (userId) =>
    set((state) => ({
      typingUsers: state.typingUsers.filter((u) => u.id !== userId),
    })),

  clearChatState: () =>
    set({
      composerText: "",
      replyingTo: null,
      editingMessage: null,
      selectedMessage: null,
      menuVisible: false,
      messageLayout: null,
      isTyping: false,
      typingUsers: [],
    }),
}));

// Selectors for optimized re-renders
export const useActiveChat = () => useChatStore((state) => state.activeChat);
export const useActiveChatId = () =>
  useChatStore((state) => state.activeChatId);
export const useReplyingTo = () => useChatStore((state) => state.replyingTo);
export const useEditingMessage = () =>
  useChatStore((state) => state.editingMessage);
export const useTypingUsers = () => useChatStore((state) => state.typingUsers);
