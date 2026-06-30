import { useAppTheme } from "@/src/contexts/ThemeContext";
import { CHAT_MESSAGES } from "@/src/graphql/chat";
import { useMyChats } from "@/src/hooks/useChat";
import { normalizeRemoteImageUrl } from "@/src/utils/imageUtils";
import { FlashList } from "@shopify/flash-list";
import { useApolloClient } from "@apollo/client/react";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserStatusIndicator from "./UserStatusIndicator";
import {
  ChatRoom,
  getChatDisplayName,
  getChatIcon,
  getUnreadCount,
} from "./types";

interface ChatSelectionProps {
  activeTab: "trips" | "direct";
  onTabChange: (tab: "trips" | "direct") => void;
  onChatSelect: (chatRoom: ChatRoom) => void;
  isAuthenticated: boolean;
  currentUserId: number;
}

function formatTimeAgo(dateString: string) {
  const date = new Date(dateString);
  const diff = Date.now() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (days > 0) return `${days}z`;
  if (hours > 0) return `${hours}h`;
  if (minutes > 0) return `${minutes}min`;
  return "acum";
}

export default function ChatSelection({
  activeTab,
  onTabChange,
  onChatSelect,
  isAuthenticated,
  currentUserId,
}: ChatSelectionProps) {
  const client = useApolloClient();
  const { colors, isDark } = useAppTheme();
  const { tripChats, directChats, loading, error, refetch } = useMyChats();

  useFocusEffect(
    React.useCallback(() => {
      if (isAuthenticated) {
        refetch();
      }
    }, [isAuthenticated, refetch]),
  );

  if (!isAuthenticated) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <View style={styles.notAuthenticatedContainer}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={64}
            color={colors.textMuted}
          />
          <Text style={[styles.notAuthenticatedTitle, { color: colors.text }]}>
            Chat indisponibil
          </Text>
          <Text
            style={[
              styles.notAuthenticatedText,
              { color: colors.textSecondary },
            ]}
          >
            Conectează-te pentru a vorbi cu alți călători și colaboratori din
            trip-uri.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const prefetchChatMessages = (roomId: number) => {
    client
      .query({
        query: CHAT_MESSAGES,
        variables: { roomId, limit: 50 },
        fetchPolicy: "network-only",
      })
      .catch(() => {
        // Prefetch is best-effort only.
      });
  };

  const activeChats = activeTab === "trips" ? tripChats : directChats;

  const renderChatItem = ({ item }: { item: ChatRoom }) => {
    const displayName = getChatDisplayName(item, currentUserId);
    const icon = getChatIcon(item);
    const unreadCount = getUnreadCount(item, currentUserId);
    const lastMessage =
      item.messages
        ?.slice()
        .sort(
          (left, right) =>
            new Date(right.createdAt).getTime() -
            new Date(left.createdAt).getTime(),
        )[0] || null;

    const otherUser =
      item.type === "DIRECT"
        ? item.participants.find(
            (participant) => participant.user.id !== currentUserId,
          )?.user
        : null;
    const otherUserId = otherUser?.id ?? null;
    const resolvedOtherUserAvatar = otherUser?.avatar
      ? normalizeRemoteImageUrl(otherUser.avatar)
      : null;
    const previewPrefix =
      lastMessage?.type === "SYSTEM"
        ? "Actualizare"
        : lastMessage
          ? `${lastMessage.sender.name}:`
          : null;

    return (
      <TouchableOpacity
        style={[
          styles.chatItem,
          {
            backgroundColor:
              unreadCount > 0 ? colors.cardElevated : colors.card,
            borderColor: unreadCount > 0 ? colors.primarySoft : colors.border,
            shadowColor: colors.shadow,
          },
        ]}
        activeOpacity={0.85}
        onPressIn={() => prefetchChatMessages(item.id)}
        onPress={() => onChatSelect(item)}
      >
        <View style={styles.avatarContainer}>
          {resolvedOtherUserAvatar ? (
            <Image
              source={{ uri: resolvedOtherUserAvatar }}
              style={styles.avatarImage}
              contentFit="cover"
              transition={180}
            />
          ) : (
            <View
              style={[
                styles.avatar,
                {
                  backgroundColor:
                    item.type === "TRIP"
                      ? colors.primary
                      : isDark
                        ? colors.cardElevated
                        : "#DCFCE7",
                },
              ]}
            >
              {otherUser ? (
                <Text style={styles.avatarInitialText}>
                  {otherUser.name?.charAt(0)?.toUpperCase() || "?"}
                </Text>
              ) : (
                <Ionicons
                  name={icon}
                  size={20}
                  color={item.type === "TRIP" ? "#fff" : colors.primary}
                />
              )}
            </View>
          )}

          {otherUserId && (
            <View style={styles.statusIndicatorPosition}>
              <UserStatusIndicator userId={otherUserId} size="small" />
            </View>
          )}

          {unreadCount > 0 && (
            <View
              style={[styles.unreadBadge, { backgroundColor: colors.primary }]}
            >
              <Text style={styles.unreadText}>
                {unreadCount > 99 ? "99+" : unreadCount}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.chatInfo}>
          <View style={styles.titleRow}>
            <Text
              style={[
                styles.chatName,
                {
                  color: colors.text,
                  fontWeight: unreadCount > 0 ? "700" : "600",
                },
              ]}
              numberOfLines={1}
            >
              {displayName}
            </Text>
            {item.lastMessageAt && (
              <Text style={[styles.messageTime, { color: colors.textMuted }]}>
                {formatTimeAgo(item.lastMessageAt)}
              </Text>
            )}
          </View>

          <View style={styles.metaRow}>
            {item.type === "TRIP" && item.trip ? (
              <View
                style={[
                  styles.metaPill,
                  { backgroundColor: colors.primarySoft },
                ]}
              >
                <Ionicons name="airplane" size={12} color={colors.primary} />
                <Text
                  style={[styles.metaPillText, { color: colors.primary }]}
                  numberOfLines={1}
                >
                  {item.trip.title}
                </Text>
              </View>
            ) : otherUserId ? (
              <View style={styles.directMeta}>
                <UserStatusIndicator
                  userId={otherUserId}
                  size="small"
                  showOffline
                />
                <Text
                  style={[styles.directMetaText, { color: colors.textMuted }]}
                >
                  Conversație directă
                </Text>
              </View>
            ) : null}
          </View>

          <Text
            style={[
              styles.lastMessage,
              {
                color: unreadCount > 0 ? colors.text : colors.textSecondary,
                fontWeight: unreadCount > 0 ? "600" : "400",
              },
            ]}
            numberOfLines={2}
          >
            {lastMessage
              ? `${previewPrefix ? `${previewPrefix} ` : ""}${lastMessage.content}`
              : "Niciun mesaj încă"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (error) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <View style={styles.errorContainer}>
          <Ionicons
            name="alert-circle-outline"
            size={64}
            color={colors.accent}
          />
          <Text style={[styles.errorTitle, { color: colors.text }]}>
            Eroare la încărcarea chat-urilor
          </Text>
          <TouchableOpacity
            style={[styles.retryButton, { backgroundColor: colors.primary }]}
            onPress={() => refetch()}
          >
            <Text style={styles.retryText}>Încearcă din nou</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[styles.tabContainer, { backgroundColor: colors.background }]}
      >
        <TouchableOpacity
          style={[
            styles.tab,
            { borderColor: colors.border },
            activeTab === "direct" && {
              backgroundColor: colors.primary,
              borderColor: colors.primary,
            },
          ]}
          onPress={() => onTabChange("direct")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  activeTab === "direct" ? "#FFFFFF" : colors.textSecondary,
              },
            ]}
          >
            Private ({directChats.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            { borderColor: colors.border },
            activeTab === "trips" && {
              backgroundColor: colors.primary,
              borderColor: colors.primary,
            },
          ]}
          onPress={() => onTabChange("trips")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: activeTab === "trips" ? "#FFFFFF" : colors.textSecondary,
              },
            ]}
          >
            Trip-uri ({tripChats.length})
          </Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={[styles.loadingText, { color: colors.textSecondary }]}>
            Se încarcă conversațiile...
          </Text>
        </View>
      ) : (
        <FlashList
          data={activeChats}
          renderItem={renderChatItem}
          keyExtractor={(item) => `chat-${item.id}`}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshing={loading}
          onRefresh={() => refetch()}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons
                name={
                  activeTab === "trips"
                    ? "airplane-outline"
                    : "chatbubble-ellipses-outline"
                }
                size={64}
                color={colors.textMuted}
              />
              <Text style={[styles.emptyTitle, { color: colors.text }]}>
                {activeTab === "trips"
                  ? "Niciun chat de trip"
                  : "Nicio conversație privată"}
              </Text>
              <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                {activeTab === "trips"
                  ? "Conversațiile de grup apar automat când colaborezi pe trip-uri."
                  : "Când începi să vorbești cu alți utilizatori, conversațiile vor apărea aici."}
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 12,
  },
  tab: {
    flex: 1,
    minHeight: 42,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "700",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 22,
    borderWidth: 1,
    padding: 14,
    marginBottom: 12,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 2,
  },
  avatarContainer: {
    position: "relative",
    marginRight: 12,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: "#E5E7EB",
  },
  avatarInitialText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  statusIndicatorPosition: {
    position: "absolute",
    right: 2,
    bottom: 2,
  },
  unreadBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  unreadText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
  chatInfo: {
    flex: 1,
    minHeight: 54,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  chatName: {
    flex: 1,
    fontSize: 16,
    letterSpacing: -0.3,
  },
  messageTime: {
    fontSize: 12,
    fontWeight: "600",
  },
  metaRow: {
    minHeight: 24,
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 4,
  },
  metaPill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  metaPillText: {
    fontSize: 12,
    fontWeight: "700",
    maxWidth: 180,
  },
  directMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  directMetaText: {
    fontSize: 12,
    fontWeight: "500",
  },
  lastMessage: {
    fontSize: 13,
    lineHeight: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 15,
    fontWeight: "500",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
    paddingHorizontal: 28,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 14,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 14,
    marginBottom: 14,
    textAlign: "center",
  },
  retryButton: {
    minHeight: 44,
    borderRadius: 12,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  retryText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  notAuthenticatedContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
  },
  notAuthenticatedTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 8,
  },
  notAuthenticatedText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
});
