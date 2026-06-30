import { FlatList, StyleSheet, Text, View } from "react-native";
import { Loader, ScreenWrapper } from "../components";
import { useTrendingLocations } from "../features";

export const HomeScreen = () => {
  const { data, isLoading, error } = useTrendingLocations(10);

  if (isLoading) {
    return <Loader text="Loading locations..." />;
  }

  if (error) {
    return (
      <ScreenWrapper>
        <Text style={styles.error}>Error loading locations</Text>
      </ScreenWrapper>
    );
  }

  const locations = data?.data || [];

  return (
    <ScreenWrapper scrollable={false}>
      <Text style={styles.title}>Trending Locations</Text>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>{item.type}</Text>
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
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  error: {
    color: "#FF3B30",
    textAlign: "center",
  },
});
