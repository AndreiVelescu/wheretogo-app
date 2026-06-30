import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../ui/theme";

interface TripHeaderProps {
  title: string;
  city?: string;
  dateRange?: string;
  collaboratorsCount: number;
  onBack: () => void;
  onCollaborators: (buttonPosition: {
    x: number;
    y: number;
    width: number;
    height: number;
  }) => void;
  hideCollaboratorsBtn?: boolean;
}

export default function TripHeader({
  title,
  city,
  dateRange,
  collaboratorsCount,
  onBack,
  onCollaborators,
  hideCollaboratorsBtn = false,
}: TripHeaderProps) {
  const collaboratorsBtnRef = useRef<View>(null);
  const { colors, isDark } = useAppTheme();

  const handleCollaboratorsPress = () => {
    collaboratorsBtnRef.current?.measureInWindow((x, y, width, height) => {
      onCollaborators({ x, y, width, height });
    });
  };

  return (
    <>
      {/* Back button */}
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: colors.card }]}
        onPress={onBack}
        accessibilityRole="button"
        accessibilityLabel="Înapoi la tripuri"
      >
        <Ionicons name="arrow-back" size={20} color={colors.text} />
      </TouchableOpacity>

      {/* Top action bar - collaborators */}
      {!hideCollaboratorsBtn && (
        <View style={styles.topBar}>
          <TouchableOpacity
            ref={collaboratorsBtnRef as any}
            style={[styles.iconBtn, { backgroundColor: colors.card }]}
            onPress={handleCollaboratorsPress}
          >
            <Ionicons name="people-outline" size={22} color={colors.text} />
            {collaboratorsCount > 0 && (
              <View style={[styles.badge, { backgroundColor: colors.primary }]}>
                <Text style={styles.badgeText}>{collaboratorsCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export function TripInfoCard({
  title,
  city,
  dateRange,
}: {
  title: string;
  city?: string;
  dateRange?: string;
}) {
  const { colors, isDark } = useAppTheme();
  return (
    <View
      style={[
        styles.headerCard,
        { backgroundColor: colors.card, shadowOpacity: isDark ? 0 : 0.05 },
      ]}
    >
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      {!!city && (
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          {city}
        </Text>
      )}
      {!!dateRange && (
        <Text style={[styles.dateRange, { color: colors.textMuted }]}>
          {dateRange}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 52,
    left: 16,
    zIndex: 5,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  topBar: {
    position: "absolute",
    top: 52,
    right: 16,
    zIndex: 5,
    flexDirection: "row",
    gap: 10,
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
  headerCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "100%",
    padding: 14,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
    letterSpacing: -0.3,
  },
  subtitle: { color: "#6B7280", marginTop: 3, fontSize: 14 },
  dateRange: { color: "#9CA3AF", marginTop: 3, fontSize: 13 },
});
