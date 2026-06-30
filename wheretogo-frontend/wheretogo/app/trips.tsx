import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useCurrentUser } from "@/src/features";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const TRIPS_QUERY = gql`
  query Trips {
    trips {
      id
      ownerId
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
      createdAt
      updatedAt
      owner {
        id
        name
      }
      days {
        id
        tripId
        date
        dayNumber
        notes
        createdAt
        updatedAt
      }
      collaborators {
        id
        tripId
        userId
        role
        createdAt
      }
    }
  }
`;

interface TripsQueryData {
  trips: Array<{
    id: string;
    ownerId: string;
    title: string;
    description?: string;
    status: string;
    startDate?: string | null;
    endDate?: string | null;
    city?: string;
    country?: string;
    isPublic: boolean;
    totalBudget?: number;
    currency?: string;
    createdAt: string;
    updatedAt: string;
    owner: {
      id: string;
      name: string;
    };
    days?: Array<{
      id: string;
      tripId: string;
      date: string;
      dayNumber: number;
      notes?: string;
      createdAt: string;
      updatedAt: string;
    }>;
    collaborators?: Array<{
      id: string;
      tripId: string;
      userId: string;
      role: string;
      createdAt: string;
    }>;
  }>;
}

export default function TripsPage() {
  const router = useRouter();
  const { colors } = useAppTheme();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "active" | "draft" | "public"
  >("all");

  const { data: currentUser } = useCurrentUser();
  const currentUserId = currentUser?.data?.id;

  const { data, loading, error, refetch } = useQuery<TripsQueryData>(
    TRIPS_QUERY,
    {
      fetchPolicy: "cache-and-network",
    }
  );

  const sections = useMemo(() => {
    const list = data?.trips ?? [];

    // Apply filter first
    let filtered = list;
    if (activeFilter === "public")
      filtered = list.filter((t: any) => t.isPublic);
    else if (activeFilter === "draft")
      filtered = list.filter(
        (t: any) => String(t.status).toUpperCase() === "DRAFT"
      );
    else if (activeFilter === "active")
      filtered = list.filter(
        (t: any) => String(t.status).toUpperCase() === "ACTIVE"
      );

    // Separate into owned vs shared - compare as strings to avoid type mismatch
    const myTrips = filtered.filter(
      (t: any) => String(t.ownerId) === String(currentUserId)
    );
    const sharedTrips = filtered.filter(
      (t: any) => String(t.ownerId) !== String(currentUserId)
    );

    console.log(
      "[Trips] currentUserId:",
      currentUserId,
      "myTrips:",
      myTrips.length,
      "sharedTrips:",
      sharedTrips.length
    );

    const result = [];
    if (myTrips.length > 0) {
      result.push({ title: "Tripurile mele", data: myTrips });
    }
    if (sharedTrips.length > 0) {
      result.push({ title: "Partajate cu mine", data: sharedTrips });
    }
    return result;
  }, [data?.trips, activeFilter, currentUserId]);

  const formatDateRange = (start?: string | null, end?: string | null) => {
    if (!start || !end) return "";
    const startDate = new Date(start);
    const endDate = new Date(end);
    const formatter = new Intl.DateTimeFormat("ro-RO", {
      day: "2-digit",
      month: "short",
    });
    return `${formatter.format(startDate)} – ${formatter.format(endDate)}`;
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <View
        style={[styles.header, { backgroundColor: colors.backgroundSecondary }]}
      >
        <TouchableOpacity
          style={[
            styles.backIcon,
            { backgroundColor: colors.card, shadowColor: colors.shadow },
          ]}
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Înapoi"
        >
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: colors.text }]}>
          Tripurile mele
        </Text>
        <Text style={[styles.subtitle, { color: colors.textMuted }]}>
          Planifică, salvează și revino la itinerare oricând.
        </Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item: trip }) => (
          <TouchableOpacity
            style={[
              styles.tripCard,
              { backgroundColor: colors.card, shadowColor: colors.shadow },
            ]}
            activeOpacity={0.85}
            onPress={() =>
              router.push({
                pathname: "/trip/itinerary",
                params: {
                  id: String(trip.id),
                },
              })
            }
          >
            <View
              style={[styles.cardImage, { backgroundColor: colors.border }]}
            >
              <Text style={styles.cardBadge}>{trip.status || "Trip"}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                {trip.title}
              </Text>
              <Text style={[styles.cardMeta, { color: colors.textMuted }]}>
                {trip.city}
              </Text>
              <View style={styles.cardMetaRow}>
                <Ionicons
                  name="calendar-outline"
                  size={14}
                  color={colors.textMuted}
                />
                <Text
                  style={[styles.cardMetaText, { color: colors.textMuted }]}
                >
                  {formatDateRange(trip.startDate, trip.endDate)}
                </Text>
                <View
                  style={[styles.dot, { backgroundColor: colors.borderLight }]}
                />
                <Ionicons
                  name="pin-outline"
                  size={14}
                  color={colors.textMuted}
                />
                <Text
                  style={[styles.cardMetaText, { color: colors.textMuted }]}
                >
                  {(trip.days?.length || 0) + " zile"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Ionicons
              name={
                section.title === "Tripurile mele"
                  ? "briefcase-outline"
                  : "people-outline"
              }
              size={18}
              color={colors.textMuted}
            />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              {section.title}
            </Text>
            <Text
              style={[
                styles.sectionCount,
                {
                  color: colors.textSecondary,
                  backgroundColor: colors.inputBackground,
                },
              ]}
            >
              {section.data.length}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <View style={styles.filterRow}>
              <TouchableOpacity
                style={[
                  styles.filterChip,
                  { backgroundColor: colors.border },
                  activeFilter === "all" && styles.filterChipActive,
                ]}
                onPress={() => setActiveFilter("all")}
              >
                <Text
                  style={
                    activeFilter === "all"
                      ? styles.filterChipTextActive
                      : [styles.filterChipText, { color: colors.text }]
                  }
                >
                  Toate
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterChip,
                  { backgroundColor: colors.border },
                  activeFilter === "active" && styles.filterChipActive,
                ]}
                onPress={() => setActiveFilter("active")}
              >
                <Text
                  style={
                    activeFilter === "active"
                      ? styles.filterChipTextActive
                      : [styles.filterChipText, { color: colors.text }]
                  }
                >
                  Active
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterChip,
                  { backgroundColor: colors.border },
                  activeFilter === "draft" && styles.filterChipActive,
                ]}
                onPress={() => setActiveFilter("draft")}
              >
                <Text
                  style={
                    activeFilter === "draft"
                      ? styles.filterChipTextActive
                      : [styles.filterChipText, { color: colors.text }]
                  }
                >
                  Draft
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.filterChip,
                  { backgroundColor: colors.border },
                  activeFilter === "public" && styles.filterChipActive,
                ]}
                onPress={() => setActiveFilter("public")}
              >
                <Text
                  style={
                    activeFilter === "public"
                      ? styles.filterChipTextActive
                      : [styles.filterChipText, { color: colors.text }]
                  }
                >
                  Publice
                </Text>
              </TouchableOpacity>
            </View>
            {loading && (
              <View
                style={[
                  styles.stateCard,
                  { backgroundColor: colors.card, shadowColor: colors.shadow },
                ]}
              >
                <ActivityIndicator size="small" color={colors.primary} />
                <Text style={[styles.stateText, { color: colors.textMuted }]}>
                  Se încarcă tripurile...
                </Text>
              </View>
            )}
            {!!error && (
              <View
                style={[
                  styles.stateCard,
                  { backgroundColor: colors.card, shadowColor: colors.shadow },
                ]}
              >
                <Text style={[styles.stateText, { color: colors.textMuted }]}>
                  Nu am putut încărca tripurile.
                </Text>
              </View>
            )}
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: "#F7F8FA",
  },
  backIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 12,
  },
  title: { fontSize: 24, fontWeight: "700", color: "#111827" },
  subtitle: { color: "#6B7280", marginTop: 4 },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 28,
    gap: 16,
  },
  listHeader: {
    gap: 16,
  },
  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#E5E7EB",
  },
  filterChipActive: {
    backgroundColor: "#E53935",
  },
  filterChipText: { color: "#374151", fontWeight: "600" },
  filterChipTextActive: { color: "#fff", fontWeight: "700" },
  stateCard: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  stateText: { color: "#6B7280", fontWeight: "600" },
  tripCard: {
    borderRadius: 16,
    backgroundColor: "#fff4f4ff",
    overflow: "hidden",

    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImage: {
    height: 140,
    backgroundColor: "#E5E7EB",
    justifyContent: "flex-end",
    padding: 12,
  },
  cardBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(17,24,39,0.75)",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "600",
  },
  cardBody: { padding: 14 },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#111827" },
  cardMeta: { color: "#6B7280", marginTop: 4 },
  cardMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 8,
  },
  cardMetaText: { color: "#6B7280", fontSize: 12 },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#D1D5DB",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#374151",
    flex: 1,
  },
  sectionCount: {
    fontSize: 13,
    fontWeight: "600",
    color: "#9CA3AF",
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
});
