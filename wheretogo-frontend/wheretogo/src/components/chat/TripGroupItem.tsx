import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatTimeAgo, TripGroup } from "./types";

interface TripGroupItemProps {
  tripGroup: TripGroup;
  onPress: () => void;
}

export default function TripGroupItem({
  tripGroup,
  onPress,
}: TripGroupItemProps) {
  const { colors } = useAppTheme();
  return (
    <TouchableOpacity
      style={[styles.chatItem, { borderBottomColor: colors.separator }]}
      onPress={onPress}
    >
      <View style={styles.avatarContainer}>
        <View style={[styles.avatar, { backgroundColor: "#FF6B00" }]}>
          <Ionicons name="airplane" size={20} color="#fff" />
        </View>
      </View>
      <View style={styles.chatInfo}>
        <Text style={[styles.chatName, { color: colors.text }]}>
          {tripGroup.name}
        </Text>
        <Text style={styles.tripDestination}>{tripGroup.destination}</Text>
        {tripGroup.lastMessage && (
          <Text
            style={[styles.lastMessage, { color: colors.textSecondary }]}
            numberOfLines={1}
          >
            {tripGroup.lastMessage}
          </Text>
        )}
      </View>
      <View style={styles.chatMeta}>
        <Text style={[styles.memberCount, { color: colors.textMuted }]}>
          {tripGroup.members.length} membri
        </Text>
        {tripGroup.lastMessageTime && (
          <Text style={[styles.messageTime, { color: colors.textMuted }]}>
            {formatTimeAgo(tripGroup.lastMessageTime)}
          </Text>
        )}
      </View>
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
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  tripDestination: {
    fontSize: 14,
    color: "#FF6B00",
    fontWeight: "500",
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
  },
  chatMeta: {
    alignItems: "flex-end",
  },
  memberCount: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  messageTime: {
    fontSize: 12,
    color: "#999",
  },
});
