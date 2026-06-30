/**
 * 📊 Profile Stats Row
 */

import { useAppTheme } from "@/src/contexts/ThemeContext";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ProfileStatsData {
  posts: number;
  trips: number;
  followers: number;
  following: number;
}

interface ProfileStatsProps {
  stats: ProfileStatsData;
  onStatPress?: (stat: keyof ProfileStatsData) => void;
}

export function ProfileStats({ stats, onStatPress }: ProfileStatsProps) {
  const { colors } = useAppTheme();
  const items: { key: keyof ProfileStatsData; label: string }[] = [
    { key: "posts", label: "Posts" },
    { key: "trips", label: "Trips" },
    { key: "followers", label: "Followers" },
    { key: "following", label: "Following" },
  ];

  return (
    <View style={styles.container}>
      {items.map((item, i) => (
        <React.Fragment key={item.key}>
          {i > 0 && <View style={styles.divider} />}
          <TouchableOpacity
            style={styles.stat}
            activeOpacity={0.6}
            onPress={() => onStatPress?.(item.key)}
            disabled={!onStatPress}
          >
            <Text style={[styles.value, { color: colors.text }]}>
              {formatCount(stats[item.key])}
            </Text>
            <Text style={[styles.label, { color: colors.textMuted }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        </React.Fragment>
      ))}
    </View>
  );
}

function formatCount(n: number): string {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 10_000) return Math.floor(n / 1_000) + "K";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  stat: {
    flex: 1,
    alignItems: "center",
  },
  value: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A2E",
    marginBottom: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: "#8A8A9D",
  },
  divider: {
    width: 0,
    height: 0,
  },
});
