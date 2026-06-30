import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useLocations } from "@/src/features/locations";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../ui/theme";

interface LocationItem {
  id: number;
  name: string;
  type?: string;
  address?: string;
  rating?: number;
  photos?: string[];
  lat?: number;
  lng?: number;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (location: LocationItem) => void;
  city?: string;
  currentLocationId?: number;
}

const LOCATION_TYPES = [
  { id: "all", label: "Toate" },
  { id: "restaurant", label: "Restaurante" },
  { id: "cafe", label: "Cafenele" },
  { id: "attraction", label: "Atracții" },
  { id: "museum", label: "Muzee" },
  { id: "park", label: "Parcuri" },
  { id: "bar", label: "Baruri" },
  { id: "hotel", label: "Hoteluri" },
];

export default function LocationPickerModal({
  visible,
  onClose,
  onSelect,
  city,
  currentLocationId,
}: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const {
    data: locationsData,
    isLoading,
    error,
  } = useLocations({
    type: selectedType === "all" ? undefined : selectedType,
    search: searchQuery || undefined,
  });

  const locations = locationsData?.data || [];
  const { colors } = useAppTheme();

  useEffect(() => {
    if (!visible) {
      setSearchQuery("");
      setSelectedType("all");
    }
  }, [visible]);

  const getLocationImage = (location: LocationItem): string => {
    if (location.photos && location.photos.length > 0) {
      const photo = location.photos[0];
      if (photo.startsWith("http")) return photo;
    }
    // Return placeholder based on type
    return `https://via.placeholder.com/100x100.png?text=${encodeURIComponent(
      location.type || "?",
    )}`;
  };

  const renderLocation = ({ item }: { item: LocationItem }) => {
    const isSelected = item.id === currentLocationId;

    return (
      <TouchableOpacity
        style={[
          styles.locationCard,
          { backgroundColor: colors.card },
          isSelected && styles.locationCardSelected,
          isSelected && { borderColor: colors.primary },
        ]}
        onPress={() => {
          onSelect(item);
          onClose();
        }}
        activeOpacity={0.8}
      >
        <Image
          source={{ uri: getLocationImage(item) }}
          style={styles.locationImage}
        />
        <View style={styles.locationInfo}>
          <Text
            style={[styles.locationName, { color: colors.text }]}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          {item.type && (
            <Text style={[styles.locationType, { color: colors.primary }]}>
              {item.type}
            </Text>
          )}
          {item.address && (
            <Text
              style={[styles.locationAddress, { color: colors.textMuted }]}
              numberOfLines={1}
            >
              {item.address}
            </Text>
          )}
          {item.rating !== undefined && item.rating > 0 && (
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={12} color="#FFD700" />
              <Text style={[styles.ratingText, { color: colors.text }]}>
                {item.rating.toFixed(1)}
              </Text>
            </View>
          )}
        </View>
        {isSelected && (
          <View
            style={[styles.selectedBadge, { backgroundColor: colors.primary }]}
          >
            <Ionicons name="checkmark" size={16} color="#fff" />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modal, { backgroundColor: colors.background }]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>
              Alege o locație
            </Text>
            <TouchableOpacity
              style={[styles.closeBtn, { backgroundColor: colors.card }]}
              onPress={onClose}
            >
              <Ionicons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          {/* Search */}
          <View
            style={[styles.searchSection, { borderBottomColor: colors.border }]}
          >
            <View style={[styles.searchBox, { backgroundColor: colors.card }]}>
              <Ionicons name="search" size={20} color={colors.textMuted} />
              <TextInput
                style={[styles.searchInput, { color: colors.text }]}
                placeholder="Caută locații..."
                placeholderTextColor={colors.textMuted}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery("")}>
                  <Ionicons
                    name="close-circle"
                    size={18}
                    color={colors.textMuted}
                  />
                </TouchableOpacity>
              )}
            </View>

            {/* Type Filter */}
            <FlatList
              data={LOCATION_TYPES}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.typeFilters}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.typeChip,
                    { backgroundColor: colors.borderLight },
                    selectedType === item.id && styles.typeChipActive,
                    selectedType === item.id && {
                      backgroundColor: colors.primary,
                    },
                  ]}
                  onPress={() => setSelectedType(item.id)}
                >
                  <Text
                    style={[
                      styles.typeChipText,
                      { color: colors.textSecondary },
                      selectedType === item.id && styles.typeChipTextActive,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Locations List */}
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={colors.primary} />
              <Text style={[styles.loadingText, { color: colors.textMuted }]}>
                Se încarcă locațiile...
              </Text>
            </View>
          ) : error ? (
            <View style={styles.emptyContainer}>
              <Ionicons
                name="alert-circle-outline"
                size={48}
                color={colors.error || colors.textMuted}
              />
              <Text style={[styles.emptyText, { color: colors.textMuted }]}>
                Nu am putut încărca locațiile.
                {"\n"}
                Încearcă din nou.
              </Text>
            </View>
          ) : locations.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons
                name="location-outline"
                size={48}
                color={colors.textMuted}
              />
              <Text style={[styles.emptyText, { color: colors.textMuted }]}>
                Nu am găsit locații.{"\n"}
                Încearcă o altă căutare.
              </Text>
            </View>
          ) : (
            <FlatList
              data={locations}
              keyExtractor={(item) => String(item.id)}
              renderItem={renderLocation}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: theme.colors.bg,
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
    maxHeight: "90%",
    minHeight: "70%",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: theme.colors.text,
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.card,
    alignItems: "center",
    justifyContent: "center",
    ...theme.shadow.soft,
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
    ...theme.shadow.soft,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: theme.colors.text,
  },
  typeFilters: {
    paddingTop: 12,
    gap: 8,
  },
  typeChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: theme.colors.card,
    marginRight: 8,
  },
  typeChipActive: {
    backgroundColor: theme.colors.primary,
  },
  typeChipText: {
    fontSize: 13,
    fontWeight: "600",
    color: theme.colors.subtext,
  },
  typeChipTextActive: {
    color: "#fff",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  locationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: 12,
    ...theme.shadow.soft,
  },
  locationCardSelected: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  locationImage: {
    width: 64,
    height: 64,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.border,
  },
  locationInfo: {
    flex: 1,
    marginLeft: 12,
  },
  locationName: {
    fontSize: 15,
    fontWeight: "600",
    color: theme.colors.text,
    marginBottom: 2,
  },
  locationType: {
    fontSize: 12,
    color: theme.colors.primary,
    fontWeight: "500",
    marginBottom: 2,
  },
  locationAddress: {
    fontSize: 12,
    color: theme.colors.muted,
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "600",
    color: theme.colors.text,
  },
  selectedBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  separator: {
    height: 10,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: theme.colors.muted,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 14,
    color: theme.colors.muted,
    textAlign: "center",
    lineHeight: 20,
  },
});
