import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useUserStatus } from "@/src/hooks/useUserStatus";
import React from "react";
import { StyleSheet, View } from "react-native";

interface UserStatusIndicatorProps {
  userId: number;
  size?: "small" | "medium" | "large";
  showOffline?: boolean;
}

export default function UserStatusIndicator({
  userId,
  size = "medium",
  showOffline = false,
}: UserStatusIndicatorProps) {
  const { isOnline, isAway } = useUserStatus(userId);
  const { colors } = useAppTheme();

  // Don't show indicator if offline and showOffline is false
  if (!isOnline && !isAway && !showOffline) {
    return null;
  }

  const dotSize = size === "small" ? 8 : size === "large" ? 14 : 10;

  const getStatusColor = () => {
    if (isOnline) return "#4CAF50";
    if (isAway) return "#FFA726";
    return "#9E9E9E";
  };

  return (
    <View
      style={[
        styles.statusDot,
        {
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize / 2,
          backgroundColor: getStatusColor(),
          borderColor: colors.card,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  statusDot: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
});
