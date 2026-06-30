import { useAppTheme } from "@/src/contexts/ThemeContext";
import type {
  DestinationItem,
  TripPreferences,
} from "@/src/features/trip/types";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Chip from "../../ui/Chip";
import SectionCard from "../../ui/SectionCard";
import { theme } from "../../ui/theme";

type Props = {
  preferences: TripPreferences;
  setPreferences: React.Dispatch<React.SetStateAction<TripPreferences>>;
  destinations: DestinationItem[];
};

export default function StepFiltersSummary({
  preferences,
  setPreferences,
  destinations,
}: Props) {
  const { colors } = useAppTheme();
  const totalDays = useMemo(() => {
    if (!preferences.startDate || !preferences.endDate) {
      return null;
    }

    const start = new Date(preferences.startDate);
    const end = new Date(preferences.endDate);
    const diff = end.getTime() - start.getTime();

    return Number.isFinite(diff)
      ? Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1)
      : null;
  }, [preferences.endDate, preferences.startDate]);

  const selected = useMemo(
    () => destinations.find((d) => d.id === preferences.destination),
    [destinations, preferences.destination],
  );

  return (
    <>
      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>Price Range</Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Selectează intervalul de preț
        </Text>
        <View style={styles.wrap}>
          {["$", "$$", "$$$"].map((r) => (
            <Chip
              key={r}
              label={r}
              active={preferences.priceRanges.includes(r)}
              onPress={() =>
                setPreferences((p) => ({
                  ...p,
                  priceRanges: p.priceRanges.includes(r)
                    ? p.priceRanges.filter((x) => x !== r)
                    : [...p.priceRanges, r],
                }))
              }
            />
          ))}
        </View>
      </SectionCard>

      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>Rating minim</Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Filtrează locațiile după rating
        </Text>
        <View style={styles.wrap}>
          {[null, 3.5, 4.0, 4.3, 4.5].map((r) => (
            <Chip
              key={r === null ? "any" : String(r)}
              label={r === null ? "Oricare" : `${r}+`}
              active={preferences.minRating === r}
              onPress={() => setPreferences((p) => ({ ...p, minRating: r }))}
            />
          ))}
        </View>
      </SectionCard>

      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>
          Stopuri pe zi
        </Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Câte locații pe zi să includă itinerariul?
        </Text>
        <View style={styles.wrap}>
          {[3, 4, 5].map((s) => (
            <Chip
              key={String(s)}
              label={String(s)}
              active={preferences.maxStopsPerDay === s}
              onPress={() =>
                setPreferences((p) => ({ ...p, maxStopsPerDay: s }))
              }
            />
          ))}
        </View>
      </SectionCard>

      <SectionCard>
        <Text style={[styles.summaryTitle, { color: colors.text }]}>
          Rezumat
        </Text>
        <Text style={[styles.summaryLine, { color: colors.textSecondary }]}>
          Destinație: {selected?.label ?? "—"}
        </Text>
        <Text style={[styles.summaryLine, { color: colors.textSecondary }]}>
          Perioadă: {preferences.startDate || "—"} →{" "}
          {preferences.endDate || "—"}
        </Text>
        <Text style={[styles.summaryLine, { color: colors.textSecondary }]}>
          Durată: {totalDays ? `${totalDays} zile` : "—"}
        </Text>
        <Text style={[styles.summaryLine, { color: colors.textSecondary }]}>
          Grup: {preferences.groupSize} • {preferences.maxStopsPerDay}{" "}
          stopuri/zi
        </Text>
        <Text style={[styles.summaryLine, { color: colors.textSecondary }]}>
          Interese: {preferences.interests.length} • Tipuri:{" "}
          {preferences.types.length}
        </Text>
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

  summaryTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: theme.colors.text,
    marginBottom: 8,
  },
  summaryLine: { color: theme.colors.subtext, marginTop: 4, fontWeight: "600" },
});
