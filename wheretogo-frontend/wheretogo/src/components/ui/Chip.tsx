import { useAppTheme } from "@/src/contexts/ThemeContext";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  label: string;
  active?: boolean;
  onPress: () => void;
};

export default function Chip({ label, active, onPress }: Props) {
  const { colors } = useAppTheme();
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        { backgroundColor: colors.borderLight, borderColor: colors.border },
        active && {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          { color: colors.text },
          active && { color: "#fff" },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#eee",
  },
  chipActive: {
    backgroundColor: "#E53935",
    borderColor: "#E53935",
  },
  text: { color: "#333", fontWeight: "700" },
  textActive: { color: "#fff" },
});
