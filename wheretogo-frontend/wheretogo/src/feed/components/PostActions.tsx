import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PostActionsProps {
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLikedByMe: boolean;
  isSavedByMe: boolean;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  onSave: () => void;
}

export const PostActions = React.memo(function PostActions({
  likesCount,
  commentsCount,
  sharesCount,
  isLikedByMe,
  isSavedByMe,
  onLike,
  onComment,
  onShare,
  onSave,
}: PostActionsProps) {
  const { colors } = useAppTheme();
  return (
    <View style={styles.container}>
      <View style={styles.leftActions}>
        {/* Like */}
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={onLike}
          activeOpacity={0.6}
        >
          <Ionicons
            name={isLikedByMe ? "heart" : "heart-outline"}
            size={24}
            color={isLikedByMe ? colors.primary : colors.textSecondary}
          />
          {likesCount > 0 && (
            <Text
              style={[
                styles.count,
                { color: colors.textSecondary },
                isLikedByMe && { color: colors.primary },
              ]}
            >
              {formatCount(likesCount)}
            </Text>
          )}
        </TouchableOpacity>

        {/* Comment */}
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={onComment}
          activeOpacity={0.6}
        >
          <Ionicons
            name="chatbubble-outline"
            size={22}
            color={colors.textSecondary}
          />
          {commentsCount > 0 && (
            <Text style={[styles.count, { color: colors.textSecondary }]}>
              {formatCount(commentsCount)}
            </Text>
          )}
        </TouchableOpacity>

        {/* Share */}
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={onShare}
          activeOpacity={0.6}
        >
          <Ionicons
            name="paper-plane-outline"
            size={22}
            color={colors.textSecondary}
          />
          {sharesCount > 0 && (
            <Text style={[styles.count, { color: colors.textSecondary }]}>
              {formatCount(sharesCount)}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Save */}
      <TouchableOpacity onPress={onSave} activeOpacity={0.6}>
        <Ionicons
          name={isSavedByMe ? "bookmark" : "bookmark-outline"}
          size={24}
          color={isSavedByMe ? colors.primary : colors.textSecondary}
        />
      </TouchableOpacity>
    </View>
  );
});

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 4,
  },
  leftActions: {
    flexDirection: "row",
    gap: 18,
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  count: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
  },
  countActive: {
    color: "#FF4757",
  },
});
