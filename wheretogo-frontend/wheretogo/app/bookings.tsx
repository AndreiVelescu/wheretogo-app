import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useBookings } from "@/src/features/bookings";
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

export default function BookingsScreen() {
  const { data: bookings, isLoading, error, refetch } = useBookings();
  const { colors } = useAppTheme();

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="calendar-outline" size={80} color="#ccc" />
      <Text style={styles.emptyTitle}>Nicio rezervare încă</Text>
      <Text style={styles.emptyText}>
        Explorează locurile și fă rezervări pentru experiențe memorabile
      </Text>
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => router.push("/(tabs)/search")}
      >
        <Text style={styles.exploreButtonText}>Caută locuri</Text>
        <Ionicons name="search" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const renderError = () => (
    <View style={styles.errorState}>
      <Ionicons name="alert-circle-outline" size={80} color="#E53935" />
      <Text style={styles.errorTitle}>Eroare la încărcarea rezervărilor</Text>
      <Text style={styles.errorText}>
        Nu am putut încărca rezervările tale. Încearcă din nou.
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
          Rezervările mele
        </Text>
        <View style={styles.placeholder} />
      </View>

      {/* Loading State */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, { color: colors.textMuted }]}>
            Încărcăm rezervările...
          </Text>
        </View>
      )}

      {/* Error State */}
      {error && renderError()}

      {/* Empty bookings state */}
      {!isLoading &&
        !error &&
        bookings?.data &&
        bookings.data.length === 0 &&
        renderEmptyState()}

      {/* Bookings list */}
      {!isLoading && !error && bookings?.data && bookings.data.length > 0 && (
        <View style={styles.bookingsContainer}>
          {/* TODO: Render actual bookings here */}
          <Text style={styles.bookingsCount}>
            Ai {bookings.data.length} rezervări
          </Text>

          {/* Temporary development message */}
          <View style={styles.tempMessage}>
            <Ionicons name="construct-outline" size={24} color="#FF9800" />
            <Text style={styles.tempMessageText}>
              Calendar și gestionarea rezervărilor în dezvoltare
            </Text>
          </View>
        </View>
      )}

      {/* Development note - show only when no data */}
      {!isLoading &&
        !error &&
        (!bookings?.data || bookings.data.length === 0) && (
          <View style={styles.developmentNote}>
            <Ionicons name="calendar-outline" size={40} color="#666" />
            <Text style={styles.developmentTitle}>
              Calendar & Rezervări în dezvoltare
            </Text>
            <Text style={styles.developmentText}>
              Sistemul de rezervări și calendarul vor fi disponibile în curând.
              Vei putea să faci rezervări la restaurante, să programezi vizite
              la muzee și să îți organizezi călătoriile.
            </Text>

            <View style={styles.featuresPreview}>
              <Text style={styles.featuresTitle}>
                Funcții ce vor fi disponibile:
              </Text>
              <View style={styles.featureItem}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#4CAF50"
                />
                <Text style={styles.featureText}>Rezervări la restaurante</Text>
              </View>
              <View style={styles.featureItem}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#4CAF50"
                />
                <Text style={styles.featureText}>
                  Programări la muzee și atracții
                </Text>
              </View>
              <View style={styles.featureItem}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#4CAF50"
                />
                <Text style={styles.featureText}>
                  Calendar personal de călătorii
                </Text>
              </View>
              <View style={styles.featureItem}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#4CAF50"
                />
                <Text style={styles.featureText}>Notificări și reminder-e</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.exploreButton}
              onPress={() => router.push("/(tabs)/search")}
            >
              <Text style={styles.exploreButtonText}>Explorează locații</Text>
              <Ionicons name="search" size={16} color="#fff" />
            </TouchableOpacity>
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
  bookingsContainer: {
    flex: 1,
    padding: 20,
  },
  bookingsCount: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  tempMessage: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF8E1",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#FF9800",
  },
  tempMessageText: {
    fontSize: 14,
    color: "#FF8F00",
    marginLeft: 12,
    flex: 1,
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
    marginBottom: 24,
  },
  featuresPreview: {
    width: "100%",
    marginBottom: 24,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
    textAlign: "left",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  featureText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 12,
  },
});
