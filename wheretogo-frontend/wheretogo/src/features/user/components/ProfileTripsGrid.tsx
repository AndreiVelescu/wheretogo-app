import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export interface TripItem {
  id: string;
  ownerId?: string | number;
  owner?: {
    id?: string | number;
    name?: string | null;
  } | null;
  title: string;
  description?: string | null;
  city?: string;
  country?: string;
  status: string;
  startDate?: string | null;
  endDate?: string | null;
  isPublic?: boolean;
  totalBudget?: number | null;
  currency?: string | null;
  days?: any[];
}

interface ProfileTripsGridProps {
  trips: TripItem[];
  loading?: boolean;
  onManageTrip?: (trip: TripItem) => void;
  currentUserId?: string | number | null;
}

function formatDateRange(start?: string | null, end?: string | null): string {
  if (!start) return "";
  const s = new Date(start);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  if (!end) return fmt(s);
  return `${fmt(s)} – ${fmt(new Date(end))}`;
}

function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

function statusColor(status: string): string {
  switch (status.toUpperCase()) {
    case "ACTIVE":
      return "#4CAF50";
    case "DRAFT":
      return "#FFA726";
    case "COMPLETED":
      return "#42A5F5";
    default:
      return "#BDBDBD";
  }
}

export function ProfileTripsGrid({
  trips,
  loading,
  onManageTrip,
  currentUserId,
}: ProfileTripsGridProps) {
  const { colors, isDark } = useAppTheme();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {trips.map((trip) => {
        const dateStr = formatDateRange(trip.startDate, trip.endDate);
        const location = [trip.city, trip.country].filter(Boolean).join(", ");
        const daysCount = trip.days?.length ?? 0;
        const isOwner =
          String(trip.ownerId ?? "") === String(currentUserId ?? "");

        return (
          <TouchableOpacity
            key={trip.id}
            style={[
              styles.card,
              {
                backgroundColor: colors.card,
                shadowOpacity: isDark ? 0 : 0.06,
              },
            ]}
            activeOpacity={0.7}
            onPress={() =>
              router.push({
                pathname: "/trip/itinerary",
                params: { id: String(trip.id) },
              })
            }
          >
            {/* Color accent bar */}
            <View
              style={[
                styles.accentBar,
                { backgroundColor: statusColor(trip.status) },
              ]}
            />

            <View style={styles.cardContent}>
              <View style={styles.cardTop}>
                <Text
                  style={[styles.tripTitle, { color: colors.text }]}
                  numberOfLines={1}
                >
                  {trip.title}
                </Text>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: statusColor(trip.status) + "20" },
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      { color: statusColor(trip.status) },
                    ]}
                  >
                    {trip.status}
                  </Text>
                </View>
              </View>

              {location ? (
                <View style={styles.infoRow}>
                  <Feather name="map-pin" size={12} color={colors.textMuted} />
                  <Text style={[styles.infoText, { color: colors.textMuted }]}>
                    {location}
                  </Text>
                </View>
              ) : null}

              {dateStr ? (
                <View style={styles.infoRow}>
                  <Feather name="calendar" size={12} color={colors.textMuted} />
                  <Text style={[styles.infoText, { color: colors.textMuted }]}>
                    {dateStr}
                  </Text>
                </View>
              ) : null}

              <View style={styles.cardBottom}>
                {daysCount > 0 && (
                  <Text style={[styles.daysText, { color: colors.textMuted }]}>
                    {daysCount} {daysCount === 1 ? "day" : "days"}
                  </Text>
                )}
                {!isOwner && (
                  <View
                    style={[
                      styles.sharedBadge,
                      { backgroundColor: colors.primarySoft },
                    ]}
                  >
                    <Feather name="users" size={10} color={colors.primary} />
                    <Text
                      style={[styles.sharedText, { color: colors.primary }]}
                    >
                      Shared
                    </Text>
                  </View>
                )}
                {trip.isPublic && (
                  <View style={styles.publicBadge}>
                    <Feather name="globe" size={10} color="#42A5F5" />
                    <Text style={styles.publicText}>Public</Text>
                  </View>
                )}
                {isOwner && (
                  <TouchableOpacity
                    style={styles.manageButton}
                    onPress={(event) => {
                      event.stopPropagation();
                      onManageTrip?.(trip);
                    }}
                  >
                    <Feather
                      name="more-horizontal"
                      size={16}
                      color={colors.textMuted}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  loadingContainer: {
    paddingVertical: 40,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  accentBar: {
    width: 4,
  },
  cardContent: {
    flex: 1,
    padding: 14,
    gap: 6,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  tripTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A2E",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 10,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  infoText: {
    fontSize: 12,
    color: "#8A8A9D",
  },
  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 2,
  },
  daysText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#ACACAC",
  },
  publicBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  sharedBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  sharedText: {
    fontSize: 10,
    fontWeight: "700",
  },
  publicText: {
    fontSize: 10,
    color: "#42A5F5",
    fontWeight: "600",
  },
  manageButton: {
    marginLeft: "auto",
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});
