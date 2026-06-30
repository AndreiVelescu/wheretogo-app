import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../ui/theme";
import { getStopImage } from "./utils";

export interface Stop {
  id?: number;
  order?: number;
  customName?: string;
  address?: string;
  arrivalTime?: string;
  departureTime?: string;
  transportMode?: string;
  notes?: string;
  location?: {
    id?: number;
    name?: string;
    type?: string;
    rating?: number;
    photos?: string[];
    address?: string;
  };
}

interface StopCardProps {
  stop: Stop;
  index: number;
  showConnector?: boolean;
  onPress: (stop: Stop) => void;
  onEdit: (stop: Stop) => void;
  canEdit?: boolean;
  /** PanResponder handlers for the drag grip (enables reorder). */
  dragHandleProps?: any;
  /** Visual state while this card is being dragged. */
  isDragging?: boolean;
}

export default function StopCard({
  stop,
  index,
  showConnector = false,
  onPress,
  onEdit,
  canEdit = true,
  dragHandleProps,
  isDragging = false,
}: StopCardProps) {
  const { colors, isDark } = useAppTheme();
  const stopImage = getStopImage(stop);
  const rating = stop.location?.rating;

  const getTransportIcon = (mode?: string) => {
    switch ((mode || "").toUpperCase()) {
      case "WALK":
      case "WALKING":
        return "walk-outline";
      case "CAR":
      case "DRIVING":
        return "car-outline";
      case "PUBLIC_TRANSPORT":
      case "TRANSIT":
        return "bus-outline";
      case "BIKE":
      case "BICYCLE":
        return "bicycle-outline";
      case "TAXI":
        return "car-sport-outline";
      default:
        return "navigate-outline";
    }
  };

  const getTransportLabel = (mode?: string) => {
    switch ((mode || "").toUpperCase()) {
      case "WALK":
      case "WALKING":
        return "Pe jos";
      case "CAR":
      case "DRIVING":
        return "Mașină";
      case "PUBLIC_TRANSPORT":
      case "TRANSIT":
        return "Transport public";
      case "BIKE":
      case "BICYCLE":
        return "Bicicletă";
      case "TAXI":
        return "Taxi";
      default:
        return mode || "";
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.stopCard,
        {
          backgroundColor: colors.card,
          borderColor: isDragging ? colors.primary : colors.border,
          shadowOpacity: isDark ? 0 : 0.06,
        },
        isDragging && styles.stopCardDragging,
      ]}
      onPress={() => onPress(stop)}
      activeOpacity={0.9}
    >
      {/* Connecting line between stops */}
      {showConnector && (
        <View
          style={[styles.connectorLine, { backgroundColor: colors.primary }]}
        />
      )}

      <View style={styles.stopCardRow}>
        {/* Order badge */}
        <View style={styles.stopIndexWrapper}>
          <View style={[styles.stopIndex, { backgroundColor: colors.primary }]}>
            <Text style={styles.stopIndexText}>{stop.order || index + 1}</Text>
          </View>
        </View>

        {/* Image */}
        {stopImage ? (
          <Image source={{ uri: stopImage }} style={styles.stopImage} />
        ) : (
          <View
            style={[
              styles.stopImage,
              styles.stopImagePlaceholder,
              { backgroundColor: colors.primarySoft },
            ]}
          >
            <Ionicons
              name="location-outline"
              size={28}
              color={colors.primary}
            />
          </View>
        )}

        {/* Info */}
        <View style={styles.stopInfo}>
          <View style={styles.stopTitleRow}>
            <Text
              style={[styles.stopTitle, { color: colors.text }]}
              numberOfLines={1}
            >
              {stop.customName || stop.location?.name || "Locație"}
            </Text>
            {rating && (
              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={12} color="#F59E0B" />
                <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
              </View>
            )}
          </View>

          {(stop.address || stop.location?.address) && (
            <View style={styles.addressRow}>
              <Ionicons
                name="location-outline"
                size={12}
                color={colors.textMuted}
              />
              <Text
                style={[styles.stopAddress, { color: colors.textSecondary }]}
                numberOfLines={1}
              >
                {stop.address || stop.location?.address}
              </Text>
            </View>
          )}

          <View style={styles.stopMetaRow}>
            {stop.arrivalTime && stop.departureTime && (
              <View style={styles.timeBadge}>
                <Ionicons
                  name="time-outline"
                  size={12}
                  color={colors.primary}
                />
                <Text style={[styles.stopTime, { color: colors.primary }]}>
                  {stop.arrivalTime} – {stop.departureTime}
                </Text>
              </View>
            )}
            {!!stop.notes && (
              <View
                style={[
                  styles.noteBadge,
                  { backgroundColor: colors.primarySoft },
                ]}
              >
                <Ionicons
                  name="document-text-outline"
                  size={12}
                  color={colors.primary}
                />
                <Text style={[styles.noteText, { color: colors.primary }]}>
                  Notes
                </Text>
              </View>
            )}
            {!!stop.transportMode && (
              <View
                style={[
                  styles.transportBadge,
                  { backgroundColor: colors.borderLight },
                ]}
              >
                <Ionicons
                  name={getTransportIcon(stop.transportMode) as any}
                  size={12}
                  color={colors.textSecondary}
                />
                <Text
                  style={[
                    styles.transportText,
                    { color: colors.textSecondary },
                  ]}
                >
                  {getTransportLabel(stop.transportMode)}
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Actions */}
        <View style={styles.stopActions}>
          {canEdit && dragHandleProps && (
            <View
              style={styles.dragHandle}
              {...dragHandleProps}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 6 }}
            >
              <Ionicons
                name="reorder-three-outline"
                size={22}
                color={colors.textMuted}
              />
            </View>
          )}
          {canEdit ? (
            <TouchableOpacity
              style={[
                styles.editStopBtn,
                { backgroundColor: colors.primarySoft },
              ]}
              onPress={(e) => {
                e.stopPropagation();
                onEdit(stop);
              }}
            >
              <Ionicons
                name="create-outline"
                size={18}
                color={colors.primary}
              />
            </TouchableOpacity>
          ) : (
            <View
              style={[
                styles.readOnlyBadge,
                { backgroundColor: colors.borderLight },
              ]}
            >
              <Ionicons
                name="eye-outline"
                size={14}
                color={colors.textSecondary}
              />
            </View>
          )}
          <Ionicons
            name="chevron-forward"
            size={20}
            color={colors.border}
            style={styles.chevron}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  stopCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    marginBottom: 12,
    overflow: "visible",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  connectorLine: {
    position: "absolute",
    top: -12,
    left: 22,
    width: 2,
    height: 12,
    backgroundColor: theme.colors.primary,
    opacity: 0.3,
  },
  stopCardRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  stopIndexWrapper: {
    marginRight: 12,
  },
  stopIndex: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: theme.colors.primary,
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  stopIndexText: { color: "#fff", fontSize: 13, fontWeight: "800" },
  stopImage: {
    width: 68,
    height: 68,
    borderRadius: 14,
    marginRight: 12,
  },
  stopImagePlaceholder: {
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  stopInfo: {
    flex: 1,
    marginRight: 4,
  },
  stopTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  stopTitle: {
    fontWeight: "700",
    color: "#111827",
    fontSize: 15,
    flex: 1,
    letterSpacing: -0.2,
  },
  ratingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    marginLeft: 8,
    gap: 3,
  },
  ratingText: {
    color: "#B45309",
    fontSize: 12,
    fontWeight: "600",
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 6,
  },
  stopAddress: {
    color: "#6B7280",
    fontSize: 13,
    flex: 1,
  },
  stopMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  timeBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  stopTime: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: "600",
  },
  transportBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    gap: 4,
  },
  transportText: {
    color: "#6B7280",
    fontSize: 11,
    fontWeight: "600",
  },
  stopActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  stopCardDragging: {
    borderWidth: 2,
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 12,
    opacity: 0.97,
  },
  dragHandle: {
    paddingHorizontal: 2,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  editStopBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  chevron: {
    marginLeft: 2,
  },
  noteBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  noteText: {
    fontSize: 11,
    fontWeight: "700",
  },
  readOnlyBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
});
