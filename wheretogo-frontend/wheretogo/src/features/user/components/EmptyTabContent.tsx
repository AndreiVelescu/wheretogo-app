/**
 * 🫥 Empty State — reusable across profile tabs
 */

import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface EmptyTabContentProps {
  icon: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyTabContent({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyTabContentProps) {
  const { colors } = useAppTheme();
  return (
    <View style={styles.container}>
      <View
        style={[styles.iconCircle, { backgroundColor: colors.primarySoft }]}
      >
        <Feather name={icon as any} size={36} color={colors.primary} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.description, { color: colors.textSecondary }]}>
        {description}
      </Text>
      {actionLabel && onAction && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={onAction}
        >
          <Feather name="plus" size={16} color={colors.primaryText} />
          <Text style={[styles.buttonText, { color: colors.primaryText }]}>
            {actionLabel}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 32,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#FFF0F0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A2E",
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: "#8A8A9D",
    textAlign: "center",
    lineHeight: 19,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
