import { useAppTheme } from "../../contexts/ThemeContext";
import { useChatRoom } from "../../hooks/useChatRoom";
import { useChatStore } from "../../store";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Bubble,
  Day,
  GiftedChat,
  IMessage,
  InputToolbar,
} from "react-native-gifted-chat";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChatHeader from "./ChatHeader";
import MessageActionsMenu from "./MessageActionsMenu";
import SwipeableMessage from "./SwipeableMessage";
import {
  ChatMessage,
  ChatRoom,
  getChatDisplayName,
  getChatIcon,
} from "./types";

interface ChatScreenProps {
  chatRoom: ChatRoom;
  onGoBack: () => void;
  currentUserId: number;
  currentUserName: string;
}

export default function ChatScreen({
  chatRoom,
  onGoBack,
  currentUserId,
  currentUserName,
}: ChatScreenProps) {
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();

  // Zustand stores - optimized selectors
  const replyingTo = useChatStore((state) => state.replyingTo);
  const editingMessage = useChatStore((state) => state.editingMessage);
  const menuVisible = useChatStore((state) => state.menuVisible);
  const selectedMessage = useChatStore((state) => state.selectedMessage);
  const messageLayout = useChatStore((state) => state.messageLayout);
  const composerText = useChatStore((state) => state.composerText);

  const setReplyingTo = useChatStore((state) => state.setReplyingTo);
  const setEditingMessage = useChatStore((state) => state.setEditingMessage);
  const setMenuVisible = useChatStore((state) => state.setMenuVisible);
  const setSelectedMessage = useChatStore((state) => state.setSelectedMessage);
  const setMessageLayout = useChatStore((state) => state.setMessageLayout);
  const setComposerText = useChatStore((state) => state.setComposerText);
  const clearChatState = useChatStore((state) => state.clearChatState);

  const messageRefs = useRef<Map<string | number, any>>(new Map());
  const {
    messages,
    loading,
    loadingEarlier,
    sending,
    sendMessage,
    sendMessageWithReply,
    editMessage,
    deleteMessage,
    loadMoreMessages,
    startTyping,
    stopTyping,
    typingUsers,
  } = useChatRoom({
    roomId: chatRoom.id,
    enabled: true,
  });

  // Set composer text when editing
  useEffect(() => {
    if (editingMessage) {
      setComposerText(editingMessage.text);
    }
  }, [editingMessage]);

  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const displayName = getChatDisplayName(chatRoom, currentUserId);
  const icon = getChatIcon(chatRoom);
  const canSend = composerText.trim().length > 0;

  const formatMessageTime = useCallback((value: Date | string) => {
    const date = typeof value === "string" ? new Date(value) : value;
    return date.toLocaleTimeString("ro-RO", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  const isSameMessageCluster = useCallback(
    (firstMessage?: IMessage | null, secondMessage?: IMessage | null) => {
      if (!firstMessage || !secondMessage) {
        return false;
      }

      if (firstMessage.system || secondMessage.system) {
        return false;
      }

      if (String(firstMessage.user?._id) !== String(secondMessage.user?._id)) {
        return false;
      }

      const firstDate = new Date(firstMessage.createdAt);
      const secondDate = new Date(secondMessage.createdAt);

      if (
        Number.isNaN(firstDate.getTime()) ||
        Number.isNaN(secondDate.getTime())
      ) {
        return false;
      }

      return (
        firstDate.toDateString() === secondDate.toDateString() &&
        Math.abs(firstDate.getTime() - secondDate.getTime()) <= 5 * 60 * 1000
      );
    },
    [],
  );

  const getBubbleWrapperStyle = useCallback(
    (
      isMine: boolean,
      groupedWithPrevious: boolean,
      groupedWithNext: boolean,
    ) => {
      const baseStyle = {
        backgroundColor: isMine
          ? colors.chatBubbleMine
          : colors.chatBubbleOther,
        borderTopLeftRadius: groupedWithPrevious ? 13 : 18,
        borderTopRightRadius: groupedWithPrevious ? 13 : 18,
        borderBottomLeftRadius: groupedWithNext ? 13 : isMine ? 18 : 6,
        borderBottomRightRadius: groupedWithNext ? 13 : isMine ? 6 : 18,
        paddingHorizontal: 2,
        paddingTop: 2,
        paddingBottom: 2,
        marginTop: groupedWithPrevious ? 1 : 6,
        marginBottom: groupedWithNext ? 1 : 4,
        maxWidth: "100%" as const,
      };

      if (isMine) {
        return baseStyle;
      }

      return {
        ...baseStyle,
        borderWidth: 1,
        borderColor: colors.chatBubbleOtherBorder,
      };
    },
    [
      colors.chatBubbleMine,
      colors.chatBubbleOther,
      colors.chatBubbleOtherBorder,
    ],
  );

  const typingUserNames = useMemo(
    () =>
      typingUsers
        .filter(
          (typing: { userId: number; isTyping: boolean }) =>
            typing.userId !== currentUserId && typing.isTyping,
        )
        .map((typing: { userId: number; isTyping: boolean }) => {
          const participant = chatRoom.participants.find(
            (p) => p.user.id === typing.userId,
          );
          return participant?.user.name || "Cineva";
        }),
    [chatRoom.participants, currentUserId, typingUsers],
  );

  // Get other user ID for direct chats to show their status
  const otherUserId =
    chatRoom.type === "DIRECT"
      ? chatRoom.participants.find((p) => p.user.id !== currentUserId)?.user.id
      : null;

  // Convert backend messages to GiftedChat format
  const giftedMessages: IMessage[] = useMemo(() => {
    return messages.map((message: ChatMessage) => ({
      _id: message.id,
      text: message.content,
      createdAt: new Date(message.createdAt),
      user: {
        _id: message.sender.id,
        name: message.sender.name,
      },
      system: message.type === "SYSTEM",
      // @ts-ignore - custom fields pentru edited și reply
      edited: !!message.editedAt,
      editedAt: message.editedAt,
      replyTo: message.replyTo
        ? {
            _id: message.replyTo.id,
            text: message.replyTo.content,
            user: {
              _id: message.replyTo.sender.id,
              name: message.replyTo.sender.name,
            },
          }
        : undefined,
    }));
  }, [messages]);

  const handleSend = useCallback(
    async (newMessages: IMessage[] = []) => {
      if (newMessages.length === 0 || !newMessages[0].text?.trim()) return;

      const messageText = newMessages[0].text.trim();

      // Handle edit message
      if (editingMessage) {
        setEditingMessage(null);
        setComposerText("");
        // Fire and forget - optimistic UI
        editMessage(Number(editingMessage._id), messageText).catch(
          (error: unknown) => {
            console.error("❌ ChatScreen handleSend error:", error);
            Alert.alert("Error", "Could not edit message. Please try again.");
          },
        );
        return;
      }

      // Handle reply
      if (replyingTo) {
        setReplyingTo(null);
        setComposerText("");
        // Fire and forget - optimistic UI
        sendMessageWithReply(messageText, Number(replyingTo._id)).catch(
          (error: unknown) => {
            console.error("❌ ChatScreen handleSend error:", error);
            Alert.alert("Error", "Could not send reply. Please try again.");
          },
        );
        return;
      }

      // Handle normal message
      setComposerText("");
      // Fire and forget - optimistic UI handles instant display
      sendMessage(messageText).catch((error: unknown) => {
        console.error("❌ ChatScreen handleSend error:", error);
        Alert.alert("Error", "Could not send message. Please try again.");
      });
    },
    [
      sendMessage,
      sendMessageWithReply,
      editMessage,
      replyingTo,
      editingMessage,
    ],
  );

  // Simplified typing handler - triggered from renderInputToolbar
  const handleTypingStart = () => {
    startTyping();

    // Clear previous timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Auto-stop typing after 2 seconds
    typingTimeoutRef.current = setTimeout(() => {
      stopTyping();
    }, 2000);
  };

  const handleTypingStop = () => {
    stopTyping();
  };

  const handleLongPress = (context: any, message: IMessage) => {
    Haptics.selectionAsync().catch(() => undefined);
    setSelectedMessage(message);
    setMenuVisible(true);

    // Measure the message position after a short delay
    setTimeout(() => {
      const ref = messageRefs.current.get(message._id);
      if (ref && ref.measure) {
        ref.measure(
          (
            x: number,
            y: number,
            width: number,
            height: number,
            pageX: number,
            pageY: number,
          ) => {
            setMessageLayout({ x: pageX, y: pageY, width, height });
          },
        );
      }
    }, 50);
  };

  const renderMessageBubble = (props: any) => {
    const { currentMessage, previousMessage, nextMessage } = props;
    const hasReply = currentMessage?.replyTo;
    const isEdited = currentMessage?.edited;
    const isMyMessage = currentMessage?.user._id === currentUserId;
    const groupedWithPrevious = isSameMessageCluster(
      currentMessage,
      previousMessage,
    );
    const groupedWithNext = isSameMessageCluster(currentMessage, nextMessage);
    const readCount = Array.isArray(currentMessage?.readBy)
      ? currentMessage.readBy.filter(
          (entry: any) => String(entry.userId) !== String(currentUserId),
        ).length
      : 0;
    const shouldShowMeta = !groupedWithNext;
    const messageTime = formatMessageTime(
      currentMessage?.createdAt || new Date(),
    );

    return (
      <Bubble
        {...props}
        renderCustomView={() => {
          if (!hasReply) {
            return null;
          }

          return (
            <View style={styles.messageContentWrap}>
              <View
                style={[
                  styles.replyPreview,
                  {
                    backgroundColor: isMyMessage
                      ? "rgba(255,255,255,0.16)"
                      : isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(17,24,39,0.05)",
                    borderLeftColor: isMyMessage
                      ? "rgba(255,255,255,0.82)"
                      : colors.primary,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.replyPreviewName,
                    {
                      color: isMyMessage ? "#FFFFFF" : colors.primary,
                    },
                  ]}
                >
                  {currentMessage.replyTo.user.name}
                </Text>
                <Text
                  style={[
                    styles.replyPreviewText,
                    {
                      color: isMyMessage
                        ? "rgba(255,255,255,0.82)"
                        : colors.textMuted,
                    },
                  ]}
                >
                  {currentMessage.replyTo.text}
                </Text>
              </View>
            </View>
          );
        }}
        renderTime={() =>
          shouldShowMeta ? (
            <View
              style={[
                styles.messageMetaRow,
                isMyMessage
                  ? styles.messageMetaRowRight
                  : styles.messageMetaRowLeft,
              ]}
            >
              <Text
                style={[
                  styles.messageMetaText,
                  {
                    color: isMyMessage
                      ? "rgba(255,255,255,0.72)"
                      : colors.textMuted,
                  },
                ]}
              >
                {isEdited ? `editat · ${messageTime}` : messageTime}
              </Text>
              {isMyMessage && (
                <Ionicons
                  name={readCount > 0 ? "checkmark-done" : "checkmark"}
                  size={12}
                  color={readCount > 0 ? "#D6F5E8" : "rgba(255,255,255,0.72)"}
                />
              )}
            </View>
          ) : null
        }
        bottomContainerStyle={{
          left: shouldShowMeta
            ? styles.bubbleBottomRow
            : styles.bubbleBottomRowCollapsed,
          right: shouldShowMeta
            ? styles.bubbleBottomRow
            : styles.bubbleBottomRowCollapsed,
        }}
        containerStyle={{
          right: [
            styles.bubbleContainerRight,
            groupedWithPrevious ? styles.bubbleGroupedTop : null,
            groupedWithNext ? styles.bubbleGroupedBottom : null,
          ],
          left: [
            styles.bubbleContainerLeft,
            groupedWithPrevious ? styles.bubbleGroupedTop : null,
            groupedWithNext ? styles.bubbleGroupedBottom : null,
          ],
        }}
        wrapperStyle={{
          right: getBubbleWrapperStyle(
            true,
            groupedWithPrevious,
            groupedWithNext,
          ),
          left: getBubbleWrapperStyle(
            false,
            groupedWithPrevious,
            groupedWithNext,
          ),
        }}
        textStyle={{
          right: {
            color: colors.chatBubbleMineTxt,
            fontSize: 15,
            lineHeight: 21,
            letterSpacing: -0.15,
            paddingHorizontal: 0,
            paddingTop: hasReply ? 4 : 6,
            paddingBottom: 0,
          },
          left: {
            color: colors.chatBubbleOtherTxt,
            fontSize: 15,
            lineHeight: 21,
            letterSpacing: -0.15,
            paddingHorizontal: 0,
            paddingTop: hasReply ? 4 : 6,
            paddingBottom: 0,
          },
        }}
      />
    );
  };

  const renderInputToolbar = (props: any) => {
    return (
      <View>
        {/* Reply/Edit Bar */}
        {(replyingTo || editingMessage) && (
          <View
            style={[
              styles.contextBar,
              {
                backgroundColor: colors.card,
                borderTopColor: colors.border,
              },
            ]}
          >
            <View
              style={[
                styles.contextAccent,
                { backgroundColor: colors.primary },
              ]}
            />
            <View style={styles.contextContent}>
              <Text style={[styles.contextLabel, { color: colors.primary }]}>
                {editingMessage
                  ? "Editezi mesajul"
                  : `Răspunzi la ${replyingTo?.user.name}`}
              </Text>
              <Text
                style={[styles.contextPreview, { color: colors.textMuted }]}
                numberOfLines={1}
              >
                {editingMessage ? editingMessage.text : replyingTo?.text}
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setReplyingTo(null);
                setEditingMessage(null);
                setComposerText("");
                Haptics.selectionAsync().catch(() => undefined);
              }}
              style={({ pressed }) => [
                styles.contextCloseButton,
                {
                  backgroundColor: pressed
                    ? colors.inputBackground
                    : "transparent",
                },
              ]}
            >
              <Ionicons
                name="close-circle"
                size={24}
                color={colors.textSecondary}
              />
            </Pressable>
          </View>
        )}
        <View
          style={[
            styles.inputContainer,
            { backgroundColor: colors.card, borderTopColor: colors.border },
          ]}
        >
          <View
            style={[
              styles.inputWrapper,
              {
                backgroundColor: colors.inputBackground,
                borderColor: canSend ? colors.primarySoft : colors.border,
              },
            ]}
          >
            <InputToolbar
              {...props}
              containerStyle={styles.inputToolbarContainer}
              primaryStyle={styles.inputToolbarPrimary}
              renderActions={() => null}
              renderSend={() => null}
              textInputProps={{
                ...props.textInputProps,
                numberOfLines: 5,
                placeholder: "Scrie un mesaj...",
                multiline: true,
                style: [styles.textInput, { color: colors.text }],
                placeholderTextColor: colors.inputPlaceholder,
                value: composerText,
                onFocus: handleTypingStart,
                onBlur: handleTypingStop,
                onChangeText: (text: string) => {
                  setComposerText(text);
                  if (text.length > 0) {
                    handleTypingStart();
                  } else {
                    handleTypingStop();
                  }
                },
              }}
            />
            <Pressable
              hitSlop={10}
              onPress={() => {
                if (canSend) {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(
                    () => undefined,
                  );
                  handleSend([
                    {
                      _id: Date.now(),
                      text: composerText,
                      createdAt: new Date(),
                      user: { _id: currentUserId },
                    },
                  ]);
                }
              }}
              disabled={!canSend}
              style={({ pressed }) => [
                styles.sendButtonPressable,
                pressed && canSend ? styles.sendButtonPressed : null,
              ]}
            >
              <LinearGradient
                colors={
                  canSend
                    ? [colors.primary, colors.chatBubbleMine]
                    : [colors.inputBackground, colors.inputBackground]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.sendButtonInside,
                  {
                    shadowColor: colors.primary,
                    borderColor: canSend ? "transparent" : colors.border,
                  },
                ]}
              >
                <Ionicons
                  name="arrow-up"
                  size={18}
                  color={canSend ? "#FFFFFF" : colors.textMuted}
                />
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  const renderSend = () => null;

  const renderSystemMessage = (props: any) => {
    return (
      <View style={styles.systemMessage}>
        <Text
          style={[
            styles.systemMessageText,
            {
              color: colors.textMuted,
              backgroundColor: isDark ? colors.cardElevated : "#F0F2F5",
            },
          ]}
        >
          {props.currentMessage.text}
        </Text>
      </View>
    );
  };

  const renderMessage = useCallback(
    (props: any) => {
      const { currentMessage, previousMessage, nextMessage, position } = props;

      if (!currentMessage) {
        return null;
      }

      if (currentMessage.system) {
        return renderSystemMessage(props);
      }

      const isMyMessage =
        position === "right" || currentMessage.user?._id === currentUserId;
      const groupedWithPrevious = isSameMessageCluster(
        currentMessage,
        previousMessage,
      );
      const groupedWithNext = isSameMessageCluster(currentMessage, nextMessage);

      return (
        <View
          ref={(ref) => {
            if (ref && currentMessage) {
              messageRefs.current.set(currentMessage._id, ref);
            }
          }}
          collapsable={false}
          style={[
            styles.messageRow,
            isMyMessage ? styles.messageRowRight : styles.messageRowLeft,
            groupedWithPrevious ? styles.messageRowGroupedTop : null,
            groupedWithNext ? styles.messageRowGroupedBottom : null,
          ]}
        >
          <View
            style={[
              styles.messageBubbleColumn,
              isMyMessage
                ? styles.messageBubbleColumnRight
                : styles.messageBubbleColumnLeft,
            ]}
          >
            <SwipeableMessage
              isMyMessage={isMyMessage}
              align={isMyMessage ? "right" : "left"}
              onSwipeReply={() => {
                Haptics.selectionAsync().catch(() => undefined);
                setReplyingTo(currentMessage);
              }}
            >
              {renderMessageBubble(props)}
            </SwipeableMessage>
          </View>
        </View>
      );
    },
    [currentUserId, isSameMessageCluster, renderMessageBubble, setReplyingTo],
  );

  const renderFooter = () => {
    if (typingUserNames.length === 0) return null;

    return (
      <View style={styles.typingContainer}>
        <View
          style={[
            styles.typingBubble,
            { backgroundColor: colors.chatBubbleOther },
          ]}
        >
          <View
            style={[styles.typingDot, { backgroundColor: colors.textMuted }]}
          />
          <View
            style={[
              styles.typingDot,
              { opacity: 0.4, backgroundColor: colors.textMuted },
            ]}
          />
          <View
            style={[
              styles.typingDot,
              { opacity: 0.2, backgroundColor: colors.textMuted },
            ]}
          />
        </View>
        <Text style={[styles.typingText, { color: colors.textMuted }]}>
          {typingUserNames.join(", ")} scrie...
        </Text>
      </View>
    );
  };

  const renderLoadEarlier = useCallback(() => {
    return (
      <TouchableOpacity
        style={[styles.loadEarlierButton, { backgroundColor: colors.card }]}
        onPress={loadMoreMessages}
        disabled={loadingEarlier}
      >
        <Ionicons name="chevron-up" size={16} color={colors.primary} />
        <Text style={[styles.loadEarlierText, { color: colors.primary }]}>
          {loadingEarlier ? "Se încarcă..." : "Mesaje mai vechi"}
        </Text>
      </TouchableOpacity>
    );
  }, [colors.card, colors.primary, loadMoreMessages, loadingEarlier]);

  const renderDay = useCallback(
    (props: any) => (
      <Day
        {...props}
        textStyle={{
          color: colors.textMuted,
          fontSize: 12,
          fontWeight: "600",
        }}
        wrapperStyle={{
          backgroundColor: colors.card,
          borderRadius: 999,
          paddingHorizontal: 12,
          paddingVertical: 6,
        }}
        containerStyle={{ marginVertical: 10 }}
      />
    ),
    [colors.card, colors.textMuted],
  );

  //   Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      stopTyping();
    };
  }, [stopTyping]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={colors.card}
      />

      {/* Chat Header with Settings */}
      <ChatHeader
        chatRoom={chatRoom}
        currentUserId={currentUserId}
        onGoBack={onGoBack}
      />

      <KeyboardAvoidingView
        style={[
          styles.chatContainer,
          { backgroundColor: colors.backgroundSecondary },
        ]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={0}
      >
        <GiftedChat
          messages={giftedMessages}
          onSend={handleSend}
          text={composerText}
          isSendButtonAlwaysVisible={true}
          {...({
            loadEarlier: messages.length >= 50,
            onLoadEarlier: loadMoreMessages,
            isLoadingEarlier: loadingEarlier,
          } as any)}
          textInputProps={{
            value: composerText,
            onChangeText: setComposerText,
          }}
          user={{
            _id: currentUserId,
            name: currentUserName,
          }}
          onLongPressMessage={handleLongPress}
          renderMessage={renderMessage}
          isUsernameVisible={false}
          isAvatarVisibleForEveryMessage={false}
          renderInputToolbar={renderInputToolbar}
          renderSend={renderSend}
          renderSystemMessage={renderSystemMessage}
          renderFooter={renderFooter}
          renderLoadEarlier={renderLoadEarlier}
          renderDay={renderDay}
          renderTime={() => null}
          isScrollToBottomEnabled={true}
          scrollToBottomComponent={() => (
            <View
              style={[
                styles.scrollToBottomPill,
                { backgroundColor: colors.cardElevated },
              ]}
            >
              <Ionicons name="chevron-down" size={20} color={colors.primary} />
            </View>
          )}
          scrollToBottomContentStyle={{
            backgroundColor: isDark
              ? "rgba(30, 33, 48, 0.9)"
              : "rgba(255, 255, 255, 0.52)",
            width: 42,
            height: 42,
            borderRadius: 21,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 2 },
          }}
          scrollToBottomOffset={5}
          keyboardShouldPersistTaps="handled"
          bottomOffset={Math.max(insets.bottom, 6)}
          listProps={{
            maintainVisibleContentPosition: {
              minIndexForVisible: 0,
              autoscrollToTopThreshold: 24,
            },
            keyboardDismissMode: "interactive",
          }}
          messageTextProps={{
            url: true,
            email: true,
            phone: false,
            containerStyle: {
              left: styles.messageTextContainer,
              right: styles.messageTextContainer,
            },
            linkStyle: {
              left: { color: colors.primary },
              right: { color: "#FFFFFF", textDecorationLine: "underline" },
            },
          }}
          messagesContainerStyle={{
            paddingBottom: 8,
            paddingHorizontal: 6,
          }}
        />
      </KeyboardAvoidingView>

      {/* Message Actions Modal */}
      <MessageActionsMenu
        visible={menuVisible}
        message={selectedMessage}
        messageLayout={messageLayout}
        isMyMessage={selectedMessage?.user._id === currentUserId}
        isAdmin={
          chatRoom.participants.find((p) => p.user.id === currentUserId)
            ?.isAdmin || false
        }
        currentUserId={currentUserId}
        onClose={() => {
          setMenuVisible(false);
          setSelectedMessage(null);
          setMessageLayout(null);
        }}
        onEdit={(msg) => {
          setEditingMessage(msg);
        }}
        onDelete={(msgId) => {
          deleteMessage(msgId);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  chatContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#F3F4F6",
    borderRadius: 28,
    paddingRight: 6,
    paddingLeft: 16,
    paddingVertical: 6,
    minHeight: 58,
    borderWidth: 1,
  },
  inputToolbarContainer: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputToolbarPrimary: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "transparent",
    paddingTop: 12,
    paddingBottom: 10,
    paddingHorizontal: 0,
    fontSize: 15,
    color: "#111827",
    minHeight: 20,
    lineHeight: 22,
    marginTop: 0,
    marginBottom: 0,
  },
  messageContentWrap: {
    paddingHorizontal: 0,
    paddingTop: 2,
  },
  messageRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 2,
  },
  messageRowLeft: {
    justifyContent: "flex-start",
    paddingLeft: 2,
    paddingRight: 12,
  },
  messageRowRight: {
    justifyContent: "flex-end",
    paddingLeft: 28,
    paddingRight: 0,
  },
  messageRowGroupedTop: {
    marginTop: 0,
  },
  messageRowGroupedBottom: {
    marginBottom: 1,
  },
  messageBubbleColumn: {},
  messageBubbleColumnLeft: {
    alignItems: "flex-start",
    maxWidth: "92%",
  },
  messageBubbleColumnRight: {
    alignItems: "flex-end",
    maxWidth: "92%",
  },
  bubbleContainerRight: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  bubbleContainerLeft: {
    justifyContent: "flex-start",
    alignItems: "flex-start",

    marginLeft: 0,
  },
  bubbleGroupedTop: {
    marginTop: 0,
  },
  bubbleGroupedBottom: {
    marginBottom: 5,
  },
  bubbleBottomRow: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
  bubbleBottomRowCollapsed: {
    paddingHorizontal: 0,
    paddingBottom: 0,
    height: 0,
  },
  replyPreview: {
    borderLeftWidth: 3,
    paddingLeft: 8,
    paddingRight: 7,
    borderRadius: 9,
  },
  replyPreviewName: {
    fontSize: 10,
    fontWeight: "500",
    marginBottom: 2,
  },
  replyPreviewText: {
    fontSize: 12,
    lineHeight: 12,
  },
  messageTextContainer: {
    paddingHorizontal: 0,
    alignContent: "center",
  },
  contextBar: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contextAccent: {
    width: 3,
    alignSelf: "stretch",
    borderRadius: 999,
    marginRight: 10,
  },
  contextContent: {
    flex: 1,
  },
  contextLabel: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 2,
  },
  contextPreview: {
    fontSize: 13,
  },
  contextCloseButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  sendButtonPressable: {
    marginLeft: 8,
    borderRadius: 22,
  },
  sendButtonInside: {
    backgroundColor: "#E74C3C",
    borderRadius: 22,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
    shadowColor: "#E74C3C",
    shadowOpacity: 0.28,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    borderWidth: 1,
  },
  sendButtonPressed: {
    transform: [{ scale: 0.94 }, { translateY: 1 }],
  },
  loadEarlierButton: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },
  loadEarlierText: {
    fontSize: 13,
    fontWeight: "700",
  },
  scrollToBottomPill: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButton: {
    backgroundColor: "#E74C3C",
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#E74C3C",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sendButtonDisabled: {
    backgroundColor: "#E5E7EB",
    shadowOpacity: 0,
  },
  systemMessage: {
    alignItems: "center",
    marginVertical: 12,
  },
  systemMessageText: {
    fontSize: 12,
    color: "#65676B",
    fontStyle: "italic",
    backgroundColor: "#F0F2F5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  typingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    paddingBottom: 6,
  },
  typingBubble: {
    backgroundColor: "#E4E6EB",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  typingDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "#65676B",
  },
  typingText: {
    fontSize: 13,
    color: "#65676B",
    fontWeight: "500",
    fontStyle: "italic",
  },
  messageMetaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageMetaRowRight: {
    alignSelf: "flex-end",
  },
  messageMetaRowLeft: {
    alignSelf: "flex-end",
  },
  messageMetaText: {
    fontSize: 12,
    fontWeight: "300",
  },
  messageStatusWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
});
