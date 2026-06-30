/**
 * ⚙️ Profile Menu Item
 */

import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProfileMenuItemProps {
  icon: string;
  label: string;
  onPress: () => void;
  color?: string;
  showArrow?: boolean;
  badge?: string;
}

export function ProfileMenuItem({
  icon,
  label,
  onPress,
  color,
  showArrow = true,
  badge,
}: ProfileMenuItemProps) {
  const { colors } = useAppTheme();
  const iconColor = color || colors.text;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View style={[styles.iconCircle, { backgroundColor: iconColor + "12" }]}>
        <Feather name={icon as any} size={18} color={iconColor} />
      </View>
      <Text style={[styles.label, { color: iconColor }]}>{label}</Text>
      <View style={styles.right}>
        {badge && (
          <View style={[styles.badge, { backgroundColor: colors.badge }]}>
            <Text style={[styles.badgeText, { color: colors.badgeText }]}>
              {badge}
            </Text>
          </View>
        )}
        {showArrow && (
          <Feather name="chevron-right" size={18} color={colors.textMuted} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    backgroundColor: "#FF6B6B",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 22,
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
});
