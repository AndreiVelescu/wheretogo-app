import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import type {
  ProfileStatsData,
  ProfileTab,
} from "@/src/features/user/components";
import {
  EmptyTabContent,
  ProfileHeader,
  ProfilePostsGrid,
  ProfileStats,
  ProfileTabBar,
  ProfileTripsGrid,
} from "@/src/features/user/components";
import { useUserById } from "@/src/features/user/user.hooks";
import { useMyPosts } from "@/src/feed/hooks/useGetMyPosts";
import { useSavedPosts } from "@/src/feed/hooks/useSavedPosts";
import TripManagementModal, {
  TripStatusValue,
} from "@/src/components/trip/TripManagementModal";
import type { TripItem } from "@/src/features/user/components/ProfileTripsGrid";
import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import {
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MY_TRIPS_QUERY = gql`
  query Trips {
    trips {
      id
      createdAt
      ownerId
      owner {
        id
        name
      }
      title
      description
      status
      startDate
      endDate
      city
      country
      isPublic
      totalBudget
      currency
      days {
        id
      }
    }
  }
`;

const UPDATE_TRIP_MUTATION = gql`
  mutation UpdateOneTrip(
    $where: TripWhereUniqueInput!
    $data: TripUpdateInput!
  ) {
    updateOneTrip(where: $where, data: $data) {
      id
      title
      description
      city
      country
      startDate
      endDate
      isPublic
      totalBudget
      currency
      status
    }
  }
`;

const CHANGE_TRIP_STATUS_MUTATION = gql`
  mutation ChangeTripStatus($tripId: Int!, $status: TripStatus!) {
    updateOneTrip(where: { id: $tripId }, data: { status: { set: $status } }) {
      id
      status
    }
  }
`;

const DELETE_TRIP_MUTATION = gql`
  mutation DeleteTrip($tripId: Int!) {
    deleteOneTrip(where: { id: $tripId }) {
      id
    }
  }
`;

function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

export default function ProfileScreen() {
  const { user } = useAuth();
  const { colors } = useAppTheme();
  const [activeTab, setActiveTab] = useState<ProfileTab>("posts");
  const [refreshing, setRefreshing] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<TripItem | null>(null);

  // Fetch real data
  const { posts, loading: postsLoading, refetch: refetchPosts } = useMyPosts();
  const {
    savedPosts,
    loading: savedLoading,
    refetch: refetchSaved,
  } = useSavedPosts();
  const {
    data: tripsData,
    loading: tripsLoading,
    refetch: refetchTrips,
  } = useQuery<{ trips: any[] }>(MY_TRIPS_QUERY, {
    fetchPolicy: "cache-and-network",
  });
  const [updateTrip, { loading: isUpdatingTrip }] =
    useMutation(UPDATE_TRIP_MUTATION);
  const [changeTripStatus, { loading: isChangingStatus }] = useMutation(
    CHANGE_TRIP_STATUS_MUTATION,
  );
  const [deleteTrip, { loading: isDeletingTrip }] =
    useMutation(DELETE_TRIP_MUTATION);

  // Fetch user profile for follower/following counts
  const { data: profileData, refetch: refetchProfile } = useUserById(
    user?.id ? parseInt(String(user.id), 10) : 0,
  );

  const myTrips = useMemo(() => {
    const all = tripsData?.trips ?? [];
    return [...all].sort((left: any, right: any) => {
      const leftOwned = String(left.ownerId) === String(user?.id);
      const rightOwned = String(right.ownerId) === String(user?.id);

      if (leftOwned !== rightOwned) {
        return leftOwned ? -1 : 1;
      }

      return (
        new Date(right.createdAt || 0).getTime() -
        new Date(left.createdAt || 0).getTime()
      );
    });
  }, [tripsData, user?.id]);
  const isManagementVisible = activeTab === "trips" && !!selectedTrip;
  const isSubmitting = isUpdatingTrip || isChangingStatus || isDeletingTrip;

  const stats: ProfileStatsData = useMemo(
    () => ({
      posts: posts?.length ?? 0,
      trips: myTrips.length,
      followers: profileData?.data?._count?.followers ?? 0,
      following: profileData?.data?._count?.following ?? 0,
    }),
    [posts, myTrips, profileData],
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all([
      refetchPosts(),
      refetchSaved(),
      refetchTrips(),
      refetchProfile(),
    ]);
    setRefreshing(false);
  }, [refetchPosts, refetchSaved, refetchTrips, refetchProfile]);

  const handleEditProfile = useCallback(() => {
    router.push("/edit-profile");
  }, []);

  const handleStatPress = useCallback((stat: keyof ProfileStatsData) => {
    // TODO: navigate to followers/following list
    console.log("Stat pressed:", stat);
  }, []);

  const handlePostPress = useCallback((postId: number) => {
    router.push(`/post/${postId}` as any);
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top"]}
    >
      {/* Top bar */}
      <View style={[styles.topBar, { backgroundColor: colors.background }]}>
        <Text style={[styles.topBarTitle, { color: colors.text }]}>
          {user?.nickname ? `@${user.nickname}` : "Profile"}
        </Text>
        <View style={styles.topBarActions}>
          <TouchableOpacity
            style={[styles.topBarBtn, { backgroundColor: colors.card }]}
            onPress={() => router.push("/settings")}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Feather name="settings" size={20} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Profile header with avatar */}
        <ProfileHeader user={user} onEditProfile={handleEditProfile} />

        {/* Stats */}
        <ProfileStats stats={stats} onStatPress={handleStatPress} />

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={[styles.primaryBtn, { backgroundColor: colors.primary }]}
            onPress={handleEditProfile}
          >
            <Feather name="edit-2" size={16} color={colors.primaryText} />
            <Text
              style={[styles.primaryBtnText, { color: colors.primaryText }]}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.outlineBtn,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={() => {
              // TODO: share profile
            }}
          >
            <Feather name="share-2" size={16} color={colors.primary} />
            <Text style={[styles.outlineBtnText, { color: colors.text }]}>
              Share
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <ProfileTabBar active={activeTab} onChange={setActiveTab} />

        {/* Tab Content — edge-to-edge for grid */}
        {activeTab === "posts" &&
          (posts.length > 0 ? (
            <ProfilePostsGrid
              posts={posts}
              loading={postsLoading}
              onPostPress={handlePostPress}
            />
          ) : (
            <EmptyTabContent
              icon="camera"
              title="No posts yet"
              description="Share your travel moments with the community"
              actionLabel="Create Post"
              onAction={() => router.push("/create-post")}
            />
          ))}

        {activeTab === "trips" &&
          (myTrips.length > 0 ? (
            <ProfileTripsGrid
              trips={myTrips}
              loading={tripsLoading}
              onManageTrip={setSelectedTrip}
              currentUserId={user?.id}
            />
          ) : (
            <EmptyTabContent
              icon="map"
              title="No trips yet"
              description="Plan your next adventure and keep track of it here"
              actionLabel="Plan Trip"
              onAction={() => router.push("/trip/preferences")}
            />
          ))}

        {activeTab === "favorites" &&
          (savedPosts.length > 0 ? (
            <ProfilePostsGrid
              posts={savedPosts}
              loading={savedLoading}
              onPostPress={handlePostPress}
            />
          ) : (
            <EmptyTabContent
              icon="bookmark"
              title="Nothing saved yet"
              description="Save posts and places you love to find them later"
            />
          ))}

        <View style={{ height: 40 }} />
      </ScrollView>

      <TripManagementModal
        visible={isManagementVisible}
        trip={selectedTrip}
        isSubmitting={isSubmitting}
        onClose={() => setSelectedTrip(null)}
        onOpenItinerary={(tripId) => {
          setSelectedTrip(null);
          router.push({ pathname: "/trip/itinerary", params: { id: tripId } });
        }}
        onSave={async (payload) => {
          await updateTrip({
            variables: {
              where: { id: payload.id },
              data: {
                title: { set: payload.title },
                description: { set: payload.description ?? null },
                city: { set: payload.city ?? null },
                country: { set: payload.country ?? null },
                startDate: payload.startDate
                  ? { set: toIsoDate(payload.startDate) }
                  : undefined,
                endDate: payload.endDate
                  ? { set: toIsoDate(payload.endDate) }
                  : undefined,
                isPublic: { set: payload.isPublic },
                totalBudget:
                  typeof payload.totalBudget === "number"
                    ? { set: payload.totalBudget }
                    : { set: null },
                currency: { set: payload.currency ?? null },
              },
            },
          });
          await refetchTrips();
          setSelectedTrip(null);
        }}
        onChangeStatus={async (tripId, status) => {
          await changeTripStatus({ variables: { tripId, status } });
          await refetchTrips();
          setSelectedTrip((current) =>
            current ? { ...current, status } : current,
          );
        }}
        onDelete={async (tripId) => {
          Alert.alert(
            "Delete trip",
            "Tripul va fi șters definitiv. Continui?",
            [
              { text: "Cancel", style: "cancel" },
              {
                text: "Delete",
                style: "destructive",
                onPress: async () => {
                  await deleteTrip({ variables: { tripId } });
                  await refetchTrips();
                  setSelectedTrip(null);
                },
              },
            ],
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  // Top bar
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#FAFAFA",
  },
  topBarTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1A1A2E",
  },
  topBarActions: {
    flexDirection: "row",
    gap: 12,
  },
  topBarBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  // Scroll
  scrollContent: {
    paddingBottom: 20,
  },

  // Action row
  actionRow: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 14,
  },
  primaryBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#FF6B6B",
    paddingVertical: 10,
    borderRadius: 8,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
  outlineBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DBDBDB",
  },
  outlineBtnText: {
    color: "#1A1A2E",
    fontWeight: "600",
    fontSize: 13,
  },
});
