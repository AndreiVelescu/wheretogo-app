import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatTimeAgo, User } from "./types";

interface UserChatItemProps {
  user: User;
  onPress: () => void;
}

export default function UserChatItem({ user, onPress }: UserChatItemProps) {
  const { colors } = useAppTheme();
  return (
    <TouchableOpacity
      style={[styles.chatItem, { borderBottomColor: colors.separator }]}
      onPress={onPress}
    >
      <View style={styles.avatarContainer}>
        <View
          style={[
            styles.avatar,
            { backgroundColor: user.isOnline ? "#4CAF50" : colors.textMuted },
          ]}
        >
          <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
        </View>
        {user.isOnline && (
          <View
            style={[styles.onlineIndicator, { borderColor: colors.card }]}
          />
        )}
      </View>
      <View style={styles.chatInfo}>
        <Text style={[styles.chatName, { color: colors.text }]}>
          {user.name}
        </Text>
        <Text style={[styles.chatStatus, { color: colors.textSecondary }]}>
          {user.isOnline
            ? "Online"
            : user.lastSeen
            ? `Văzut ${formatTimeAgo(user.lastSeen)}`
            : "Offline"}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.borderLight} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  avatarContainer: {
    position: "relative",
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  chatStatus: {
    fontSize: 14,
    color: "#666",
  },
});
