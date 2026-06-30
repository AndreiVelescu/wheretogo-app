import { Ionicons } from "@expo/vector-icons";

import { useAppTheme } from "@/src/contexts/ThemeContext";
import { normalizeRemoteImageUrl } from "@/src/utils/imageUtils";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { LocationMinimal, UserMinimal } from "../feed.types";

interface PostHeaderProps {
  author: UserMinimal;
  location?: LocationMinimal | null;
  createdAt: string;
  onMenuPress?: () => void;
}

export const PostHeader = React.memo(function PostHeader({
  author,
  location,
  createdAt,
  onMenuPress,
}: PostHeaderProps) {
  const { colors } = useAppTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableOpacity
        style={styles.authorRow}
        activeOpacity={0.7}
        onPress={() => router.push(`/profile/${author.id}` as any)}
      >
        <Image
          source={{
            uri: normalizeRemoteImageUrl(
              author.avatar || "https://via.placeholder.com/40",
            ),
          }}
          style={[styles.avatar, { backgroundColor: colors.borderLight }]}
          contentFit="cover"
        />
        <View style={styles.authorInfo}>
          <Text style={[styles.authorName, { color: colors.text }]}>
            {author.name}
          </Text>
          {location && (
            <View style={styles.locationRow}>
              <Ionicons
                name="location-sharp"
                size={11}
                color={colors.primary}
              />
              <Text
                style={[styles.locationText, { color: colors.textMuted }]}
                numberOfLines={1}
              >
                {location.name}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.rightSection}>
        <Text style={[styles.timeAgo, { color: colors.textMuted }]}>
          {formatRelativeTime(createdAt)}
        </Text>
        {onMenuPress && (
          <TouchableOpacity
            onPress={onMenuPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name="ellipsis-horizontal"
              size={20}
              color={colors.textMuted}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

function formatRelativeTime(date: string): string {
  const now = new Date();
  const postDate = new Date(date);
  const diffMs = now.getTime() - postDate.getTime();
  const diffMins = Math.floor(diffMs / 60_000);
  if (diffMins < 1) return "now";
  if (diffMins < 60) return `${diffMins}m`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w`;
  return postDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E5E7EB",
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontWeight: "700",
    fontSize: 14,
    color: "#1A1A2E",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginTop: 1,
  },
  locationText: {
    fontSize: 12,
    color: "#8A8A9D",
    maxWidth: 180,
  },
  rightSection: {
    alignItems: "flex-end",
    gap: 4,
  },
  timeAgo: {
    fontSize: 12,
    color: "#8A8A9D",
  },
});
