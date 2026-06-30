import { useAppTheme } from "@/src/contexts/ThemeContext";
import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export default function SectionCard(props: ViewProps) {
  const { colors } = useAppTheme();
  return (
    <View
      {...props}
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
        props.style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    backgroundColor: "#fff",
  },
});
