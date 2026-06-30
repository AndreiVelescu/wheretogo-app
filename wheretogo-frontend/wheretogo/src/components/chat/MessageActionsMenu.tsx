import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useEffect } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IMessage } from "react-native-gifted-chat";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const ACTIONS_HEIGHT = 80; // Approximate height of actions menu

interface MessageActionsMenuProps {
  visible: boolean;
  message: IMessage | null;
  messageLayout: { x: number; y: number; width: number; height: number } | null;
  isMyMessage: boolean;
  isAdmin: boolean;
  currentUserId: number;
  onClose: () => void;
  onEdit: (message: IMessage) => void;
  onDelete: (messageId: number) => void;
}

export default function MessageActionsMenu({
  visible,
  message,
  messageLayout,
  isMyMessage,
  isAdmin,
  currentUserId,
  onClose,
  onEdit,
  onDelete,
}: MessageActionsMenuProps) {
  // Always call hooks unconditionally
  const fadeAnim = useSharedValue(0);
  const translateY = useSharedValue(0);
  const { colors } = useAppTheme();

  // Calculate center position for message animation (with null checks)
  const screenCenter = SCREEN_HEIGHT / 2;
  const messageCenter = messageLayout
    ? messageLayout.y + messageLayout.height / 2
    : 0;
  const targetTranslateY = messageLayout
    ? screenCenter - messageCenter - 40
    : 0;

  useEffect(() => {
    if (visible && messageLayout) {
      // Animate in
      fadeAnim.value = withTiming(1, { duration: 80 });
      translateY.value = withSpring(targetTranslateY, {
        damping: 300,
        stiffness: 400,
      });
    } else {
      // Reset for next time
      fadeAnim.value = 0;
      translateY.value = 0;
    }
  }, [visible, targetTranslateY, messageLayout]);

  const handleClose = () => {
    // Animate out
    fadeAnim.value = withTiming(0, { duration: 100 });
    translateY.value = withTiming(0, { duration: 100 });

    // Close after animation
    setTimeout(() => {
      onClose();
    }, 150);
  };

  const handleAction = (action: () => void) => {
    handleClose();
    setTimeout(() => {
      action();
    }, 150);
  };

  const handleReaction = (emoji: string) => {
    console.log("Reaction:", emoji);
    handleClose();
  };

  // Animated styles
  const blurAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
  }));

  const messageAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
    transform: [{ translateY: translateY.value }],
  }));

  const reactionsAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
    transform: [{ scale: fadeAnim.value }, { translateY: translateY.value }],
  }));

  const actionsAnimatedStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
    transform: [{ scale: fadeAnim.value }, { translateY: translateY.value }],
  }));

  // Early return after all hooks
  if (!visible || !message || !messageLayout) {
    return null;
  }

  const hasReply = (message as any)?.replyTo;
  const isEdited = (message as any)?.edited;

  const reactions = ["❤️", "😂", "😮", "😢", "🙏", "👍"];

  // All positions are relative to original message position
  // translateY animation will move all elements together

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      <Pressable style={styles.overlay} onPress={handleClose}>
        <Animated.View style={[styles.fullBlur, blurAnimatedStyle]}>
          <BlurView intensity={20} style={StyleSheet.absoluteFillObject} />
        </Animated.View>

        {/* Reactions above message */}
        <Animated.View
          style={[
            styles.reactionsContainer,
            {
              position: "absolute",
              top: messageLayout.y - 60,
              left: messageLayout.x,
              width: messageLayout.width,
              alignItems: isMyMessage ? "flex-end" : "flex-start",
            },
            reactionsAnimatedStyle,
          ]}
        >
          <View
            style={[
              styles.reactions,
              { backgroundColor: colors.card, shadowColor: colors.shadow },
            ]}
          >
            {reactions.map((emoji, index) => (
              <TouchableOpacity
                key={emoji}
                style={styles.reactionButton}
                onPress={() => handleReaction(emoji)}
              >
                <Text style={styles.reactionEmoji}>{emoji}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        {/* Message bubble */}
        <Animated.View
          style={[
            styles.messageBubbleContainer,
            {
              position: "absolute",
              top: messageLayout.y,
              left: messageLayout.x,
              width: messageLayout.width,
            },
            messageAnimatedStyle,
          ]}
        >
          <View
            style={[
              styles.messageBubble,
              isMyMessage
                ? [
                    styles.myMessageBubble,
                    { backgroundColor: colors.chatBubbleMine },
                  ]
                : [
                    styles.otherMessageBubble,
                    { backgroundColor: colors.chatBubbleOther },
                  ],
            ]}
          >
            {hasReply && (
              <View
                style={[
                  styles.replyContainer,
                  {
                    backgroundColor: isMyMessage
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(0,0,0,0.1)",
                    borderLeftColor: isMyMessage ? "#FFFFFF" : "#0084FF",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.replyName,
                    { color: isMyMessage ? "#FFFFFF" : "#0084FF" },
                  ]}
                >
                  {hasReply.user.name}
                </Text>
                <Text
                  style={[
                    styles.replyText,
                    {
                      color: isMyMessage ? "rgba(255,255,255,0.8)" : "#65676B",
                    },
                  ]}
                  numberOfLines={2}
                >
                  {hasReply.text}
                </Text>
              </View>
            )}

            <Text
              style={[
                styles.messageText,
                isMyMessage
                  ? [styles.myMessageText, { color: colors.chatBubbleMineTxt }]
                  : [
                      styles.otherMessageText,
                      { color: colors.chatBubbleOtherTxt },
                    ],
              ]}
            >
              {message.text}
            </Text>

            {isEdited && (
              <Text
                style={[
                  styles.editedText,
                  {
                    color: isMyMessage ? "rgba(255,255,255,0.6)" : "#65676B",
                  },
                ]}
              >
                edited
              </Text>
            )}
          </View>
        </Animated.View>

        {/* Actions menu below message */}
        <Animated.View
          style={[
            styles.actionsContainer,
            {
              position: "absolute",
              top: messageLayout.y + messageLayout.height + 8,
              left: messageLayout.x,
              width: messageLayout.width,
              alignItems: isMyMessage ? "flex-end" : "flex-start",
            },
            actionsAnimatedStyle,
          ]}
        >
          <View
            style={[
              styles.actions,
              { backgroundColor: colors.card, shadowColor: colors.shadow },
            ]}
          >
            {isMyMessage && (
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleAction(() => onEdit(message))}
              >
                <View
                  style={[
                    styles.actionIcon,
                    { backgroundColor: colors.inputBackground },
                  ]}
                >
                  <Ionicons
                    name="create-outline"
                    size={20}
                    color={colors.textMuted}
                  />
                </View>
                <Text style={[styles.actionText, { color: colors.text }]}>
                  Edit
                </Text>
              </TouchableOpacity>
            )}

            {(isMyMessage || isAdmin) && (
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() =>
                  handleAction(() => onDelete(Number(message._id)))
                }
              >
                <View
                  style={[
                    styles.actionIcon,
                    styles.dangerIcon,
                    { backgroundColor: colors.errorSoft },
                  ]}
                >
                  <Ionicons name="trash-outline" size={20} color="#EF4444" />
                </View>
                <Text style={[styles.actionText, styles.dangerText]}>
                  Delete
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  fullBlur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  messageBubbleContainer: {
    // Position set dynamically
  },
  messageBubble: {
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
  myMessageBubble: {
    backgroundColor: "#E74C3C",
  },
  otherMessageBubble: {
    backgroundColor: "#E4E6EB",
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  myMessageText: {
    color: "#FFFFFF",
  },
  otherMessageText: {
    color: "#000000",
  },
  replyContainer: {
    borderLeftWidth: 3,
    paddingLeft: 8,
    paddingVertical: 4,
    marginBottom: 4,
    borderRadius: 4,
  },
  replyName: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 2,
  },
  replyText: {
    fontSize: 13,
  },
  editedText: {
    fontSize: 11,
    fontStyle: "italic",
    marginTop: 2,
  },
  reactionsContainer: {
    zIndex: 100,
  },
  reactions: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  reactionButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
  },
  reactionEmoji: {
    fontSize: 24,
  },
  actionsContainer: {
    zIndex: 99,
  },
  actions: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 4,
    gap: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    minWidth: 140,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    gap: 10,
  },
  actionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  dangerIcon: {
    backgroundColor: "#FEF2F2",
  },
  actionText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    flex: 1,
  },
  dangerText: {
    color: "#EF4444",
  },
});
