import {
  CHAT_MESSAGES,
  DELETE_MESSAGE,
  EDIT_MESSAGE,
  MARK_AS_READ,
  SEND_MESSAGE,
  SEND_MESSAGE_WITH_REPLY,
  SENT_MESSAGE_SUBSCRIPTION,
  START_TYPING,
  STOP_TYPING,
  TYPING_SUBSCRIPTION,
} from "@/src/graphql/chat";
import {
  useApolloClient,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AppState } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../contexts/AuthContext";
import { ChatMessage } from "./useChat";

interface UseChatRoomParams {
  roomId: number;
  enabled?: boolean;
}

const PAGE_SIZE = 50;

function normalizeMessage(message: ChatMessage): ChatMessage {
  return {
    ...message,
    editedAt: message.editedAt ?? null,
    readBy: message.readBy ?? [],
    replyTo: message.replyTo ?? null,
  };
}

function isTemporaryMessage(message: ChatMessage) {
  return typeof message.id === "string";
}

export const useChatRoom = ({ roomId, enabled = true }: UseChatRoomParams) => {
  const client = useApolloClient();
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastMessagesRef = useRef<ChatMessage[]>([]);
  const [typingUsers, setTypingUsers] = useState<
    Array<{ userId: number; isTyping: boolean }>
  >([]);
  const [loadingEarlier, setLoadingEarlier] = useState(false);

  const { user: me } = useAuth();

  if (!me) {
    throw new Error("User must be authenticated to use chat room");
  }

  const queryVariables = useMemo(
    () => ({ roomId, limit: PAGE_SIZE }),
    [roomId],
  );

  const updateMessagesCache = useCallback(
    (updater: (messages: ChatMessage[]) => ChatMessage[]) => {
      const existing = client.readQuery<{ chatMessages: ChatMessage[] }>({
        query: CHAT_MESSAGES,
        variables: queryVariables,
      });

      const nextMessages = updater(
        existing?.chatMessages ?? lastMessagesRef.current,
      );

      client.writeQuery({
        query: CHAT_MESSAGES,
        variables: queryVariables,
        data: { chatMessages: nextMessages },
      });

      lastMessagesRef.current = nextMessages;
    },
    [client, queryVariables],
  );

  const mergeIncomingMessage = useCallback(
    (existingMessages: ChatMessage[], incomingMessage: ChatMessage) => {
      const normalizedIncoming = normalizeMessage(incomingMessage);
      const dedupedMessages = existingMessages.filter((message) => {
        if (String(message.id) === String(normalizedIncoming.id)) {
          return false;
        }

        const optimisticDuplicate =
          String(message.sender.id) === String(normalizedIncoming.sender.id) &&
          message.content === normalizedIncoming.content &&
          String(message.roomId ?? roomId) ===
            String(normalizedIncoming.roomId ?? roomId) &&
          (isTemporaryMessage(message) ||
            isTemporaryMessage(normalizedIncoming));

        return !optimisticDuplicate;
      });

      return [normalizedIncoming, ...dedupedMessages].sort(
        (left, right) =>
          new Date(right.createdAt).getTime() -
          new Date(left.createdAt).getTime(),
      );
    },
    [roomId],
  );

  const { data, previousData, loading, error, fetchMore, refetch } = useQuery<{
    chatMessages: ChatMessage[];
  }>(CHAT_MESSAGES, {
    variables: queryVariables,
    skip: !enabled || !roomId,
    notifyOnNetworkStatusChange: false,
    fetchPolicy: "cache-first",
    nextFetchPolicy: "cache-first",
    returnPartialData: true,
  });

  useEffect(() => {
    if (data?.chatMessages && data.chatMessages.length > 0) {
      lastMessagesRef.current = data.chatMessages as ChatMessage[];
      return;
    }

    if (previousData?.chatMessages && previousData.chatMessages.length > 0) {
      lastMessagesRef.current = previousData.chatMessages as ChatMessage[];
    }
  }, [data?.chatMessages, previousData?.chatMessages]);

  const messages: ChatMessage[] =
    data?.chatMessages && data.chatMessages.length > 0
      ? (data.chatMessages as ChatMessage[])
      : previousData?.chatMessages && previousData.chatMessages.length > 0
        ? (previousData.chatMessages as ChatMessage[])
        : lastMessagesRef.current;

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active" && enabled && roomId) {
        refetch().catch((refetchError) => {
          console.warn("⚠️ Failed to refetch on app focus:", refetchError);
        });
      }
    });

    return () => subscription.remove();
  }, [enabled, roomId, refetch]);

  const [sendMessageMutation, { loading: sending }] = useMutation<{
    sendMessage: ChatMessage;
  }>(SEND_MESSAGE, {
    onError: (mutationError: any) => {
      console.error("❌ Failed to send message:", mutationError);
    },
  });

  const [markAsReadMutation] = useMutation(MARK_AS_READ);

  const [deleteMessageMutation] = useMutation(DELETE_MESSAGE, {
    onError: (mutationError) => {
      console.error("❌ Failed to delete message:", mutationError);
    },
  });

  const [editMessageMutation] = useMutation<{
    editMessage: ChatMessage;
  }>(EDIT_MESSAGE, {
    onError: (mutationError) => {
      console.error("❌ Failed to edit message:", mutationError);
    },
  });

  const [sendMessageWithReplyMutation] = useMutation<{
    sendMessageWithReply: ChatMessage;
  }>(SEND_MESSAGE_WITH_REPLY, {
    onError: (mutationError) => {
      console.error("❌ Failed to send reply:", mutationError);
    },
  });

  const [startTypingMutation] = useMutation(START_TYPING);
  const [stopTypingMutation] = useMutation(STOP_TYPING);

  const numericRoomId = useMemo(
    () => (roomId ? parseInt(roomId.toString(), 10) : null),
    [roomId],
  );

  const subscriptionVariables = useMemo(
    () => ({ roomId: numericRoomId }),
    [numericRoomId],
  );

  useSubscription(SENT_MESSAGE_SUBSCRIPTION, {
    variables: subscriptionVariables,
    skip: !enabled || !roomId,
    onData: ({ data: subscriptionData }: any) => {
      const newMessage = subscriptionData?.data?.sentMessage as
        | ChatMessage
        | undefined;
      if (!newMessage) {
        return;
      }

      updateMessagesCache((existingMessages) =>
        mergeIncomingMessage(existingMessages, newMessage),
      );
    },
    onError: (subscriptionError) => {
      console.error("❌ Subscription error:", subscriptionError);
    },
  });

  useSubscription(TYPING_SUBSCRIPTION, {
    variables: subscriptionVariables,
    skip: !enabled || !roomId,
    onData: ({ data: subscriptionData }: any) => {
      const typingData = subscriptionData?.data?.userTyping;
      if (typingData && typingData.userId !== me.id) {
        setTypingUsers((previous) => {
          const filtered = previous.filter(
            (user) => user.userId !== typingData.userId,
          );
          if (typingData.isTyping) {
            return [...filtered, { userId: typingData.userId, isTyping: true }];
          }
          return filtered;
        });
      }
    },
    onError: (subscriptionError) => {
      console.warn(
        "⚠️ Typing subscription error (might not be supported):",
        subscriptionError,
      );
    },
  });

  const unreadMessageIds = useMemo(() => {
    if (!enabled || messages.length === 0) {
      return [];
    }

    return messages
      .filter((message) => String(message.sender.id) !== String(me.id))
      .filter(
        (message) =>
          !message.readBy?.some(
            (readReceipt) => String(readReceipt.userId) === String(me.id),
          ),
      )
      .map((message) => parseInt(String(message.id), 10))
      .filter((messageId) => !isNaN(messageId) && messageId > 0);
  }, [enabled, me.id, messages]);

  useEffect(() => {
    if (unreadMessageIds.length === 0) {
      return;
    }

    markAsReadMutation({
      variables: { messageIds: unreadMessageIds },
    }).catch((mutationError) => {
      console.error("❌ Failed to mark messages as read:", mutationError);
    });
  }, [markAsReadMutation, unreadMessageIds]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || sending) {
      return;
    }

    const optimisticId = uuidv4();

    await sendMessageMutation({
      variables: {
        message: {
          id: optimisticId,
          roomId,
          content: content.trim(),
          type: "TEXT",
        },
      },
      optimisticResponse: {
        sendMessage: {
          __typename: "ChatMessage",
          id: optimisticId,
          content: content.trim(),
          type: "TEXT",
          createdAt: new Date().toISOString(),
          editedAt: null,
          senderId: me.id,
          roomId,
          readBy: [],
          replyTo: null,
          sender: {
            __typename: "User",
            id: me.id,
            name: me.name || "Tu",
            avatar: me.avatar || null,
          },
        },
      },
      update: (cache, { data: mutationData }) => {
        const newMessage = mutationData?.sendMessage;
        if (!newMessage) {
          return;
        }

        const existing = cache.readQuery<{ chatMessages: ChatMessage[] }>({
          query: CHAT_MESSAGES,
          variables: queryVariables,
        });

        cache.writeQuery({
          query: CHAT_MESSAGES,
          variables: queryVariables,
          data: {
            chatMessages: mergeIncomingMessage(
              existing?.chatMessages ?? [],
              newMessage,
            ),
          },
        });
      },
    });
  };

  const deleteMessage = async (messageId: number) => {
    await deleteMessageMutation({
      variables: { messageId },
    });

    updateMessagesCache((existingMessages) =>
      existingMessages.filter((message) => Number(message.id) !== messageId),
    );
  };

  const editMessage = async (messageId: number, content: string) => {
    if (!content.trim()) {
      return;
    }

    const result = await editMessageMutation({
      variables: {
        messageId,
        content: content.trim(),
      },
    });

    const updatedMessage = result.data?.editMessage;
    if (updatedMessage) {
      updateMessagesCache((existingMessages) =>
        existingMessages.map((message) =>
          Number(message.id) === messageId
            ? normalizeMessage(updatedMessage)
            : message,
        ),
      );
    }

    return updatedMessage;
  };

  const sendMessageWithReply = async (content: string, replyToId: number) => {
    if (!content.trim() || sending) {
      return;
    }

    const replyTarget = messages.find(
      (message) => Number(message.id) === replyToId,
    );
    const optimisticId = uuidv4();

    const result = await sendMessageWithReplyMutation({
      variables: {
        roomId,
        content: content.trim(),
        replyToId,
        type: "TEXT",
      },
      optimisticResponse: {
        sendMessageWithReply: {
          __typename: "ChatMessage",
          id: optimisticId,
          content: content.trim(),
          type: "TEXT",
          createdAt: new Date().toISOString(),
          editedAt: null,
          senderId: me.id,
          roomId,
          readBy: [],
          replyTo: replyTarget
            ? {
                __typename: "ChatMessage",
                id: replyTarget.id,
                content: replyTarget.content,
                sender: {
                  __typename: "User",
                  id: replyTarget.sender.id,
                  name: replyTarget.sender.name,
                  avatar: replyTarget.sender.avatar || null,
                },
              }
            : null,
          sender: {
            __typename: "User",
            id: me.id,
            name: me.name || "Tu",
            avatar: me.avatar || null,
          },
        },
      },
      update: (cache, { data: mutationData }) => {
        const newMessage = mutationData?.sendMessageWithReply;
        if (!newMessage) {
          return;
        }

        const existing = cache.readQuery<{ chatMessages: ChatMessage[] }>({
          query: CHAT_MESSAGES,
          variables: queryVariables,
        });

        cache.writeQuery({
          query: CHAT_MESSAGES,
          variables: queryVariables,
          data: {
            chatMessages: mergeIncomingMessage(
              existing?.chatMessages ?? [],
              newMessage,
            ),
          },
        });
      },
    });

    return result.data?.sendMessageWithReply;
  };

  const loadMoreMessages = async () => {
    if (loading || loadingEarlier || messages.length === 0) {
      return;
    }

    const oldestMessage = messages[messages.length - 1];
    if (!oldestMessage) {
      return;
    }

    setLoadingEarlier(true);

    try {
      const fetchResult = await fetchMore({
        variables: {
          roomId,
          limit: PAGE_SIZE,
          before: oldestMessage.createdAt,
        },
      });

      const fetchedMessages = fetchResult.data?.chatMessages ?? [];
      if (fetchedMessages.length > 0) {
        updateMessagesCache((existingMessages) => {
          const seenIds = new Set(
            existingMessages.map((message) => String(message.id)),
          );
          const olderMessages = fetchedMessages.filter(
            (message) => !seenIds.has(String(message.id)),
          );
          return [...existingMessages, ...olderMessages.map(normalizeMessage)];
        });
      }
    } catch (fetchError) {
      console.error("❌ Failed to load more messages:", fetchError);
    } finally {
      setLoadingEarlier(false);
    }
  };

  const startTyping = useCallback(() => {
    startTypingMutation({
      variables: { roomId: numericRoomId },
    }).catch((mutationError) =>
      console.warn(
        "⚠️ startTyping error (might not be supported):",
        mutationError,
      ),
    );

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      stopTyping();
    }, 3000);
  }, [numericRoomId, startTypingMutation]);

  const stopTyping = useCallback(() => {
    stopTypingMutation({
      variables: { roomId: numericRoomId },
    }).catch((mutationError) =>
      console.warn(
        "⚠️ stopTyping error (might not be supported):",
        mutationError,
      ),
    );

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
  }, [numericRoomId, stopTypingMutation]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      stopTyping();
    };
  }, [stopTyping]);

  return {
    messages,
    loading,
    loadingEarlier,
    error,
    sending,
    sendMessage,
    sendMessageWithReply,
    editMessage,
    deleteMessage,
    loadMoreMessages,
    startTyping,
    stopTyping,
    refetch,
    typingUsers,
  };
};
