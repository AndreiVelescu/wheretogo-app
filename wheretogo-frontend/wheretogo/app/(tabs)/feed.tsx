import { useAppTheme } from "@/src/contexts/ThemeContext";
import { PostCard } from "@/src/feed/components";
import type { Post } from "@/src/feed/feed.types";
import { SharePlatform } from "@/src/feed/feed.types";
import {
  useLikePost,
  useMyFeed,
  useSavePost,
  useSharePost,
} from "@/src/feed/hooks";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FeedPage() {
  const { posts, loading, error, refetch, hasMore, loadMore } = useMyFeed(10);
  const { toggleLike } = useLikePost();
  const { toggleSave } = useSavePost();
  const { sharePost } = useSharePost();
  const { colors } = useAppTheme();
  const [visiblePostId, setVisiblePostId] = useState<number | null>(null);

  const feedViewabilityConfig = useRef({
    itemVisiblePercentThreshold: 70,
    minimumViewTime: 150,
  }).current;

  const onFeedViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const firstVisiblePost = viewableItems.find(
        (viewableItem) =>
          viewableItem.isViewable && typeof viewableItem.item?.id === "number",
      );

      setVisiblePostId(firstVisiblePost?.item?.id ?? null);
    },
  ).current;

  useEffect(() => {
    if (posts.length > 0 && visiblePostId == null) {
      setVisiblePostId(posts[0].id);
    }
  }, [posts, visiblePostId]);

  // ─── Handlers ──────────────────────────────────────
  const handleLike = useCallback(
    async (postId: number, isLiked: boolean) => {
      try {
        await toggleLike(postId, isLiked);
      } catch (e) {
        console.error("Like failed:", e);
      }
    },
    [toggleLike],
  );

  const handleSave = useCallback(
    async (postId: number, isSaved: boolean) => {
      try {
        await toggleSave(postId, isSaved);
      } catch (e) {
        console.error("Save failed:", e);
      }
    },
    [toggleSave],
  );

  const handleShare = useCallback(
    async (postId: number, platform: SharePlatform) => {
      try {
        await sharePost(postId, platform);
      } catch (e) {
        console.error("Share failed:", e);
      }
    },
    [sharePost],
  );

  const handleComment = useCallback((postId: number) => {
    router.push(`/post/${postId}` as any);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) loadMore();
  }, [loading, hasMore, loadMore]);

  const renderItem = useCallback(
    ({ item }: { item: Post }) => (
      <PostCard
        post={item}
        onLikeToggle={handleLike}
        onSaveToggle={handleSave}
        onShare={handleShare}
        onComment={handleComment}
        isVisibleInFeed={visiblePostId === item.id}
      />
    ),
    [handleComment, handleLike, handleSave, handleShare, visiblePostId],
  );

  const keyExtractor = useCallback((item: Post) => item.id.toString(), []);

  // ─── Loading state ─────────────────────────────────
  if (loading && posts.length === 0) {
    return (
      <SafeAreaView edges={[]} style={styles.container}>
        {/* <FeedHeader /> */}
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#FF6B6B" />
          <Text style={styles.loadingText}>Loading your feed...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // ─── Error state ───────────────────────────────────
  if (error && posts.length === 0) {
    return (
      <SafeAreaView edges={[]} style={styles.container}>
        {/* <FeedHeader /> */}
        <View style={styles.center}>
          <Ionicons name="cloud-offline-outline" size={56} color="#DDD" />
          <Text style={styles.errorTitle}>Something went wrong</Text>
          <Text style={styles.errorSubtext}>
            We couldn't load your feed. Check your connection.
          </Text>
          <TouchableOpacity style={styles.retryBtn} onPress={() => refetch()}>
            <Ionicons name="refresh" size={16} color="#fff" />
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ─── Main content ──────────────────────────────────
  return (
    <SafeAreaView edges={[]} style={styles.container}>
      {/* <FeedHeader /> */}

      <FlatList
        data={posts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onViewableItemsChanged={onFeedViewableItemsChanged}
        viewabilityConfig={feedViewabilityConfig}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={refetch}
            tintColor="#FF6B6B"
          />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading && posts.length > 0 ? (
            <View style={styles.footer}>
              <ActivityIndicator size="small" color="#FF6B6B" />
            </View>
          ) : null
        }
        ListEmptyComponent={<EmptyFeed />}
        removeClippedSubviews
        maxToRenderPerBatch={5}
        windowSize={7}
        initialNumToRender={3}
      />

      {/* Floating Create Button */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.85}
        onPress={() => router.push("/create-post")}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// ─── Header ───────────────────────────────────────────
// function FeedHeader() {
//   return (
//     <View style={styles.header}>
//       <Text style={styles.headerTitle}>Feed</Text>
//       <View style={styles.headerActions}>
//         <TouchableOpacity
//           onPress={() => router.push("/my-posts")}
//           hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
//         >
//           <Ionicons name="grid-outline" size={22} color="#555" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// ─── Empty State ──────────────────────────────────────
function EmptyFeed() {
  const { colors } = useAppTheme();
  return (
    <View style={styles.emptyContainer}>
      <View
        style={[
          styles.emptyIconCircle,
          { backgroundColor: colors.primarySoft },
        ]}
      >
        <Ionicons name="compass-outline" size={44} color={colors.primary} />
      </View>
      <Text style={[styles.emptyTitle, { color: colors.text }]}>
        Your feed is empty
      </Text>
      <Text style={[styles.emptyDesc, { color: colors.textMuted }]}>
        Follow travelers or create your first post to get started!
      </Text>
      <TouchableOpacity
        style={[styles.emptyBtn, { backgroundColor: colors.primary }]}
        onPress={() => router.push("/create-post")}
      >
        <Ionicons name="add-circle-outline" size={18} color="#fff" />
        <Text style={styles.emptyBtnText}>Create Post</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1 },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  headerTitle: { fontSize: 22, fontWeight: "800", color: "#1A1A2E" },
  headerActions: { flexDirection: "row", alignItems: "center", gap: 16 },

  // Center states
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    gap: 8,
  },
  loadingText: { fontSize: 14, color: "#999", marginTop: 8 },
  errorTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2C3E50",
    marginTop: 12,
  },
  errorSubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    lineHeight: 20,
  },
  retryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 12,
  },
  retryText: { color: "#fff", fontWeight: "600", fontSize: 14 },

  // Footer
  footer: { paddingVertical: 24, alignItems: "center" },

  // Empty
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyIconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFF0F0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A2E",
    marginBottom: 6,
  },
  emptyDesc: {
    fontSize: 14,
    color: "#8A8A9D",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  emptyBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  emptyBtnText: { color: "#fff", fontWeight: "700", fontSize: 14 },

  // FAB
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FF6B6B",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
  },
});
