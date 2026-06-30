import { useAppTheme } from "@/src/contexts/ThemeContext";
import { normalizeRemoteImageUrl } from "@/src/utils/imageUtils";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import UserStatusIndicator from "./UserStatusIndicator";
import { ChatRoom, getChatDisplayName, getChatIcon } from "./types";

interface ChatHeaderProps {
  chatRoom: ChatRoom;
  currentUserId: number;
  onGoBack: () => void;
}

export default function ChatHeader({
  chatRoom,
  currentUserId,
  onGoBack,
}: ChatHeaderProps) {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();

  const displayName = getChatDisplayName(chatRoom, currentUserId);
  const icon = getChatIcon(chatRoom);

  // Get other user for direct chats
  const otherUser =
    chatRoom.type === "DIRECT"
      ? chatRoom.participants.find((p) => p.user.id !== currentUserId)?.user
      : null;
  const otherUserId = otherUser?.id ?? null;
  const otherUserAvatar = otherUser?.avatar ?? null;
  const resolvedOtherUserAvatar = otherUserAvatar
    ? normalizeRemoteImageUrl(otherUserAvatar)
    : null;

  const handleOpenSettings = () => {
    router.push(`/chat/${chatRoom.id}/settings`);
  };

  return (
    <View
      style={[
        styles.chatHeader,
        { paddingTop: insets.top, backgroundColor: colors.card },
      ]}
    >
      <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color={colors.text} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.chatHeaderContent}
        onPress={handleOpenSettings}
        activeOpacity={0.7}
      >
        <View style={styles.avatarWrapper}>
          {resolvedOtherUserAvatar ? (
            <Image
              source={{ uri: resolvedOtherUserAvatar }}
              style={styles.avatarImage}
              contentFit="cover"
              transition={200}
            />
          ) : (
            <View
              style={[
                styles.avatar,
                {
                  backgroundColor:
                    chatRoom.type === "TRIP" ? "#FF6B00" : "#4CAF50",
                },
              ]}
            >
              {otherUser ? (
                <Text style={styles.avatarInitial}>
                  {otherUser.name?.charAt(0)?.toUpperCase() || "?"}
                </Text>
              ) : (
                <Ionicons name={icon} size={22} color="#FFF" />
              )}
            </View>
          )}
          {otherUserId && (
            <View style={styles.statusIndicatorHeader}>
              <UserStatusIndicator userId={otherUserId} size="small" />
            </View>
          )}
        </View>

        <View style={styles.headerTextContainer}>
          <Text
            style={[styles.chatTitle, { color: colors.text }]}
            numberOfLines={1}
          >
            {displayName}
          </Text>
          <Text style={[styles.chatSubtitle, { color: colors.textSecondary }]}>
            {chatRoom.participants.length}{" "}
            {chatRoom.participants.length === 1 ? "member" : "members"}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleOpenSettings}
        style={styles.settingsButton}
      >
        <Ionicons name="ellipsis-vertical" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  chatHeader: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0,
    paddingHorizontal: 8,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  backButton: {
    padding: 6,
    paddingRight: 10,
  },
  chatHeaderContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E5E7EB",
  },
  avatarInitial: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFF",
  },
  statusIndicatorHeader: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  headerTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  chatTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#050505",
    letterSpacing: -0.4,
  },
  chatSubtitle: {
    fontSize: 13,
    color: "#65676B",
    marginTop: 2,
    fontWeight: "500",
  },
  settingsButton: {
    padding: 8,
    marginLeft: 8,
  },
});
