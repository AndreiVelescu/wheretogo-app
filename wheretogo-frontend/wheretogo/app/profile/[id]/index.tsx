/**
 * 👤 Public Profile Screen — View another user's profile, follow/unfollow, see their posts
 */

import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import type {
  PostGridItem,
  ProfileStatsData,
  ProfileTab,
} from "@/src/features/user/components";
import {
  EmptyTabContent,
  ProfilePostsGrid,
  ProfileStats,
  ProfileTabBar,
} from "@/src/features/user/components";
import {
  useFollowUser,
  useIsFollowing,
  useUnfollowUser,
  useUserById,
  useUserPosts,
} from "@/src/features/user/user.hooks";
import { CREATE_DIRECT_CHAT } from "@/src/graphql/chat";
import { normalizeRemoteImageUrl } from "@/src/utils/imageUtils";
import { useMutation } from "@apollo/client/react";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const userId = parseInt(id, 10);
  const { user: currentUser } = useAuth();
  const isOwnProfile = String(currentUser?.id) === String(userId);
  const { colors } = useAppTheme();

  // ─── Data hooks ───────────────────────────────────────
  const {
    data: userResponse,
    isLoading: userLoading,
    refetch: refetchUser,
  } = useUserById(userId);
  const profileUser = userResponse?.data;

  const {
    isFollowing,
    isLoading: followLoading,
    refetch: refetchFollowing,
  } = useIsFollowing(userId);

  const {
    posts,
    isLoading: postsLoading,
    refetch: refetchPosts,
  } = useUserPosts(userId);

  const { followUser, isLoading: followMutating } = useFollowUser();
  const { unfollowUser, isLoading: unfollowMutating } = useUnfollowUser();

  const [createDirectChat, { loading: creatingChat }] =
    useMutation(CREATE_DIRECT_CHAT);

  // ─── Local state ──────────────────────────────────────
  const [activeTab, setActiveTab] = useState<ProfileTab>("posts");
  const [refreshing, setRefreshing] = useState(false);
  const [optimisticFollowing, setOptimisticFollowing] = useState<
    boolean | null
  >(null);

  // Stable ref for follow state to avoid stale closures
  const followStateRef = useRef(isFollowing);
  followStateRef.current = optimisticFollowing ?? isFollowing;

  // ─── Derived data ─────────────────────────────────────
  const currentlyFollowing = optimisticFollowing ?? isFollowing;

  const followersCount = profileUser?._count?.followers ?? 0;
  const followingCount = profileUser?._count?.following ?? 0;

  const adjustedFollowers = useMemo(() => {
    if (optimisticFollowing === null) return followersCount;
    if (optimisticFollowing && !isFollowing) return followersCount + 1;
    if (!optimisticFollowing && isFollowing) return followersCount - 1;
    return followersCount;
  }, [optimisticFollowing, isFollowing, followersCount]);

  const stats: ProfileStatsData = useMemo(
    () => ({
      posts: posts.length,
      trips: 0,
      followers: adjustedFollowers,
      following: followingCount,
    }),
    [posts, adjustedFollowers, followingCount],
  );

  const avatarUri = profileUser?.avatar
    ? normalizeRemoteImageUrl(profileUser.avatar)
    : null;

  const initials = (profileUser?.name || "?")
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // ─── Handlers ─────────────────────────────────────────
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setOptimisticFollowing(null);
    await Promise.all([refetchUser(), refetchFollowing(), refetchPosts()]);
    setRefreshing(false);
  }, [refetchUser, refetchFollowing, refetchPosts]);

  const handleFollowToggle = useCallback(async () => {
    if (followMutating || unfollowMutating) return;
    const wasFollowing = followStateRef.current;

    // Optimistic update
    setOptimisticFollowing(!wasFollowing);

    try {
      if (wasFollowing) {
        await unfollowUser(userId);
      } else {
        await followUser(userId);
      }
      // Refetch to sync real data
      refetchFollowing();
      refetchUser();
    } catch (err) {
      // Revert optimistic
      setOptimisticFollowing(wasFollowing);
      console.error("Follow toggle failed:", err);
    }
  }, [
    userId,
    followUser,
    unfollowUser,
    followMutating,
    unfollowMutating,
    refetchFollowing,
    refetchUser,
  ]);

  const handlePostPress = useCallback((postId: number) => {
    router.push(`/post/${postId}` as any);
  }, []);

  const handleStatPress = useCallback(
    (stat: keyof ProfileStatsData) => {
      // TODO: navigate to followers/following list
      console.log("Stat pressed:", stat, "for user:", userId);
    },
    [userId],
  );

  // ─── Loading state ────────────────────────────────────
  if (userLoading && !profileUser) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
        edges={["top"]}
      >
        <View
          style={[
            styles.topBar,
            {
              backgroundColor: colors.background,
              borderBottomColor: colors.border,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Feather name="arrow-left" size={22} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.topBarTitle, { color: colors.text }]}>
            Profile
          </Text>
          <View style={{ width: 36 }} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top"]}
    >
      {/* Top bar */}
      <View
        style={[
          styles.topBar,
          {
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Feather name="arrow-left" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text
          style={[styles.topBarTitle, { color: colors.text }]}
          numberOfLines={1}
        >
          {profileUser?.name || "Profile"}
        </Text>
        <TouchableOpacity
          style={styles.topBarBtn}
          onPress={() => console.log("More options")}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Feather name="more-vertical" size={20} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* ── Profile header (avatar + name + bio) ─── */}
        <View style={styles.headerSection}>
          {/* Avatar */}
          <View style={styles.avatarWrapper}>
            {avatarUri ? (
              <Image
                source={{ uri: avatarUri }}
                style={styles.avatar}
                contentFit="cover"
                transition={200}
              />
            ) : (
              <View
                style={[
                  styles.avatar,
                  styles.avatarPlaceholder,
                  { backgroundColor: colors.border },
                ]}
              >
                <Text
                  style={[styles.avatarInitials, { color: colors.textMuted }]}
                >
                  {initials}
                </Text>
              </View>
            )}
          </View>

          {/* Name */}
          <Text style={[styles.userName, { color: colors.text }]}>
            {profileUser?.name || "User"}
          </Text>

          {/* Bio */}
          {profileUser?.bio ? (
            <Text style={[styles.userBio, { color: colors.textMuted }]}>
              {profileUser.bio}
            </Text>
          ) : null}

          {/* Email hint */}
          <Text style={[styles.userEmail, { color: colors.textSecondary }]}>
            {profileUser?.email || ""}
          </Text>
        </View>

        {/* ── Stats ────────────────────────────────── */}
        <ProfileStats stats={stats} onStatPress={handleStatPress} />

        {/* ── Action Buttons ─────────────────────────── */}
        {!isOwnProfile ? (
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[
                styles.followBtn,
                { backgroundColor: colors.primary },
                currentlyFollowing && {
                  backgroundColor: colors.card,
                  borderWidth: 1.5,
                  borderColor: colors.primary,
                },
              ]}
              onPress={handleFollowToggle}
              disabled={followMutating || unfollowMutating}
              activeOpacity={0.7}
            >
              {followMutating || unfollowMutating ? (
                <ActivityIndicator
                  size="small"
                  color={currentlyFollowing ? "#FF6B6B" : "#fff"}
                />
              ) : (
                <>
                  <Feather
                    name={currentlyFollowing ? "user-check" : "user-plus"}
                    size={16}
                    color={currentlyFollowing ? colors.primary : "#fff"}
                  />
                  <Text
                    style={[
                      styles.followBtnText,
                      currentlyFollowing && { color: colors.primary },
                    ]}
                  >
                    {currentlyFollowing ? "Following" : "Follow"}
                  </Text>
                </>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.messageBtn,
                { backgroundColor: colors.primarySoft },
              ]}
              onPress={async () => {
                try {
                  const { data } = (await createDirectChat({
                    variables: { userId },
                  })) as { data?: { createDirectChat?: { id: number } } };
                  if (data?.createDirectChat?.id) {
                    router.push(`/chat/${data.createDirectChat.id}` as any);
                  }
                } catch (err) {
                  console.error("Failed to create DM:", err);
                }
              }}
              disabled={creatingChat}
              activeOpacity={0.7}
            >
              {creatingChat ? (
                <ActivityIndicator size="small" color="#FF6B6B" />
              ) : (
                <Feather
                  name="message-circle"
                  size={18}
                  color={colors.primary}
                />
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.actionRow}>
            <TouchableOpacity
              style={[styles.primaryBtn, { backgroundColor: colors.primary }]}
              onPress={() => router.push("/edit-profile")}
            >
              <Feather name="edit-2" size={16} color="#fff" />
              <Text style={styles.primaryBtnText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.outlineBtn, { borderColor: colors.primary }]}
            >
              <Feather name="share-2" size={16} color={colors.primary} />
              <Text style={[styles.outlineBtnText, { color: colors.primary }]}>
                Share
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* ── Tabs ─────────────────────────────────── */}
        <ProfileTabBar active={activeTab} onChange={setActiveTab} />

        {/* ── Tab Content ──────────────────────────── */}
        {activeTab === "posts" &&
          (posts.length > 0 ? (
            <ProfilePostsGrid
              posts={posts as PostGridItem[]}
              loading={postsLoading}
              onPostPress={handlePostPress}
            />
          ) : (
            <EmptyTabContent
              icon="camera"
              title="No posts yet"
              description="This user hasn't shared any posts yet"
            />
          ))}

        {activeTab === "trips" && (
          <EmptyTabContent
            icon="map"
            title="No trips"
            description="This user hasn't shared any trips yet"
          />
        )}

        {activeTab === "favorites" && (
          <EmptyTabContent
            icon="bookmark"
            title="No favorites"
            description="This user hasn't shared their favorites yet"
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

// ─────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ── Top bar ─────────────────────────────────── */
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E8E8E8",
    backgroundColor: "#FAFAFA",
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  topBarTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A2E",
  },
  topBarBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  scrollContent: {
    paddingBottom: 40,
  },

  /* ── Profile header ──────────────────────────── */
  headerSection: {
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 4,
  },
  avatarWrapper: {
    marginBottom: 12,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  avatarPlaceholder: {
    backgroundColor: "#E8E8F0",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarInitials: {
    fontSize: 32,
    fontWeight: "700",
    color: "#8A8A9D",
  },
  userName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A1A2E",
    marginBottom: 4,
  },
  userBio: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 4,
    paddingHorizontal: 16,
  },
  userEmail: {
    fontSize: 13,
    color: "#AFAFAF",
    marginBottom: 4,
  },

  /* ── Action row ──────────────────────────────── */
  actionRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 4,
  },
  followBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6B6B",
    paddingVertical: 11,
    borderRadius: 10,
    gap: 8,
  },
  followingBtn: {
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#FF6B6B",
  },
  followBtnText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  followingBtnText: {
    color: "#FF6B6B",
  },
  messageBtn: {
    width: 46,
    height: 46,
    backgroundColor: "#FFE8E8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ── Own profile buttons ─────────────────────── */
  primaryBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#FF6B6B",
    paddingVertical: 11,
    borderRadius: 10,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  outlineBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderWidth: 1.5,
    borderColor: "#FF6B6B",
    paddingVertical: 11,
    borderRadius: 10,
  },
  outlineBtnText: {
    color: "#FF6B6B",
    fontWeight: "600",
    fontSize: 14,
  },
});
