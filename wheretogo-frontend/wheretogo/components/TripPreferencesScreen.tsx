import { STORAGE_KEYS } from "@/src/config/api";
import { apiService } from "@/src/services/apiService";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import { theme } from "@/src/components/ui/theme";
import ProgressBar from "@/src/components/wizard/ProgressBar";
import WizardFooter from "@/src/components/wizard/WizzardFooter";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import type { TripPreferences, WizardStep } from "@/src/features/trip/types";

import StepBasics from "@/src/components/trip/steps/StepBasics";
import StepFiltersSummary from "@/src/components/trip/steps/StepFiltersSummary";
import StepPreferences from "@/src/components/trip/steps/StepPreferences";
import StepStyle from "@/src/components/trip/steps/StepStyle";

import {
  DESTINATION_OPTIONS,
  INTEREST_OPTIONS,
  TYPE_OPTIONS,
  VIBE_OPTIONS,
} from "@/src/components/constants/tripOptions";

export default function TripPreferencesScreen() {
  const [step, setStep] = useState<WizardStep>(1);

  const [preferences, setPreferences] = useState<TripPreferences>({
    destination: "chisinau",
    startDate: "",
    endDate: "",
    budget: "medium",
    interests: [],
    types: [],
    vibes: [],
    priceRanges: [],
    minRating: null,
    maxStopsPerDay: 4,
    groupSize: 1,
    accommodationType: "any",
    transportPreference: "mixed",
    title: "",
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [useMockMode, setUseMockMode] = useState(false);
  const { colors } = useAppTheme();

  const selectedDestination = useMemo(
    () =>
      DESTINATION_OPTIONS.find((item) => item.id === preferences.destination),
    [preferences.destination],
  );

  const totalDays = useMemo(() => {
    if (!preferences.startDate || !preferences.endDate) {
      return null;
    }

    const diff =
      new Date(preferences.endDate).getTime() -
      new Date(preferences.startDate).getTime();

    return Number.isFinite(diff)
      ? Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1)
      : null;
  }, [preferences.endDate, preferences.startDate]);

  const estimatedDailyBudget = useMemo(() => {
    const budgetPerPerson =
      preferences.budget === "low"
        ? 40
        : preferences.budget === "high"
          ? 150
          : 80;

    return budgetPerPerson * Math.max(1, preferences.groupSize);
  }, [preferences.budget, preferences.groupSize]);

  const headerTitle = useMemo(() => {
    if (step === 1) return "Pas 1: Baza";
    if (step === 2) return "Pas 2: Stil";
    if (step === 3) return "Pas 3: Preferințe";
    return "Pas 4: Filtre & Rezumat";
  }, [step]);

  const canNext = useMemo(() => {
    if (step === 1)
      return (
        !!preferences.destination &&
        !!preferences.startDate &&
        !!preferences.endDate
      );
    return true;
  }, [
    step,
    preferences.destination,
    preferences.startDate,
    preferences.endDate,
  ]);

  const getMockTripData = () => ({
    title: `Aventura în ${
      DESTINATION_OPTIONS.find((d) => d.id === preferences.destination)
        ?.label ?? "oraș"
    }`,
    days: [],
    polyline: [],
  });

  const generateTrip = async () => {
    if (
      !preferences.destination ||
      !preferences.startDate ||
      !preferences.endDate
    ) {
      Alert.alert("Eroare", "Vă rugăm completați destinația și datele");
      return;
    }

    setIsGenerating(true);
    try {
      let tripData: any;

      if (useMockMode) {
        await new Promise((r) => setTimeout(r, 900));
        tripData = getMockTripData();
      } else {
        // Token may live under the configured key or a legacy one
        // (apolloClient migrates between them), so check all variants.
        const token =
          (await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)) ||
          (await AsyncStorage.getItem("access_token")) ||
          (await AsyncStorage.getItem("accessToken"));
        if (!token) {
          Toast.show({
            type: "error",
            text1: "Not authenticated",
            text2: "Please log in to generate a trip",
            position: "top",
            visibilityTime: 3000,
          });
          return;
        }

        const res = await apiService.generateTrip(preferences);
        if (!res.success)
          throw new Error(res.message || "Failed to generate trip");
        tripData = res.data;
      }

      Toast.show({
        type: "success",
        text1: "Trip Generated!",
        text2: "Your personalized itinerary is ready",
        position: "top",
        visibilityTime: 2500,
      });

      router.push({
        pathname: "/trip/itinerary" as any,
        params: {
          // Pass the id so the itinerary refetches editable stops (with ids),
          // and the full trip JSON so it renders instantly meanwhile.
          ...(tripData?.id ? { id: String(tripData.id) } : {}),
          trip: JSON.stringify(tripData),
        },
      });
    } catch (e: any) {
      Toast.show({
        type: "error",
        text1: "Generation Failed",
        text2: e?.message || "Please try again later",
        position: "top",
        visibilityTime: 3000,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const onNext = () => {
    if (!canNext) {
      Alert.alert("Completează", "Alege destinația și datele ca să continui.");
      return;
    }
    setStep((s) => (s < 4 ? ((s + 1) as WizardStep) : s));
  };

  const onBack = () => setStep((s) => (s > 1 ? ((s - 1) as WizardStep) : s));

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View
        style={[
          styles.header,
          { backgroundColor: colors.card, borderBottomColor: colors.border },
        ]}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          {headerTitle}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ProgressBar step={step} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.heroCard,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.heroTopRow}>
            <View
              style={[
                styles.heroBadge,
                { backgroundColor: colors.primarySoft },
              ]}
            >
              <Text style={[styles.heroBadgeText, { color: colors.primary }]}>
                Trip Planner
              </Text>
            </View>
            <Text style={[styles.heroStep, { color: colors.textMuted }]}>
              Pasul {step} din 4
            </Text>
          </View>

          <Text style={[styles.heroTitle, { color: colors.text }]}>
            Construiește un itinerar mai coerent, nu doar o listă de locuri.
          </Text>
          <Text style={[styles.heroText, { color: colors.textSecondary }]}>
            Plannerul ține cont de varietate, proximitate, buget și tipurile de
            locații disponibile în oraș.
          </Text>

          <View style={styles.heroMetricsRow}>
            <View
              style={[
                styles.heroMetric,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.borderLight,
                },
              ]}
            >
              <Text
                style={[styles.heroMetricLabel, { color: colors.textMuted }]}
              >
                Oraș
              </Text>
              <Text style={[styles.heroMetricValue, { color: colors.text }]}>
                {selectedDestination?.label ?? "Alege"}
              </Text>
            </View>

            <View
              style={[
                styles.heroMetric,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.borderLight,
                },
              ]}
            >
              <Text
                style={[styles.heroMetricLabel, { color: colors.textMuted }]}
              >
                Durată
              </Text>
              <Text style={[styles.heroMetricValue, { color: colors.text }]}>
                {totalDays ? `${totalDays} zile` : "—"}
              </Text>
            </View>

            <View
              style={[
                styles.heroMetric,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.borderLight,
                },
              ]}
            >
              <Text
                style={[styles.heroMetricLabel, { color: colors.textMuted }]}
              >
                Buget/zi
              </Text>
              <Text style={[styles.heroMetricValue, { color: colors.text }]}>
                {estimatedDailyBudget} lei
              </Text>
            </View>
          </View>
        </View>

        {step === 1 && (
          <StepBasics
            preferences={preferences}
            setPreferences={setPreferences}
            destinations={DESTINATION_OPTIONS}
          />
        )}

        {step === 2 && (
          <StepStyle
            preferences={preferences}
            setPreferences={setPreferences}
          />
        )}

        {step === 3 && (
          <StepPreferences
            preferences={preferences}
            setPreferences={setPreferences}
            interests={INTEREST_OPTIONS}
            types={TYPE_OPTIONS}
            vibes={VIBE_OPTIONS}
          />
        )}

        {step === 4 && (
          <StepFiltersSummary
            preferences={preferences}
            setPreferences={setPreferences}
            destinations={DESTINATION_OPTIONS}
          />
        )}

        {__DEV__ && (
          <View style={{ marginTop: 8, marginBottom: 16 }}>
            <TouchableOpacity
              style={[
                styles.devToggle,
                { backgroundColor: colors.card, borderColor: colors.border },
                useMockMode && {
                  backgroundColor: colors.primarySoft,
                  borderColor: colors.primary,
                },
              ]}
              onPress={() => setUseMockMode((v) => !v)}
            >
              <Text
                style={[
                  styles.devText,
                  { color: colors.text },
                  useMockMode && { color: colors.primary },
                ]}
              >
                {useMockMode ? "Mock Mode (Demo Data)" : "Real API Mode"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <WizardFooter
        step={step}
        canNext={canNext}
        isGenerating={isGenerating}
        onBack={onBack}
        onNext={onNext}
        onGenerate={generateTrip}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.card,
  },
  headerTitle: { fontSize: 16, fontWeight: "900", color: theme.colors.text },

  content: { flex: 1, padding: 16, paddingBottom: 110 },

  heroCard: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
  },
  heroTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  heroBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(230, 126, 34, 0.12)",
  },
  heroBadgeText: {
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  heroStep: {
    fontSize: 12,
    fontWeight: "700",
  },
  heroTitle: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: "900",
    marginBottom: 8,
  },
  heroText: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 16,
  },
  heroMetricsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  heroMetric: {
    flexGrow: 1,
    flexBasis: "31%",
    minWidth: 96,
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  heroMetricLabel: {
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  heroMetricValue: {
    fontSize: 15,
    fontWeight: "800",
  },

  devToggle: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
    paddingVertical: 12,
    alignItems: "center",
  },
  devToggleActive: {
    backgroundColor: theme.colors.primarySoft,
    borderColor: theme.colors.primary,
  },
  devText: { fontWeight: "800", color: theme.colors.text },
  devTextActive: { color: theme.colors.primary },
});
