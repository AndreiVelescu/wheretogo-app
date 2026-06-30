import DatePickerField from "@/components/DatePickerField";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import type {
  DestinationItem,
  TripPreferences,
} from "@/src/features/trip/types";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../../ui";
import SectionCard from "../../ui/SectionCard";
import { theme } from "../../ui/theme";
import DestinationModal from "../DestinationModal";

type Props = {
  preferences: TripPreferences;
  setPreferences: React.Dispatch<React.SetStateAction<TripPreferences>>;
  destinations: DestinationItem[];
};

export default function StepBasics({
  preferences,
  setPreferences,
  destinations,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const { colors } = useAppTheme();

  const selected = useMemo(
    () => destinations.find((d) => d.id === preferences.destination),
    [destinations, preferences.destination],
  );

  useEffect(() => {
    if (!preferences.destination) {
      setPreferences((p) => ({ ...p, destination: "chisinau" }));
    }
  }, [preferences.destination, setPreferences]);

  return (
    <>
      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>Destinație</Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Alegi orașul, iar plannerul caută locuri reale din baza ta de date.
        </Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={[
            styles.selector,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
          onPress={() => setShowModal(true)}
        >
          <View style={styles.selectorRow}>
            <View style={styles.selectorInfo}>
              <Text style={styles.flag}>{selected?.flag ?? "📍"}</Text>
              <View style={{ flex: 1 }}>
                <Text style={[styles.label, { color: colors.text }]}>
                  {selected?.label ?? "Alege destinația"}
                </Text>
                <Text style={[styles.country, { color: colors.textSecondary }]}>
                  {selected?.country ?? "Locațiile disponibile pentru itinerar"}
                </Text>
                {!!selected?.description && (
                  <Text
                    style={[
                      styles.destinationNote,
                      { color: colors.textMuted },
                    ]}
                  >
                    {selected.description}
                  </Text>
                )}
              </View>
            </View>

            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textMuted}
            />
          </View>
        </TouchableOpacity>
      </SectionCard>

      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>
          Numele Călătoriei
        </Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Alege un nume calatoriei tale
        </Text>

        <Input
          value={preferences.title ?? ""}
          onChangeText={(text) =>
            setPreferences((prev) => ({ ...prev, title: text }))
          }
        />
      </SectionCard>

      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>
          Datele Călătoriei
        </Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Selectează perioada când vrei să călătorești
        </Text>

        <View style={{ flexDirection: "column", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <DatePickerField
              label="Data de Început"
              value={preferences.startDate}
              onChange={(date) =>
                setPreferences((prev) => ({
                  ...prev,
                  startDate: date,
                  endDate:
                    prev.endDate && new Date(prev.endDate) <= new Date(date)
                      ? ""
                      : prev.endDate,
                }))
              }
              minimumDate={new Date()}
            />
          </View>

          <View style={{ flex: 1 }}>
            <DatePickerField
              label="Data de Sfârșit"
              value={preferences.endDate}
              onChange={(date) =>
                setPreferences((prev) => ({ ...prev, endDate: date }))
              }
              minimumDate={
                preferences.startDate
                  ? new Date(
                      new Date(preferences.startDate).getTime() +
                        24 * 60 * 60 * 1000,
                    )
                  : new Date()
              }
            />
          </View>
        </View>
      </SectionCard>

      <SectionCard>
        <Text style={[styles.title, { color: colors.text }]}>
          Mărimea grupului
        </Text>
        <Text style={[styles.sub, { color: colors.textSecondary }]}>
          Câte persoane vor participa?
        </Text>

        <View style={styles.counterRow}>
          <TouchableOpacity
            style={[
              styles.counterBtn,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={() =>
              setPreferences((p) => ({
                ...p,
                groupSize: Math.max(1, p.groupSize - 1),
              }))
            }
          >
            <Ionicons name="remove" size={20} color={colors.primary} />
          </TouchableOpacity>
          <Text style={[styles.counterText, { color: colors.text }]}>
            {preferences.groupSize}{" "}
            {preferences.groupSize === 1 ? "persoană" : "persoane"}
          </Text>

          <TouchableOpacity
            style={[
              styles.counterBtn,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={() =>
              setPreferences((p) => ({ ...p, groupSize: p.groupSize + 1 }))
            }
          >
            <Ionicons name="add" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </SectionCard>

      <DestinationModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        destinations={destinations}
        selectedId={preferences.destination}
        onSelect={(id) => setPreferences((p) => ({ ...p, destination: id }))}
      />
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

  selector: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
  },
  selectorRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
  },
  selectorInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  flag: { fontSize: 26, marginRight: 10 },
  label: { fontSize: 16, fontWeight: "800", color: theme.colors.text },
  country: {
    fontSize: 12,
    color: theme.colors.subtext,
    marginTop: 2,
    fontWeight: "600",
  },
  destinationNote: {
    fontSize: 12,
    marginTop: 6,
    lineHeight: 18,
  },

  counterRow: { flexDirection: "row", alignItems: "center", gap: 50 },
  counterBtn: {
    padding: 12,
    borderRadius: theme.radius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
  },
  counterText: {
    fontSize: 16,
    fontWeight: "700",
    color: theme.colors.text,
    minWidth: 140,
    textAlign: "center",
  },
});
