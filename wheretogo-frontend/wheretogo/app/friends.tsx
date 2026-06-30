import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type TabType = "all" | "requests" | "suggestions";

interface Friend {
  id: number;
  name: string;
  username: string;
  avatar: string;
  mutualFriends?: number;
  isOnline?: boolean;
}

const MOCK_FRIENDS: Friend[] = [
  {
    id: 1,
    name: "Ana Popescu",
    username: "@ana_travel",
    avatar: "https://i.pravatar.cc/150?img=1",
    isOnline: true,
  },
  {
    id: 2,
    name: "Ion Marinescu",
    username: "@ion_explorer",
    avatar: "https://i.pravatar.cc/150?img=2",
    isOnline: false,
  },
  {
    id: 3,
    name: "Maria Ionescu",
    username: "@maria_adventures",
    avatar: "https://i.pravatar.cc/150?img=3",
    isOnline: true,
  },
];

const MOCK_REQUESTS: Friend[] = [
  {
    id: 4,
    name: "Alex Dumitrescu",
    username: "@alex_wanderer",
    avatar: "https://i.pravatar.cc/150?img=4",
    mutualFriends: 5,
  },
  {
    id: 5,
    name: "Elena Georgescu",
    username: "@elena_travels",
    avatar: "https://i.pravatar.cc/150?img=5",
    mutualFriends: 3,
  },
];

const MOCK_SUGGESTIONS: Friend[] = [
  {
    id: 6,
    name: "Andrei Popa",
    username: "@andrei_roam",
    avatar: "https://i.pravatar.cc/150?img=6",
    mutualFriends: 12,
  },
  {
    id: 7,
    name: "Cristina Stancu",
    username: "@cris_globe",
    avatar: "https://i.pravatar.cc/150?img=7",
    mutualFriends: 8,
  },
  {
    id: 8,
    name: "Mihai Vasile",
    username: "@mihai_journey",
    avatar: "https://i.pravatar.cc/150?img=8",
    mutualFriends: 4,
  },
];

