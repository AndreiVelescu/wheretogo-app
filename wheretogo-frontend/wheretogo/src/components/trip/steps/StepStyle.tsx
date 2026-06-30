import { useAppTheme } from "@/src/contexts/ThemeContext";
import type { TripPreferences } from "@/src/features/trip/types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Chip from "../../ui/Chip";
import SectionCard from "../../ui/SectionCard";
import { theme } from "../../ui/theme";

type Props = {
  preferences: TripPreferences;
  setPreferences: React.Dispatch<React.SetStateAction<TripPreferences>>;
};

export default function StepStyle({ preferences, setPreferences }: Props) {
  const { colors } = useAppTheme();
  return (
    <>
      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>Buget</Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Alege nivelul de buget pentru călătorie
        </Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          {[
            { key: "low" as const, label: "Redus" },
            { key: "medium" as const, label: "Mediu" },
            { key: "high" as const, label: "Premium" },
          ].map((b) => {
            const active = preferences.budget === b.key;
            return (
              <TouchableOpacity
                key={b.key}
                style={[
                  styles.bigOption,
                  { backgroundColor: colors.card, borderColor: colors.border },
                  active && {
                    backgroundColor: colors.primary,
                    borderColor: colors.primary,
                  },
                ]}
                onPress={() => setPreferences((p) => ({ ...p, budget: b.key }))}
              >
                <Text
                  style={[
                    styles.bigText,
                    { color: colors.text },
                    active && styles.bigTextActive,
                  ]}
                >
                  {b.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SectionCard>

      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>Transport</Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Cum preferi să te deplasezi?
        </Text>

        <View style={styles.rowWrap}>
          {[
            { key: "walking", label: "Pe jos" },
            { key: "public", label: "Transport public" },
            { key: "car", label: "Mașină" },
            { key: "mixed", label: "Mix" },
          ].map((t) => (
            <Chip
              key={t.key}
              label={t.label}
              active={preferences.transportPreference === t.key}
              onPress={() =>
                setPreferences((p) => ({
                  ...p,
                  transportPreference: t.key as any,
                }))
              }
            />
          ))}
        </View>
      </SectionCard>

      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>Cazare</Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Ce tip de cazare vrei?
        </Text>

        <View style={styles.rowWrap}>
          {[
            { key: "any", label: "Oricare" },
            { key: "hotel", label: "Hotel" },
            { key: "hostel", label: "Hostel" },
            { key: "apartment", label: "Apartament" },
          ].map((a) => (
            <Chip
              key={a.key}
              label={a.label}
              active={preferences.accommodationType === a.key}
              onPress={() =>
                setPreferences((p) => ({
                  ...p,
                  accommodationType: a.key as any,
                }))
              }
            />
          ))}
        </View>
      </SectionCard>
    </>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 16, fontWeight: "800", color: theme.colors.text },
  sub: {
    fontSize: 13,
    color: theme.colors.subtext,
    marginTop: 6,
    marginBottom: 12,
    fontStyle: "normal",
  },

  rowWrap: { flexDirection: "row", flexWrap: "wrap", gap: 10 },

  bigOption: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
    alignItems: "center",
    gap: 6,
  },
  bigOptionActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  bigText: { color: theme.colors.text, fontWeight: "800" },
  bigTextActive: { color: "#fff" },
});
