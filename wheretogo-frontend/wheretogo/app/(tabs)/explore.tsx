import { FavoriteButton } from "@/src/components/FavoriteButton";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useFavorites } from "@/src/features";
import {
  useLocations,
  useLocationsByType,
  useTrendingLocations,
} from "@/src/features/locations";
import { getFirstValidImage } from "@/src/utils/imageUtils";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function HomeScreen() {
  const { isAuthenticated, user } = useAuth();
  const { colors, isDark } = useAppTheme();
  const [refreshing, setRefreshing] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(10)).current;
  const insets = useSafeAreaInsets();

  // Get user's favorites if authenticated
  const { data: favorites, refetch: refetchFavorites } = useFavorites();
  const favoriteLocationIds = favorites ? favorites.map((fav) => fav.id) : [];

  // Helper function to check if location is favorited
  const isLocationFavorited = (locationId: number) => {
    const result = favoriteLocationIds.includes(locationId);

    return result;
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  // 1. Data Fetching
  const {
    data: trendingLocations,
    isLoading: isTrendingLoading,
    refetch: refetchTrending,
  } = useTrendingLocations();

  const { data: restaurants, refetch: refetchRestaurants } =
    useLocationsByType("restaurant");

  const { data: parks, refetch: refetchParks } = useLocationsByType("park");

  const { data: museums, refetch: refetchMuseums } =
    useLocationsByType("museum");

  const { data: allLocations, refetch: refetchAll } = useLocations({
    sortBy: "newest",
  });

  // 2. Categories Data
  const categories = [
    {
      id: "restaurant",
      name: "Restaurants",
      icon: "restaurant-outline",
      color: "#FF6B35",
      count: restaurants?.data?.length || 0,
    },
    {
      id: "park",
      name: "Parks",
      icon: "leaf-outline",
      color: "#4ECDC4",
      count: parks?.data?.length || 0,
    },
    {
      id: "museum",
      name: "Museums",
      icon: "library-outline",
      color: "#45B7D1",
      count: museums?.data?.length || 0,
    },
    {
      id: "shopping",
      name: "Shopping",
      icon: "bag-outline",
      color: "#96CEB4",
      count: 0,
    },
  ];

  // 3. Unified Refresh Logic
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await Promise.all([
        refetchTrending(),
        refetchRestaurants(),
        refetchParks(),
        refetchMuseums(),
        refetchAll(),
        ...(isAuthenticated ? [refetchFavorites()] : []),
      ]);
    } catch (error) {
      console.error("Home refresh failed", error);
    } finally {
      setRefreshing(false);
    }
  }, [
    refetchTrending,
    refetchRestaurants,
    refetchParks,
    refetchMuseums,
    refetchAll,
    refetchFavorites,
    isAuthenticated,
  ]);

  if (isTrendingLoading && !refreshing) {
    return (
      <SafeAreaView
        style={[
          styles.container,
          styles.centerContent,
          { backgroundColor: colors.background },
        ]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  const from = "home";

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          paddingTop: isAuthenticated ? 0 : 48,
        },
      ]}
    >
      {/* AI Trip Planner Button */}
      <Animated.View
        style={[
          styles.tripPlannerContainer,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.tripPlannerButton,
            { backgroundColor: colors.primary },
          ]}
          onPress={() => router.push("/trip/preferences")}
        >
          <View style={styles.tripPlannerContent}>
            <View style={styles.tripPlannerText}>
              <Text style={styles.tripPlannerTitle}>Trip Planner</Text>
              <Text style={styles.tripPlannerSubtitle}>
                Create a personalized itinerary based on your preferences and
                interests!
              </Text>
            </View>
            <View style={styles.tripPlannerIcon}>
              <Ionicons name="sparkles" size={24} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
          />
        }
        contentContainerStyle={{
          paddingBottom: Math.max(insets.bottom, 12) + 120,
        }}
      >
        {/* Title */}
        <Animated.View
          style={[
            styles.titleContainer,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={[styles.title, { color: colors.text }]}>Explore</Text>
          <Text style={[styles.title, { color: colors.text }]}>
            the best{" "}
            <Text
              style={[
                styles.country,
                { color: colors.primary, textDecorationColor: colors.primary },
              ]}
            >
              locations!
            </Text>
          </Text>
        </Animated.View>

        {/* --- TRENDING SECTION --- */}
        <Animated.View
          style={[
            styles.sectionHeader,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Popular Locations
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/(tabs)/search?sortBy=trending")}
          >
            <Text style={[styles.viewAll, { color: colors.primary }]}>
              View All
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <FlatList
          horizontal
          data={trendingLocations?.data || []}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsContainer}
          decelerationRate="fast"
          snapToInterval={286}
          renderItem={({ item: loc }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                router.push({
                  pathname: `/destination/[id]`,
                  params: { id: loc.id },
                })
              }
            >
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: colors.card,
                    shadowColor: isDark ? "transparent" : "#000",
                  },
                ]}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: getFirstValidImage(loc.photos || [], loc.type),
                    }}
                    style={styles.cardImage}
                    resizeMode="cover"
                  />
                  {isAuthenticated && (
                    <View style={styles.cardFavoriteButtonContainer}>
                      <FavoriteButton
                        locationId={loc.id}
                        isFavorited={isLocationFavorited(loc.id)}
                        size={20}
                        onPress={() => refetchFavorites()}
                      />
                    </View>
                  )}
                  {loc.isHype && (
                    <View
                      style={[
                        styles.hypeBadge,
                        { backgroundColor: colors.primary },
                      ]}
                    >
                      <Ionicons name="flame" size={12} color="#fff" />
                      <Text style={styles.hypeText}>HYPE</Text>
                    </View>
                  )}
                </View>
                <View style={styles.cardInfo}>
                  <Text
                    style={[styles.cardTitle, { color: colors.text }]}
                    numberOfLines={1}
                  >
                    {loc.name}
                  </Text>

                  <View style={styles.locationRow}>
                    <Ionicons
                      name="location-outline"
                      size={14}
                      color={colors.textMuted}
                    />
                    <Text
                      style={[
                        styles.locationText,
                        { color: colors.textSecondary },
                      ]}
                      numberOfLines={1}
                    >
                      {loc.address}
                    </Text>
                  </View>

                  <View style={styles.detailsRow}>
                    <Text
                      style={[
                        styles.tag,
                        {
                          backgroundColor: isDark
                            ? colors.primarySoft
                            : "#FEF2F2",
                          color: colors.primary,
                        },
                      ]}
                    >
                      {loc.type}
                    </Text>
                    {loc.priceRange ? (
                      <Text
                        style={[
                          styles.tag,
                          {
                            backgroundColor: isDark
                              ? colors.primarySoft
                              : "#FEF2F2",
                            color: colors.primary,
                          },
                        ]}
                      >
                        {loc.priceRange}
                      </Text>
                    ) : null}
                  </View>

                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#FFD700" />
                    <Text style={[styles.ratingText, { color: colors.text }]}>
                      {loc.averageRating > 0
                        ? loc.averageRating.toFixed(1)
                        : "N/A"}
                      <Text
                        style={[
                          styles.reviewCount,
                          { color: colors.textMuted },
                        ]}
                      >
                        {" "}
                        ({loc.reviewCount})
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* --- CATEGORIES SECTION --- */}
        <Animated.View
          style={[
            styles.section,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Explore by Category
            </Text>
          </View>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  { backgroundColor: category.color },
                ]}
                onPress={() =>
                  router.push(`/(tabs)/search?category=${category.id}`)
                }
              >
                <Ionicons name={category.icon as any} size={24} color="#fff" />
                <Text style={styles.categoryText}>{category.name}</Text>
                {category.count > 0 && (
                  <Text style={styles.categoryCount}>
                    {category.count} locations
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        {/* --- RESTAURANTS SECTION --- */}
        {restaurants?.data && restaurants.data.length > 0 && (
          <Animated.View
            style={[
              styles.section,
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
            ]}
          >
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Popular Restaurants
              </Text>
              <TouchableOpacity
                onPress={() =>
                  router.push("/(tabs)/search?category=restaurant")
                }
              >
                <Text style={[styles.viewAll, { color: colors.primary }]}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              data={restaurants.data.slice(0, 5)}
              keyExtractor={(item) => String(item.id)}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardsContainer}
              renderItem={({ item: restaurant }) => (
                <TouchableOpacity
                  style={[
                    styles.smallCard,
                    {
                      backgroundColor: colors.card,
                      shadowColor: isDark ? "transparent" : "#000",
                    },
                  ]}
                  onPress={() => router.push(`/destination/${restaurant.id}`)}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri: getFirstValidImage(
                          restaurant.photos || [],
                          restaurant.type,
                        ),
                      }}
                      style={styles.smallCardImage}
                      resizeMode="cover"
                    />
                    {isAuthenticated && (
                      <View style={styles.favoriteButtonContainer}>
                        <FavoriteButton
                          locationId={restaurant.id}
                          isFavorited={isLocationFavorited(restaurant.id)}
                          size={18}
                        />
                      </View>
                    )}
                  </View>
                  <View style={styles.smallCardInfo}>
                    <Text
                      style={[styles.smallCardTitle, { color: colors.text }]}
                      numberOfLines={1}
                    >
                      {restaurant.name}
                    </Text>
                    <Text
                      style={[
                        styles.smallCardType,
                        { color: colors.textSecondary },
                      ]}
                    >
                      {restaurant.type}
                    </Text>
                    <View style={styles.ratingRow}>
                      <Ionicons name="star" size={12} color="#FFD700" />
                      <Text
                        style={[styles.smallCardRating, { color: colors.text }]}
                      >
                        {restaurant.averageRating > 0
                          ? restaurant.averageRating.toFixed(1)
                          : "N/A"}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </Animated.View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#F9FAFB" },
  centerContent: { justifyContent: "center", alignItems: "center" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  userName: { marginLeft: 6, fontSize: 15, fontWeight: "600", color: "#333" },
  notificationButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  titleContainer: { marginTop: 24, paddingHorizontal: 20 },
  title: { fontSize: 34, fontWeight: "700", color: "#1F2937" },
  country: {
    color: "#E74C3C",
    textDecorationLine: "underline",
    fontWeight: "700",
    textDecorationColor: "#E74C3C",
  },
  sectionHeader: {
    marginTop: 26,
    marginBottom: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 20, fontWeight: "700", color: "#111827" },
  viewAll: { fontSize: 14, color: "#E74C3C", fontWeight: "500" },
  cardsContainer: { paddingLeft: 20, paddingRight: 10 }, // Add padding for horizontal scroll
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    marginRight: 16,
    width: 270,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 10, // space for shadow
  },
  cardImage: {
    height: 190,
    width: "100%",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  hypeBadge: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "#E74C3C",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  hypeText: { color: "white", fontSize: 10, fontWeight: "bold" },
  cardInfo: { padding: 12 },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#111827" },
  locationRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  locationText: { fontSize: 13, color: "#6B7280", marginLeft: 4, flex: 1 },
  detailsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 8,
  },
  tag: {
    backgroundColor: "#FEF2F2",
    color: "#DC2626",
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: "hidden",
  },
  ratingRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  ratingText: { marginLeft: 4, color: "#374151", fontWeight: "600" },
  reviewCount: { color: "#9CA3AF", fontWeight: "400", fontSize: 12 },

  // AI Trip Planner Styles
  tripPlannerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 5,
  },
  tripPlannerButton: {
    backgroundColor: "#EF4444",
    borderRadius: 18,
    padding: 20,
    shadowColor: "#E53935",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  tripPlannerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tripPlannerText: {
    flex: 1,
  },
  tripPlannerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  tripPlannerSubtitle: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
    lineHeight: 20,
  },
  tripPlannerIcon: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 12,
    borderRadius: 12,
    marginLeft: 16,
  },
  // New Sections Styles
  section: {
    marginBottom: 5,
  },
  // Categories Grid
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 20,
  },
  categoryButton: {
    width: "48%", // approx
    flexGrow: 1,
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  categoryCount: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.9,
  },
  // Small Cards
  smallCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginRight: 12,
    width: 160,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 10,
  },
  smallCardImage: {
    height: 100,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  imageContainer: {
    position: "relative",
  },
  favoriteButtonContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
  },
  cardFavoriteButtonContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 1,
  },
  smallCardInfo: {
    padding: 10,
  },
  smallCardTitle: { fontSize: 14, fontWeight: "700", color: "#111827" },
  smallCardType: { fontSize: 12, color: "#6B7280", marginTop: 2 },
  smallCardRating: { fontSize: 11, color: "#374151", marginLeft: 4 },
  // Grid Cards
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 20,
  },
  gridCard: {
    width: "47%", // slightly less than half to fit gap
    height: 140,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 4,
  },
  gridCardImage: {
    width: "100%",
    height: "100%",
  },
  gridCardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(17,24,39,0.7)",
    padding: 8,
  },
  gridFavoriteButtonContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
  },
  gridCardTitle: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  gridCardType: {
    color: "#E5E7EB",
    fontSize: 10,
    fontWeight: "500",
  },
});