export default function FriendsScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { colors, isDark } = useAppTheme();

  const renderFriendCard = (friend: Friend, showActions: boolean = false) => (
    <View
      key={friend.id}
      style={[
        styles.friendCard,
        { backgroundColor: colors.card, shadowOpacity: isDark ? 0 : 0.05 },
      ]}
    >
      <View style={styles.friendInfo}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: friend.avatar }} style={styles.avatar} />
          {friend.isOnline && (
            <View style={[styles.onlineBadge, { borderColor: colors.card }]} />
          )}
        </View>
        <View style={styles.friendDetails}>
          <Text style={[styles.friendName, { color: colors.text }]}>
            {friend.name}
          </Text>
          <Text style={[styles.friendUsername, { color: colors.textMuted }]}>
            {friend.username}
          </Text>
          {friend.mutualFriends !== undefined && (
            <Text style={[styles.mutualFriends, { color: colors.textMuted }]}>
              {friend.mutualFriends} mutual friends
            </Text>
          )}
        </View>
      </View>
      {showActions ? (
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.acceptButton}>
            <Feather name="check" size={18} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.rejectButton,
              { backgroundColor: colors.borderLight },
            ]}
          >
            <Feather name="x" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={[
            styles.messageButton,
            { backgroundColor: colors.primarySoft },
          ]}
        >
          <Feather name="message-circle" size={20} color={colors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );

  const renderSuggestionCard = (friend: Friend) => (
    <View
      key={friend.id}
      style={[
        styles.friendCard,
        { backgroundColor: colors.card, shadowOpacity: isDark ? 0 : 0.05 },
      ]}
    >
      <View style={styles.friendInfo}>
        <Image source={{ uri: friend.avatar }} style={styles.avatar} />
        <View style={styles.friendDetails}>
          <Text style={[styles.friendName, { color: colors.text }]}>
            {friend.name}
          </Text>
          <Text style={[styles.friendUsername, { color: colors.textMuted }]}>
            {friend.username}
          </Text>
          {friend.mutualFriends !== undefined && (
            <Text style={[styles.mutualFriends, { color: colors.textMuted }]}>
              {friend.mutualFriends} mutual friends
            </Text>
          )}
        </View>
      </View>
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: colors.primary }]}
      >
        <Feather name="user-plus" size={18} color="#fff" />
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
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
          <Feather name="arrow-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Friends
        </Text>
        <TouchableOpacity style={styles.addFriendButton}>
          <Feather name="user-plus" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Feather name="search" size={20} color={colors.textMuted} />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Search friends..."
          placeholderTextColor={colors.inputPlaceholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            { backgroundColor: colors.card },
            activeTab === "all" && { backgroundColor: colors.primarySoft },
          ]}
          onPress={() => setActiveTab("all")}
        >
          <Text
            style={[
              styles.tabText,
              { color: colors.textMuted },
              activeTab === "all" && { color: colors.primary },
            ]}
          >
            All Friends
          </Text>
          <View
            style={[
              styles.badge,
              { backgroundColor: colors.borderLight },
              activeTab === "all" && { backgroundColor: colors.primary },
            ]}
          >
            <Text
              style={[
                styles.badgeText,
                { color: colors.textMuted },
                activeTab === "all" && styles.badgeTextActive,
              ]}
            >
              {MOCK_FRIENDS.length}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            { backgroundColor: colors.card },
            activeTab === "requests" && { backgroundColor: colors.primarySoft },
          ]}
          onPress={() => setActiveTab("requests")}
        >
          <Text
            style={[
              styles.tabText,
              { color: colors.textMuted },
              activeTab === "requests" && { color: colors.primary },
            ]}
          >
            Requests
          </Text>
          {MOCK_REQUESTS.length > 0 && (
            <View
              style={[
                styles.badge,
                { backgroundColor: colors.borderLight },
                activeTab === "requests" && { backgroundColor: colors.primary },
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  { color: colors.textMuted },
                  activeTab === "requests" && styles.badgeTextActive,
                ]}
              >
                {MOCK_REQUESTS.length}
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            { backgroundColor: colors.card },
            activeTab === "suggestions" && {
              backgroundColor: colors.primarySoft,
            },
          ]}
          onPress={() => setActiveTab("suggestions")}
        >
          <Text
            style={[
              styles.tabText,
              { color: colors.textMuted },
              activeTab === "suggestions" && { color: colors.primary },
            ]}
          >
            Suggestions
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === "all" &&
          MOCK_FRIENDS.map((friend) => renderFriendCard(friend, false))}

        {activeTab === "requests" && MOCK_REQUESTS.length > 0 ? (
          MOCK_REQUESTS.map((friend) => renderFriendCard(friend, true))
        ) : activeTab === "requests" ? (
          <View style={styles.emptyState}>
            <Feather name="users" size={64} color={colors.borderLight} />
            <Text style={[styles.emptyTitle, { color: colors.text }]}>
              No friend requests
            </Text>
            <Text style={[styles.emptySubtitle, { color: colors.textMuted }]}>
              You're all caught up! Check suggestions to find new travel
              buddies.
            </Text>
          </View>
        ) : null}

        {activeTab === "suggestions" &&
          MOCK_SUGGESTIONS.map((friend) => renderSuggestionCard(friend))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2C3E50",
  },
  addFriendButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#2C3E50",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 16,
    gap: 8,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
    gap: 6,
  },
  tabActive: {
    backgroundColor: "#FFE8E8",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#95A5A6",
  },
  tabTextActive: {
    color: "#FF6B6B",
  },
  badge: {
    backgroundColor: "#E0E0E0",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 20,
    alignItems: "center",
  },
  badgeActive: {
    backgroundColor: "#FF6B6B",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#95A5A6",
  },
  badgeTextActive: {
    color: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  friendCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  friendInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  onlineBadge: {
    position: "absolute",
    right: 14,
    bottom: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#4ECDC4",
    borderWidth: 2,
    borderColor: "#fff",
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 2,
  },
  friendUsername: {
    fontSize: 14,
    color: "#95A5A6",
    marginBottom: 2,
  },
  mutualFriends: {
    fontSize: 12,
    color: "#95A5A6",
  },
  messageButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFE8E8",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 8,
  },
  acceptButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#4ECDC4",
    justifyContent: "center",
    alignItems: "center",
  },
  rejectButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#FF6B6B",
    borderRadius: 20,
    gap: 6,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2C3E50",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#95A5A6",
    textAlign: "center",
    lineHeight: 20,
  },
});
