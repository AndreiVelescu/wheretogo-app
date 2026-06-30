import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  Linking,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../ui/theme";

interface LocationInfo {
  id?: number;
  name: string;
  type?: string;
  rating?: number;
  photos?: string[];
  googleUrl?: string;
  address?: string;
  lat?: number;
  lng?: number;
  description?: string;
  openHours?: string;
  phone?: string;
  website?: string;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  location: LocationInfo | null;
  stopInfo?: {
    arrivalTime?: string;
    departureTime?: string;
    transportMode?: string;
    notes?: string;
  };
  onEdit?: () => void;
  onNavigate?: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function LocationDetailModal({
  visible,
  onClose,
  location,
  stopInfo,
  onEdit,
  onNavigate,
}: Props) {
  if (!location) return null;

  const { colors } = useAppTheme();

  const photos = location.photos?.filter(Boolean) || [];
  const hasPhotos = photos.length > 0;

  const openMaps = () => {
    if (location.lat && location.lng) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
      Linking.openURL(url);
    } else if (location.googleUrl) {
      Linking.openURL(location.googleUrl);
    }
  };

  const openWebsite = () => {
    if (location.website) {
      Linking.openURL(location.website);
    }
  };

  const callPhone = () => {
    if (location.phone) {
      Linking.openURL(`tel:${location.phone}`);
    }
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
          {/* Header with close button */}
          <View style={styles.header}>
            <TouchableOpacity
              style={[styles.closeBtn, { backgroundColor: colors.card }]}
              onPress={onClose}
            >
              <Ionicons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
            {onEdit && (
              <TouchableOpacity
                style={[
                  styles.editBtn,
                  { backgroundColor: colors.primarySoft },
                ]}
                onPress={onEdit}
              >
                <Ionicons name="pencil" size={20} color={colors.primary} />
              </TouchableOpacity>
            )}
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
          >
            {/* Photo Gallery */}
            {hasPhotos && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                style={styles.gallery}
              >
                {photos.slice(0, 5).map((photo, idx) => (
                  <Image
                    key={idx}
                    source={{ uri: photo }}
                    style={styles.galleryImage}
                    resizeMode="cover"
                  />
                ))}
              </ScrollView>
            )}

            {/* Location Info Card */}
            <View style={[styles.infoCard, { backgroundColor: colors.card }]}>
              <Text style={[styles.locationName, { color: colors.text }]}>
                {location.name}
              </Text>

              {location.type && (
                <View
                  style={[
                    styles.typeChip,
                    { backgroundColor: colors.primarySoft },
                  ]}
                >
                  <Text style={[styles.typeText, { color: colors.primary }]}>
                    {location.type}
                  </Text>
                </View>
              )}

              {location.rating !== undefined && location.rating > 0 && (
                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={[styles.ratingText, { color: colors.text }]}>
                    {location.rating.toFixed(1)}
                  </Text>
                </View>
              )}

              {location.address && (
                <View style={styles.infoRow}>
                  <Ionicons
                    name="location-outline"
                    size={18}
                    color={colors.textSecondary}
                  />
                  <Text
                    style={[styles.infoText, { color: colors.textSecondary }]}
                  >
                    {location.address}
                  </Text>
                </View>
              )}

              {location.openHours && (
                <View style={styles.infoRow}>
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color={colors.textSecondary}
                  />
                  <Text
                    style={[styles.infoText, { color: colors.textSecondary }]}
                  >
                    {location.openHours}
                  </Text>
                </View>
              )}

              {location.phone && (
                <TouchableOpacity style={styles.infoRow} onPress={callPhone}>
                  <Ionicons
                    name="call-outline"
                    size={18}
                    color={colors.textSecondary}
                  />
                  <Text
                    style={[
                      styles.infoText,
                      styles.linkText,
                      { color: colors.primary },
                    ]}
                  >
                    {location.phone}
                  </Text>
                </TouchableOpacity>
              )}

              {location.website && (
                <TouchableOpacity style={styles.infoRow} onPress={openWebsite}>
                  <Ionicons
                    name="globe-outline"
                    size={18}
                    color={colors.textSecondary}
                  />
                  <Text
                    style={[
                      styles.infoText,
                      styles.linkText,
                      { color: colors.primary },
                    ]}
                    numberOfLines={1}
                  >
                    {location.website}
                  </Text>
                </TouchableOpacity>
              )}

              {location.description && (
                <Text
                  style={[styles.description, { color: colors.textSecondary }]}
                >
                  {location.description}
                </Text>
              )}
            </View>

