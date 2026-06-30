import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useFavorites, useRemoveFavorite } from "@/src/features/favorites";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 32;

export default function FavoritesScreen() {
  const { data: favoritesResponse, isLoading, error, refetch } = useFavorites();
  const removeFavoriteMutation = useRemoveFavorite();
  const { colors } = useAppTheme();

  const handleRemoveFavorite = (locationId: number, locationName: string) => {
    Alert.alert(
      "Elimină din favorite",
      `Ești sigur că vrei să elimini "${locationName}" din favorite?`,
      [
        {
          text: "Anulează",
          style: "cancel",
        },
        {
          text: "Elimină",
          style: "destructive",
          onPress: async () => {
            try {
              await removeFavoriteMutation.mutateAsync({ locationId });
              refetch();
            } catch (error) {
              Alert.alert("Eroare", "Nu am putut elimina locația din favorite");
            }
          },
        },
      ]
    );
  };

  const renderFavoriteCard = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[
        styles.favoriteCard,
        { backgroundColor: colors.card, shadowColor: colors.shadow },
      ]}
      onPress={() => router.push(`/destination/${item.id}`)}
    >
      <View style={styles.imageContainer}>
        {item.photos && item.photos.length > 0 ? (
          <Image
            source={{ uri: item.photos[0] }}
            style={styles.cardImage}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.cardImage, styles.placeholderImage]}>
            <Ionicons name="image-outline" size={32} color="#ccc" />
          </View>
        )}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => handleRemoveFavorite(item.id, item.name)}
        >
          <Ionicons name="heart" size={20} color="#E53935" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContent}>
        <Text
          style={[styles.cardTitle, { color: colors.text }]}
          numberOfLines={2}
        >
          {item.name}
        </Text>

        {item.type && (
          <Text style={[styles.cardType, { color: colors.primary }]}>
            {item.type}
          </Text>
        )}

        <View style={styles.cardFooter}>
          {item.rating && (
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={14} color="#FFB400" />
              <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
            </View>
          )}

          {item.priceRange && (
            <Text style={styles.priceRange}>{item.priceRange}</Text>
          )}
        </View>

        {item.address && (
          <View style={styles.addressContainer}>
            <Ionicons name="location-outline" size={12} color="#999" />
            <Text style={styles.addressText} numberOfLines={1}>
              {item.address}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="heart-outline" size={80} color="#ccc" />
      <Text style={styles.emptyTitle}>Niciun favorit încă</Text>
      <Text style={styles.emptyText}>
        Explorează locurile frumoase și salvează-le aici pentru mai târziu
      </Text>
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => router.push("/(tabs)/search")}
      >
        <Text style={styles.exploreButtonText}>Începe să explorezi</Text>
        <Ionicons name="search" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const renderError = () => (
    <View style={styles.errorState}>
      <Ionicons name="alert-circle-outline" size={80} color="#E53935" />
      <Text style={styles.errorTitle}>Eroare la încărcarea favoritelor</Text>
      <Text style={styles.errorText}>
        Nu am putut încărca favoritele tale. Încearcă din nou.
      </Text>
      <TouchableOpacity style={styles.retryButton} onPress={() => refetch()}>
        <Text style={styles.retryButtonText}>Încearcă din nou</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>
          Favoritele mele
        </Text>
        <View style={styles.placeholder} />
      </View>

      {/* Loading State */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, { color: colors.textMuted }]}>
            Încărcăm favoritele...
          </Text>
        </View>
      )}

      {/* Error State */}
      {error && renderError()}

      {/* Favorites Content */}
      {!isLoading && !error && (
        <View style={styles.content}>
          {favoritesResponse && favoritesResponse.length > 0 ? (
            <>
              <View
                style={[
                  styles.statsHeader,
                  { borderBottomColor: colors.border },
                ]}
              >
                <Text style={[styles.statsText, { color: colors.textMuted }]}>
                  {favoritesResponse.length}{" "}
                  {favoritesResponse.length === 1 ? "favorit" : "favorite"}
                </Text>
              </View>

              <FlatList
                data={favoritesResponse}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderFavoriteCard}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
              />
            </>
          ) : (
            renderEmptyState()
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
  placeholder: {
    width: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
  },
  errorState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#E53935",
    marginTop: 16,
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    lineHeight: 24,
  },
  retryButton: {
    backgroundColor: "#E53935",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginTop: 16,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 24,
  },
  exploreButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E53935",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
    gap: 8,
  },
  exploreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  content: { display: "flex", flexDirection: "column" },
  statsHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  statsText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  favoriteCard: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    overflow: "hidden",
    marginBottom: 16,
    flexDirection: "row",
  },
  imageContainer: {
    position: "relative",
    width: 140,
    height: 100,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
  },
  placeholderImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
    lineHeight: 24,
  },
  cardType: {
    fontSize: 13,
    color: "#E53935",
    fontWeight: "600",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 13,
    color: "#333",
    fontWeight: "600",
  },
  priceRange: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  addressText: {
    fontSize: 12,
    color: "#777",
    flex: 1,
    lineHeight: 16,
  },
});
