/**
 * 🔘 Profile Tab Bar — Instagram-style icon tabs with underline
 */

import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export type ProfileTab = "posts" | "trips" | "favorites";

interface ProfileTabBarProps {
  active: ProfileTab;
  onChange: (tab: ProfileTab) => void;
}

const TABS: { key: ProfileTab; icon: string }[] = [
  { key: "posts", icon: "grid" },
  { key: "trips", icon: "map" },
  { key: "favorites", icon: "bookmark" },
];

export function ProfileTabBar({ active, onChange }: ProfileTabBarProps) {
  const { colors } = useAppTheme();
  return (
    <View
      style={[
        styles.container,
        { borderTopColor: colors.border, backgroundColor: colors.background },
      ]}
    >
      {TABS.map((tab) => {
        const isActive = active === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onChange(tab.key)}
            activeOpacity={0.7}
          >
            <Feather
              name={tab.icon as any}
              size={22}
              color={isActive ? colors.text : colors.textMuted}
            />
            {isActive && (
              <View
                style={[styles.indicator, { backgroundColor: colors.text }]}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#DBDBDB",
    backgroundColor: "#FAFAFA",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    position: "relative",
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    left: "20%",
    right: "20%",
    height: 1.5,
    backgroundColor: "#1A1A2E",
    borderRadius: 1,
  },
});
