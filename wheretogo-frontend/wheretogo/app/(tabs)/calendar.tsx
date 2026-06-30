import { Calendar } from "@/src/components/Calendar";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Schedule, useMySchedules } from "@/src/features/schedules";
import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { isAuthenticated } = useAuth();
  const { colors } = useAppTheme();

  const { data: schedules, isLoading, error, refetch } = useMySchedules();

  // Check if two dates are the same day
  const isSameDay = (date1: Date, date2: Date) => {
    const result =
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();

    return result;
  };

  // Parse date string as local date (not UTC) - handles both ISO and YYYY-MM-DD formats
  const parseLocalDate = (dateString: string) => {
    // If it's an ISO string, extract just the date part
    if (dateString.includes("T")) {
      const datePart = dateString.split("T")[0]; // Extract YYYY-MM-DD from ISO string
      const [year, month, day] = datePart.split("-").map(Number);
      const result = new Date(year, month - 1, day); // month is 0-indexed

      return result;
    }

    // Handle YYYY-MM-DD format
    const [year, month, day] = dateString.split("-").map(Number);
    const result = new Date(year, month - 1, day); // month is 0-indexed

    return result;
  };

  // Filter schedules for selected date
  const filteredSchedules = useMemo(() => {
    if (!schedules) {
      return [];
    }

    return schedules.filter((schedule) => {
      const scheduleDate = parseLocalDate(schedule.scheduledDate);
      const isSame = isSameDay(scheduleDate, selectedDate);

      return isSame;
    });
  }, [schedules, selectedDate]);

  const formatDate = (dateString: string) => {
    const date = parseLocalDate(dateString);
    return date.toLocaleDateString("ro-RO", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const renderScheduleCard = ({
    item: schedule,
  }: {
    item: Pick<Schedule, "scheduledDate" | "location">;
  }) => (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: colors.card, shadowColor: colors.shadow },
      ]}
    >
      <Image
        source={{
          uri:
            schedule.location.photos && schedule.location.photos.length > 0
              ? schedule.location.photos[0]
              : "https://via.placeholder.com/60x60/f0f0f0/999?text=No+Image",
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <View style={styles.cardDateRow}>
          <Ionicons
            name="calendar-outline"
            size={14}
            color={colors.textMuted}
          />
          <Text style={[styles.cardDate, { color: colors.textMuted }]}>
            {formatDate(schedule.scheduledDate)}
          </Text>
        </View>
        <Text style={[styles.cardTitle, { color: colors.text }]}>
          {schedule.location.name}
        </Text>
        <View style={styles.cardLocationRow}>
          <Ionicons
            name="location-outline"
            size={14}
            color={colors.textMuted}
          />
          <Text style={[styles.cardLocation, { color: colors.textMuted }]}>
            {schedule.location.address || "Adresă nedisponibilă"}
          </Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.borderLight} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={[
        styles.container,
        {
          paddingTop: isAuthenticated ? 0 : 48,
          backgroundColor: colors.backgroundSecondary,
        },
      ]}
    >
      {/* Page Title */}

      {/* CALENDAR */}
      <Calendar
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
        schedules={schedules || []}
      />

      {/* MY SCHEDULE */}

      <View style={styles.scheduleHeader}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {isSameDay(selectedDate, new Date())
            ? "Programul de astăzi"
            : `Program pentru ${selectedDate.getDate()} ${selectedDate.toLocaleDateString(
                "ro-RO",
                { month: "long" }
              )}`}
        </Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>{schedules?.length || 0} total</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scheduleSection}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.accent} />
            <Text style={[styles.loadingText, { color: colors.textMuted }]}>
              Se încarcă programul...
            </Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Ionicons
              name="alert-circle-outline"
              size={48}
              color={colors.accent}
            />
            <Text style={[styles.errorText, { color: colors.textMuted }]}>
              Eroare la încărcarea programului
            </Text>
            <TouchableOpacity
              style={[styles.retryButton, { backgroundColor: colors.accent }]}
              onPress={() => refetch()}
            >
              <Text style={styles.retryText}>Încearcă din nou</Text>
            </TouchableOpacity>
          </View>
        ) : filteredSchedules.length === 0 ? (
          <>
            <View style={styles.emptyContainer}>
              <Ionicons
                name="calendar-outline"
                size={48}
                color={colors.borderLight}
              />
              <Text style={[styles.emptyText, { color: colors.text }]}>
                Nu ai evenimente programate
              </Text>
              <Text style={[styles.emptySubtext, { color: colors.textMuted }]}>
                Începe să explorezi și adaugă locuri în program!
              </Text>
            </View>
          </>
        ) : (
          <FlatList
            data={filteredSchedules}
            renderItem={renderScheduleCard}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 4,
  },
  backBtn: {
    backgroundColor: "#F4F4F4",
    padding: 6,
    borderRadius: 20,
  },
  headerTitle: { fontSize: 18, fontWeight: "600", color: "#111" },

  /* SCHEDULE */
  scheduleSection: { marginTop: 20, paddingHorizontal: 16 },
  scheduleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },
  viewAll: { color: "#007AFF", fontSize: 14 },

  /* LOADING/ERROR STATES */
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  errorText: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#FF6B00",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 12,
  },
  retryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  emptySubtext: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardImage: { width: 60, height: 60, borderRadius: 12, marginRight: 12 },
  cardContent: { flex: 1 },
  cardDateRow: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
  cardDate: { marginLeft: 4, fontSize: 13, color: "#666" },
  cardTitle: { fontSize: 16, fontWeight: "600", color: "#111" },
  cardLocationRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  cardLocation: { marginLeft: 4, color: "#666", fontSize: 13 },
});
