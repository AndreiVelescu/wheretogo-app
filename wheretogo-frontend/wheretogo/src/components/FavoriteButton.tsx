import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { useAddFavorite, useRemoveFavorite } from "../features/favorites";

interface FavoriteButtonProps {
  locationId: number | string;
  isFavorited: boolean;
  size?: number;
  color?: string;
  onPress?: () => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  locationId,
  isFavorited,
  size = 24,
  color = "#ff6b6b",
  onPress,
}) => {
  const addFavorite = useAddFavorite();
  const removeFavorite = useRemoveFavorite();
  const { colors, isDark } = useAppTheme();

  const isLoading = addFavorite.isPending || removeFavorite.isPending;

  const handlePress = async () => {
    if (isLoading) return;
    try {
      const numericId =
        typeof locationId === "string" ? parseInt(locationId, 10) : locationId;

      if (isFavorited) {
        await removeFavorite.mutateAsync({ locationId: numericId });
      } else {
        await addFavorite.mutateAsync(numericId);
      }

      // Call the onPress callback after successful operation
      if (onPress) {
        onPress();
      }
    } catch (error) {
      console.error("❌ Error toggling favorite:", error);
      // TODO: Add user-friendly error handling (toast/alert)
    }
  };

  if (isLoading) {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: isDark
              ? "rgba(30,33,48,0.9)"
              : "rgba(255,255,255,0.9)",
            shadowColor: colors.shadow,
          },
        ]}
        disabled
      >
        <ActivityIndicator size="small" color={color} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isDark
            ? "rgba(30,33,48,0.9)"
            : "rgba(255,255,255,0.9)",
          shadowColor: colors.shadow,
        },
      ]}
      onPress={handlePress}
    >
      <Ionicons
        name={isFavorited ? "heart" : "heart-outline"}
        size={size}
        color={isFavorited ? "#E53935" : "#999"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 40,
    minHeight: 40,
  },
});
