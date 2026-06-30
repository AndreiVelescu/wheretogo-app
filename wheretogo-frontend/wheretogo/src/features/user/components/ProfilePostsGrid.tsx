/**
 * 📷 Profile Posts Grid — Instagram-style 3-column, edge-to-edge, no borderRadius
 */

import { useAppTheme } from "@/src/contexts/ThemeContext";
import {
  getFullImageUrl,
  isRelativePath,
  isValidImageUrl,
  normalizeRemoteImageUrl,
} from "@/src/utils/imageUtils";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useCallback } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const GAP = 1;
const COLUMNS = 3;
const TILE_SIZE = (SCREEN_WIDTH - GAP * (COLUMNS - 1)) / COLUMNS;

export interface PostGridItem {
  id: number;
  title?: string;
  description?: string;
  media?: { id: number; url: string; thumbnail?: string; type: string }[];
  likesCount?: number;
  commentsCount?: number;
  publishedAt?: string;
}

interface ProfilePostsGridProps {
  posts: PostGridItem[];
  loading?: boolean;
  onPostPress?: (postId: number) => void;
}

const resolveAssetUri = (value?: string | null) => {
  if (!value) {
    return null;
  }

  if (isValidImageUrl(value)) {
    return normalizeRemoteImageUrl(value);
  }

  if (isRelativePath(value)) {
    return getFullImageUrl(value);
  }

  return value;
};

function VideoPreviewTile({ uri }: { uri: string }) {
  const player = useVideoPlayer(uri, (videoPlayer) => {
    videoPlayer.loop = false;
    videoPlayer.muted = true;
    videoPlayer.pause();
  });

  return (
    <VideoView
      player={player}
      style={styles.image}
      contentFit="cover"
      nativeControls={false}
      allowsFullscreen={false}
      allowsPictureInPicture={false}
    />
  );
}

export function ProfilePostsGrid({
  posts,
  loading,
  onPostPress,
}: ProfilePostsGridProps) {
  const { colors } = useAppTheme();
  const handlePress = useCallback(
    (postId: number) => {
      onPostPress?.(postId);
    },
    [onPostPress],
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.grid}>
      {posts.map((post) => {
        const firstMedia = post.media?.[0];
        const isVideo = firstMedia?.type === "VIDEO";
        const previewUri = resolveAssetUri(
          isVideo
            ? firstMedia?.thumbnail
            : firstMedia?.thumbnail || firstMedia?.url,
        );
        const videoUri = isVideo ? resolveAssetUri(firstMedia?.url) : null;
        const hasMultiple = (post.media?.length || 0) > 1;

        return (
          <TouchableOpacity
            key={post.id}
            style={[styles.tile, { backgroundColor: colors.inputBackground }]}
            activeOpacity={0.85}
            onPress={() => handlePress(post.id)}
          >
            {previewUri ? (
              <Image
                source={{ uri: previewUri }}
                style={styles.image}
                contentFit="cover"
                transition={150}
              />
            ) : isVideo && videoUri ? (
              <VideoPreviewTile uri={videoUri} />
            ) : (
              <View
                style={[
                  styles.noImage,
                  { backgroundColor: colors.backgroundSecondary },
                ]}
              >
                <Ionicons
                  name={isVideo ? "videocam-outline" : "document-text-outline"}
                  size={28}
                  color={colors.borderLight}
                />
              </View>
            )}

            {isVideo && (
              <View style={styles.playBadge}>
                <Ionicons name="play" size={14} color="#fff" />
              </View>
            )}

            {/* Multi-image badge */}
            {hasMultiple && (
              <View style={styles.multiBadge}>
                <Ionicons name="copy-outline" size={12} color="#fff" />
              </View>
            )}

            {/* Draft badge */}
            {!post.publishedAt && (
              <View style={styles.draftBadge}>
                <Text style={styles.draftText}>Draft</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GAP,
  },
  loadingContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },
  tile: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    backgroundColor: "#F0F0F5",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  noImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
  },
  multiBadge: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 3,
    padding: 3,
  },
  playBadge: {
    position: "absolute",
    bottom: 6,
    right: 6,
    backgroundColor: "rgba(0,0,0,0.55)",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  draftBadge: {
    position: "absolute",
    top: 6,
    left: 6,
    backgroundColor: "#FFA726",
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  draftText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "700",
  },
});
