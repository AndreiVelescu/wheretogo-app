import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  label: string;
  icon?: string;
  active?: boolean;
  onPress: () => void;
};

export default function PillOption({ label, icon, active, onPress }: Props) {
  const { colors } = useAppTheme();
  return (
    <TouchableOpacity
      style={[
        styles.pill,
        { borderColor: colors.border, backgroundColor: colors.card },
        active && {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.row}>
        {icon ? (
          <Ionicons
            name={icon as any}
            size={18}
            color={active ? "#fff" : colors.primary}
          />
        ) : null}
        <Text
          style={[
            styles.text,
            { color: colors.text },
            active && { color: "#fff" },
          ]}
        >
          {label}
        </Text>
        {active ? <Ionicons name="checkmark" size={18} color="#fff" /> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  pillActive: {
    backgroundColor: "#E53935",
    borderColor: "#E53935",
  },
  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  text: { color: "#333", fontWeight: "700" },
  textActive: { color: "#fff" },
});
