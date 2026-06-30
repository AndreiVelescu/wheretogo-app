import { useAppTheme } from "@/src/contexts/ThemeContext";
import type { WizardStep } from "@/src/features/trip/types";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function ProgressBar({ step }: { step: WizardStep }) {
  const { colors } = useAppTheme();
  return (
    <View
      style={[
        styles.wrap,
        { borderBottomColor: colors.border, backgroundColor: colors.card },
      ]}
    >
      {[1, 2, 3, 4].map((n) => (
        <View
          key={n}
          style={[
            styles.dot,
            { backgroundColor: colors.borderLight },
            n <= step && { backgroundColor: colors.primary },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  dot: {
    width: 28,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#eee",
  },
  dotActive: {
    backgroundColor: "#E53935",
  },
});
