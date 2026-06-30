import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { Post } from "../feed.types";
import { SharePlatform } from "../feed.types";
import { MediaCarousel } from "./MediaCarousel";
import { PostActions } from "./PostActions";
import { PostHeader } from "./PostHeader";

interface PostCardProps {
  post: Post;
  onLikeToggle: (postId: number, isLiked: boolean) => void;
  onSaveToggle: (postId: number, isSaved: boolean) => void;
  onShare?: (postId: number, platform: SharePlatform) => void;
  onComment?: (postId: number) => void;
  isVisibleInFeed?: boolean;
}

export function PostCard({
  post,
  onLikeToggle,
  onSaveToggle,
  onShare,
  onComment,
  isVisibleInFeed = false,
}: PostCardProps) {
  const { colors } = useAppTheme();
  const handleShare = async () => {
    try {
      onShare?.(post.id, SharePlatform.LINK);
      await Share.share({
        message: post.title || "Check out this post on WhereToGo!",
        url: `https://wheretogo.app/post/${post.id}`,
      });
    } catch (e: any) {
      if (e?.message !== "User did not share") {
        console.error("Share failed:", e);
      }
    }
  };

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.background,
          borderBottomColor: colors.separator,
        },
      ]}
    >
      {/* Header */}
      <PostHeader
        author={post.author}
        location={post.location}
        createdAt={post.createdAt}
      />

      {/* Text content */}
      {post.title && (
        <Text style={[styles.title, { color: colors.text }]}>{post.title}</Text>
      )}
      {post.description && (
        <Text
          style={[styles.description, { color: colors.textSecondary }]}
          numberOfLines={3}
        >
          {post.description}
        </Text>
      )}

      {/* Media */}
      {post.media?.length > 0 && (
        <MediaCarousel media={post.media} isVisibleInFeed={isVisibleInFeed} />
      )}

      {/* Tags */}
      {post.tags?.length > 0 && (
        <View style={styles.tagsRow}>
          {post.tags.slice(0, 4).map((tag, i) => (
            <View
              key={i}
              style={[styles.tag, { backgroundColor: colors.primarySoft }]}
            >
              <Text style={[styles.tagText, { color: colors.primary }]}>
                #{tag}
              </Text>
            </View>
          ))}
          {post.tags.length > 4 && (
            <Text style={[styles.moreTags, { color: colors.textMuted }]}>
              +{post.tags.length - 4}
            </Text>
          )}
        </View>
      )}

      {/* Actions */}
      <PostActions
        likesCount={post.likesCount}
        commentsCount={post.commentsCount}
        sharesCount={post.sharesCount}
        isLikedByMe={post.isLikedByMe}
        isSavedByMe={post.isSavedByMe}
        onLike={() => onLikeToggle(post.id, post.isLikedByMe)}
        onComment={() =>
          onComment
            ? onComment(post.id)
            : router.push(`/post/${post.id}` as any)
        }
        onShare={handleShare}
        onSave={() => onSaveToggle(post.id, post.isSavedByMe)}
      />

      {/* Trip link */}
      {post.trip && (
        <TouchableOpacity
          style={[styles.tripLink, { backgroundColor: colors.primarySoft }]}
          activeOpacity={0.7}
          onPress={() =>
            router.push(`/trip/itinerary?tripId=${post.trip!.id}` as any)
          }
        >
          <Ionicons name="map-outline" size={14} color={colors.primary} />
          <Text
            style={[styles.tripText, { color: colors.primary }]}
            numberOfLines={1}
          >
            Part of trip: {post.trip.title}
          </Text>
          <Ionicons name="chevron-forward" size={14} color={colors.primary} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 8,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A2E",
    paddingHorizontal: 14,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
    paddingHorizontal: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  tag: {
    backgroundColor: "#FFF0F0",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  tagText: {
    fontSize: 12,
    color: "#FF6B6B",
    fontWeight: "500",
  },
  moreTags: {
    fontSize: 12,
    color: "#999",
    alignSelf: "center",
  },
  tripLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginHorizontal: 14,
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#FFF5F5",
    borderRadius: 8,
  },
  tripText: {
    flex: 1,
    fontSize: 13,
    color: "#FF6B6B",
    fontWeight: "500",
  },
});
