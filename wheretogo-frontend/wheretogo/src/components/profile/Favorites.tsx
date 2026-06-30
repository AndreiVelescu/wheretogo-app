import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useFavorites } from "@/src/features/favorites";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favorites() {
  const { data: favoritesResponse, isLoading, error, refetch } = useFavorites();
  const { colors } = useAppTheme();

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="heart-outline" size={80} color={colors.borderLight} />
      <Text style={[styles.emptyTitle, { color: colors.text }]}>
        Niciun favorit încă
      </Text>
      <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
        Explorează locurile frumoase și salvează-le aici pentru mai târziu
      </Text>
      <TouchableOpacity
        style={[styles.exploreButton, { backgroundColor: colors.primary }]}
        onPress={() => router.push("/(tabs)/search")}
      >
        <Text style={styles.exploreButtonText}>Începe să explorezi</Text>
        <Ionicons name="search" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const renderError = () => (
    <View style={styles.errorState}>
      <Ionicons name="alert-circle-outline" size={80} color={colors.error} />
      <Text style={[styles.errorTitle, { color: colors.error }]}>
        Eroare la încărcarea favoritelor
      </Text>
      <Text style={[styles.errorText, { color: colors.textSecondary }]}>
        Nu am putut încărca favoritele tale. Încearcă din nou.
      </Text>
      <TouchableOpacity
        style={[styles.retryButton, { backgroundColor: colors.primary }]}
        onPress={() => refetch()}
      >
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
          <Text style={[styles.loadingText, { color: colors.textSecondary }]}>
            Încărcăm favoritele...
          </Text>
        </View>
      )}

      {/* Error State */}
      {error && renderError()}

      {/* TODO: Implement favorites when backend returns proper Location data */}
      <View style={styles.developmentNote}>
        <Ionicons
          name="construct-outline"
          size={40}
          color={colors.textSecondary}
        />
        <Text style={[styles.developmentTitle, { color: colors.text }]}>
          Favorites în dezvoltare
        </Text>
        <Text style={[styles.developmentText, { color: colors.textSecondary }]}>
          Favoritele vor fi disponibile după finalizarea integrării cu
          backend-ul. Pentru moment poți explora locațiile și utiliza butonul de
          favorite pentru a testa funcționalitatea.
        </Text>
        <TouchableOpacity
          style={[styles.exploreButton, { backgroundColor: colors.primary }]}
          onPress={() => router.push("/(tabs)/search")}
        >
          <Text style={styles.exploreButtonText}>Explorează locații</Text>
          <Ionicons name="search" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
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
  developmentNote: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  developmentTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginTop: 16,
    textAlign: "center",
  },
  developmentText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 24,
  },
});
