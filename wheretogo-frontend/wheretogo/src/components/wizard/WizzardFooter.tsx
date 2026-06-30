import { useAppTheme } from "@/src/contexts/ThemeContext";
import type { WizardStep } from "@/src/features/trip/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  step: WizardStep;
  canNext: boolean;
  isGenerating: boolean;
  onBack: () => void;
  onNext: () => void;
  onGenerate: () => void;
};

export default function WizardFooter({
  step,
  canNext,
  isGenerating,
  onBack,
  onNext,
  onGenerate,
}: Props) {
  const isFirst = step === 1;
  const isLast = step === 4;
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.footer,
        { borderTopColor: colors.border, backgroundColor: colors.card },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.navBtn,
          { backgroundColor: colors.borderLight, borderColor: colors.border },
          isFirst && styles.navBtnDisabled,
        ]}
        onPress={onBack}
        disabled={isFirst}
      >
        <Ionicons
          name="arrow-back"
          size={18}
          color={isFirst ? colors.textMuted : colors.text}
        />
        <Text
          style={[
            styles.navText,
            { color: colors.text },
            isFirst && { color: colors.textMuted },
          ]}
        >
          Înapoi
        </Text>
      </TouchableOpacity>

      {!isLast ? (
        <TouchableOpacity
          style={[
            styles.primaryBtn,
            { backgroundColor: colors.primary },
            !canNext && styles.primaryBtnDisabled,
          ]}
          onPress={onNext}
          disabled={!canNext}
        >
          <Text style={styles.primaryText}>Următorul</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            styles.primaryBtn,
            { backgroundColor: colors.primary },
            isGenerating && styles.primaryBtnDisabled,
          ]}
          onPress={onGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Ionicons name="sparkles" size={18} color="#fff" />
          )}
          <Text style={styles.primaryText}>
            {isGenerating ? "Se generează..." : "Generează"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  navBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#eee",
  },
  navBtnDisabled: { opacity: 0.6 },
  navText: { fontWeight: "800", color: "#333" },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: "#E53935",
  },
  primaryBtnDisabled: { opacity: 0.6 },
  primaryText: { color: "#fff", fontWeight: "900" },
});
