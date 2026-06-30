import { useAppTheme } from "@/src/contexts/ThemeContext";
import type { OptionItem, TripPreferences } from "@/src/features/trip/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PillOption from "../../ui/PillOption";
import SectionCard from "../../ui/SectionCard";
import { theme } from "../../ui/theme";

type Props = {
  preferences: TripPreferences;
  setPreferences: React.Dispatch<React.SetStateAction<TripPreferences>>;
  interests: OptionItem[];
  types: OptionItem[];
  vibes: OptionItem[];
};

export default function StepPreferences({
  preferences,
  setPreferences,
  interests,
  types,
  vibes,
}: Props) {
  const { colors } = useAppTheme();
  const toggle = (key: "interests" | "types" | "vibes", id: string) => {
    setPreferences((p) => ({
      ...p,
      [key]: (p[key] as string[]).includes(id)
        ? (p[key] as string[]).filter((x) => x !== id)
        : [...(p[key] as string[]), id],
    }));
  };

  return (
    <>
      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>Interese</Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Ce te-ar interesa să faci?
        </Text>
        <View style={styles.wrap}>
          {interests.map((i) => (
            <PillOption
              key={i.id}
              label={i.label}
              icon={i.icon}
              active={preferences.interests.includes(i.id)}
              onPress={() => toggle("interests", i.id)}
            />
          ))}
        </View>
      </SectionCard>

      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>
          Tipuri de locații
        </Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Ce fel de locuri vrei să vezi?
        </Text>
        <View style={styles.wrap}>
          {types.map((t) => (
            <PillOption
              key={t.id}
              label={t.label}
              icon={t.icon}
              active={preferences.types.includes(t.id)}
              onPress={() => toggle("types", t.id)}
            />
          ))}
        </View>
      </SectionCard>

      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>Vibe</Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Alege atmosfera
        </Text>
        <View style={styles.wrap}>
          {vibes.map((v) => (
            <PillOption
              key={v.id}
              label={v.label}
              icon={v.icon}
              active={preferences.vibes.includes(v.id)}
              onPress={() => toggle("vibes", v.id)}
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
  wrap: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
});
