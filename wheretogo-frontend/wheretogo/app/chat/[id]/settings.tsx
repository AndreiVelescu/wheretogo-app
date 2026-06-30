import UserStatusIndicator from "@/src/components/chat/UserStatusIndicator";
import { getChatDisplayName, getChatIcon } from "@/src/components/chat/types";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useMyChats } from "@/src/hooks/useChat";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatSettingsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useAuth();
  const { colors } = useAppTheme();
  const { tripChats, directChats, loading } = useMyChats();

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: colors.background },
        ]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const allChats = [...tripChats, ...directChats];
  const chatRoom = allChats.find((chat) => chat.id === Number(id));

  if (!chatRoom) {
    return (
      <View
        style={[styles.errorContainer, { backgroundColor: colors.background }]}
      >
        <Text style={[styles.errorText, { color: colors.textMuted }]}>
          Chat-ul nu a fost găsit
        </Text>
      </View>
    );
  }

  const displayName = getChatDisplayName(chatRoom, Number(user.id));
  const icon = getChatIcon(chatRoom);
  const currentUserId = Number(user.id);

  // Get other user for direct chats
  const otherUser =
    chatRoom.type === "DIRECT"
      ? chatRoom.participants.find((p) => p.user.id !== currentUserId)?.user
      : null;

  const handleMuteToggle = () => {
    // TODO: Implement mute functionality
    console.log("Toggle mute");
  };

  const handleLeaveChat = () => {
    // TODO: Implement leave chat
    console.log("Leave chat");
  };

  const handleViewMedia = () => {
    // TODO: Implement view media
    console.log("View media");
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
      edges={["top"]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: colors.card, borderBottomColor: colors.border },
        ]}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Chat Settings
        </Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollContent}>
        {/* Chat Info Section */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <View style={styles.chatInfoCard}>
            {otherUser?.avatar ? (
              <Image
                source={{ uri: otherUser.avatar }}
                style={[
                  styles.largeAvatarImage,
                  { backgroundColor: colors.border },
                ]}
                contentFit="cover"
                transition={200}
              />
            ) : (
              <View
                style={[
                  styles.largeAvatar,
                  {
                    backgroundColor:
                      chatRoom.type === "TRIP" ? "#FF6B00" : "#4CAF50",
                  },
                ]}
              >
                {otherUser ? (
                  <Text style={styles.largeAvatarInitial}>
                    {otherUser.name?.charAt(0)?.toUpperCase() || "?"}
                  </Text>
                ) : (
                  <Ionicons name={icon} size={40} color="#FFF" />
                )}
              </View>
            )}
            <Text style={[styles.chatInfoName, { color: colors.text }]}>
              {displayName}
            </Text>
            <Text style={[styles.chatInfoMeta, { color: colors.textMuted }]}>
              {chatRoom.type === "TRIP" ? "Trip Chat" : "Direct Message"}
            </Text>
            {chatRoom.type === "TRIP" && chatRoom.trip && (
              <Text
                style={[
                  styles.chatInfoTrip,
                  {
                    color: colors.primary,
                    backgroundColor: colors.primarySoft,
                  },
                ]}
              >
                {chatRoom.trip.title}
              </Text>
            )}
          </View>
        </View>

        {/* Members Section */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>
            Members
          </Text>
          {chatRoom.participants.map((participant) => {
            const isCurrentUser = participant.user.id === currentUserId;
            const otherUserId =
              chatRoom.type === "DIRECT" && !isCurrentUser
                ? participant.user.id
                : null;

            return (
              <View key={participant.user.id} style={styles.memberItem}>
                <View style={styles.memberAvatarWrapper}>
                  {participant.user.avatar ? (
                    <Image
                      source={{ uri: participant.user.avatar }}
                      style={[
                        styles.memberAvatarImage,
                        { backgroundColor: colors.border },
                      ]}
                      contentFit="cover"
                      transition={200}
                    />
                  ) : (
                    <View
                      style={[
                        styles.memberAvatar,
                        { backgroundColor: colors.border },
                      ]}
                    >
                      <Text
                        style={[
                          styles.memberInitial,
                          { color: colors.textMuted },
                        ]}
                      >
                        {participant.user.name.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                  )}
                  {otherUserId && (
                    <View style={styles.statusIndicatorMember}>
                      <UserStatusIndicator userId={otherUserId} size="small" />
                    </View>
                  )}
                </View>
                <View style={styles.memberInfo}>
                  <Text style={[styles.memberName, { color: colors.text }]}>
                    {participant.user.name}
                    {isCurrentUser && " (You)"}
                  </Text>
                  {participant.isAdmin && (
                    <View
                      style={[
                        styles.adminBadge,
                        { backgroundColor: colors.primary },
                      ]}
                    >
                      <Text style={styles.adminText}>Admin</Text>
                    </View>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        {/* Actions Section */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>
            Actions
          </Text>

          <TouchableOpacity
            style={styles.actionItem}
            onPress={handleMuteToggle}
          >
            <View
              style={[
                styles.actionIcon,
                { backgroundColor: colors.backgroundSecondary },
              ]}
            >
              <Ionicons
                name="notifications-off-outline"
                size={22}
                color={colors.textMuted}
              />
            </View>
            <View style={styles.actionContent}>
              <Text style={[styles.actionTitle, { color: colors.text }]}>
                Mute Notifications
              </Text>
              <Text
                style={[styles.actionDescription, { color: colors.textMuted }]}
              >
                Stop receiving notifications from this chat
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem} onPress={handleViewMedia}>
            <View
              style={[
                styles.actionIcon,
                { backgroundColor: colors.backgroundSecondary },
              ]}
            >
              <Ionicons
                name="images-outline"
                size={22}
                color={colors.textMuted}
              />
            </View>
            <View style={styles.actionContent}>
              <Text style={[styles.actionTitle, { color: colors.text }]}>
                View Media & Files
              </Text>
              <Text
                style={[styles.actionDescription, { color: colors.textMuted }]}
              >
                Photos, videos and documents
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>

          {chatRoom.type === "GROUP" && (
            <TouchableOpacity
              style={styles.actionItem}
              onPress={handleLeaveChat}
            >
              <View
                style={[
                  styles.actionIcon,
                  styles.dangerIcon,
                  { backgroundColor: colors.errorSoft },
                ]}
              >
                <Ionicons name="exit-outline" size={22} color="#EF4444" />
              </View>
              <View style={styles.actionContent}>
                <Text style={[styles.actionTitle, styles.dangerText]}>
                  Leave Chat
                </Text>
                <Text
                  style={[
                    styles.actionDescription,
                    { color: colors.textMuted },
                  ]}
                >
                  You'll stop receiving messages
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  errorText: {
    fontSize: 16,
    color: "#6B7280",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    letterSpacing: -0.3,
  },
  placeholder: {
    width: 36,
  },
  scrollContent: {
    flex: 1,
  },
  section: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  chatInfoCard: {
    alignItems: "center",
    paddingVertical: 8,
  },
  largeAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  largeAvatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    backgroundColor: "#E5E7EB",
  },
  largeAvatarInitial: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFF",
  },
  chatInfoName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  chatInfoMeta: {
    fontSize: 14,
    color: "#6B7280",
    fontWeight: "500",
  },
  chatInfoTrip: {
    fontSize: 13,
    color: "#E74C3C",
    fontWeight: "600",
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: "#FEF2F2",
    borderRadius: 12,
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  memberAvatarWrapper: {
    position: "relative",
    marginRight: 12,
  },
  memberAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  memberAvatarImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E5E7EB",
  },
  statusIndicatorMember: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  memberInitial: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B7280",
  },
  memberInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },
  adminBadge: {
    backgroundColor: "#E74C3C",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  adminText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    marginBottom: 8,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  dangerIcon: {
    backgroundColor: "#FEF2F2",
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 2,
  },
  dangerText: {
    color: "#EF4444",
  },
  actionDescription: {
    fontSize: 13,
    color: "#6B7280",
  },
});
