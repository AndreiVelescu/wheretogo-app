/**
 * 📅 Bookings Screen
 * Exemplu de screen FĂRĂ logică business
 */

import { FlatList, StyleSheet, Text, View } from "react-native";
import { Loader, ScreenWrapper } from "../components";
import { useBookings } from "../features";

export const BookingsScreen = () => {
  const { data, isLoading, error } = useBookings();

  if (isLoading) {
    return <Loader text="Loading bookings..." />;
  }

  if (error) {
    return (
      <ScreenWrapper>
        <Text style={styles.error}>Error loading bookings</Text>
      </ScreenWrapper>
    );
  }

  const bookings = data?.data || [];

  if (bookings.length === 0) {
    return (
      <ScreenWrapper>
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No bookings yet</Text>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper scrollable={false}>
      <Text style={styles.title}>My Bookings</Text>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Booking #{item.id}</Text>
            <Text style={styles.cardInfo}>Date: {item.date}</Text>
            <Text style={styles.cardInfo}>Time: {item.time}</Text>
            <Text style={styles.cardInfo}>Persons: {item.persons}</Text>
            <Text style={[styles.status, styles[item.status.toLowerCase() as keyof typeof styles]]}>
              {item.status}
            </Text>
          </View>
        )}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardInfo: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
    textTransform: "uppercase",
  },
  pending: {
    color: "#FF9500",
  },
  confirmed: {
    color: "#34C759",
  },
  cancelled: {
    color: "#FF3B30",
  },
  error: {
    color: "#FF3B30",
    textAlign: "center",
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});
