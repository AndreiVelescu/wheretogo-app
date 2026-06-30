/**
 * 🎨 UI Components - Loader
 * Componentă pentru loading state
 */

import { useAppTheme } from "@/src/contexts/ThemeContext";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoaderProps {
  size?: "small" | "large";
  color?: string;
  text?: string;
}

export const Loader = ({ size = "large", color, text }: LoaderProps) => {
  const { colors } = useAppTheme();
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color || colors.primary} />
      {text && (
        <Text style={[styles.text, { color: colors.textSecondary }]}>
          {text}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 12,
    fontSize: 14,
    color: "#666",
  },
});