            {/* Stop Schedule Info */}
            {stopInfo && (
              <View
                style={[styles.scheduleCard, { backgroundColor: colors.card }]}
              >
                <Text style={[styles.scheduleTitle, { color: colors.text }]}>
                  Program vizită
                </Text>

                <View style={styles.scheduleRow}>
                  {stopInfo.arrivalTime && (
                    <View
                      style={[
                        styles.timeBox,
                        { backgroundColor: colors.backgroundSecondary },
                      ]}
                    >
                      <Text
                        style={[styles.timeLabel, { color: colors.textMuted }]}
                      >
                        Sosire
                      </Text>
                      <Text style={[styles.timeValue, { color: colors.text }]}>
                        {stopInfo.arrivalTime}
                      </Text>
                    </View>
                  )}
                  {stopInfo.departureTime && (
                    <View
                      style={[
                        styles.timeBox,
                        { backgroundColor: colors.backgroundSecondary },
                      ]}
                    >
                      <Text
                        style={[styles.timeLabel, { color: colors.textMuted }]}
                      >
                        Plecare
                      </Text>
                      <Text style={[styles.timeValue, { color: colors.text }]}>
                        {stopInfo.departureTime}
                      </Text>
                    </View>
                  )}
                </View>

                {stopInfo.transportMode && (
                  <View style={styles.transportRow}>
                    <Ionicons
                      name={
                        stopInfo.transportMode.toLowerCase().includes("walk")
                          ? "walk"
                          : stopInfo.transportMode.toLowerCase().includes("car")
                          ? "car"
                          : stopInfo.transportMode.toLowerCase().includes("bus")
                          ? "bus"
                          : "navigate"
                      }
                      size={18}
                      color={colors.primary}
                    />
                    <Text
                      style={[styles.transportText, { color: colors.text }]}
                    >
                      {stopInfo.transportMode}
                    </Text>
                  </View>
                )}

                {stopInfo.notes && (
                  <View
                    style={[
                      styles.notesBox,
                      { backgroundColor: colors.backgroundSecondary },
                    ]}
                  >
                    <Text
                      style={[styles.notesLabel, { color: colors.textMuted }]}
                    >
                      Note
                    </Text>
                    <Text
                      style={[
                        styles.notesText,
                        { color: colors.textSecondary },
                      ]}
                    >
                      {stopInfo.notes}
                    </Text>
                  </View>
                )}
              </View>
            )}
          </ScrollView>

          {/* Action Buttons */}
          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.navButton, { backgroundColor: colors.primary }]}
              onPress={openMaps}
            >
              <Ionicons name="navigate" size={20} color="#fff" />
              <Text style={styles.navButtonText}>Navigare</Text>
            </TouchableOpacity>

            {onEdit && (
              <TouchableOpacity
                style={[
                  styles.editButton,
                  { backgroundColor: colors.card, borderColor: colors.primary },
                ]}
                onPress={onEdit}
              >
                <Ionicons
                  name="create-outline"
                  size={20}
                  color={colors.primary}
                />
                <Text
                  style={[styles.editButtonText, { color: colors.primary }]}
                >
                  Modifică
                </Text>
              </TouchableOpacity>
            )}
          </View>
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
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
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
  editBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  gallery: {
    marginBottom: 16,
    borderRadius: theme.radius.md,
    overflow: "hidden",
  },
  galleryImage: {
    width: SCREEN_WIDTH - 32,
    height: 200,
    borderRadius: theme.radius.md,
    marginRight: 8,
  },
  infoCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: 16,
    marginBottom: 12,
    ...theme.shadow.soft,
  },
  locationName: {
    fontSize: 22,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: 8,
  },
  typeChip: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primarySoft,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
  },
  typeText: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: "600",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.text,
    marginLeft: 4,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: theme.colors.subtext,
    marginLeft: 8,
    flex: 1,
  },
  linkText: {
    color: theme.colors.primary,
    textDecorationLine: "underline",
  },
  description: {
    fontSize: 14,
    color: theme.colors.subtext,
    lineHeight: 20,
    marginTop: 12,
  },
  scheduleCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: 16,
    marginBottom: 12,
    ...theme.shadow.soft,
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.colors.text,
    marginBottom: 12,
  },
  scheduleRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 12,
  },
  timeBox: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    borderRadius: theme.radius.sm,
    padding: 12,
    alignItems: "center",
  },
  timeLabel: {
    fontSize: 12,
    color: theme.colors.muted,
    marginBottom: 4,
  },
  timeValue: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.colors.text,
  },
  transportRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  transportText: {
    fontSize: 14,
    color: theme.colors.text,
    marginLeft: 8,
  },
  notesBox: {
    backgroundColor: theme.colors.bg,
    borderRadius: theme.radius.sm,
    padding: 12,
  },
  notesLabel: {
    fontSize: 12,
    color: theme.colors.muted,
    marginBottom: 4,
  },
  notesText: {
    fontSize: 14,
    color: theme.colors.subtext,
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  navButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: theme.radius.md,
    gap: 8,
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  editButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.card,
    paddingVertical: 14,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    gap: 8,
  },
  editButtonText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
});
