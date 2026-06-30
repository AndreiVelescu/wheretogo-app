import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useAppTheme } from "@/src/contexts/ThemeContext";
import onboardingData from "@/src/data/onboardingData.json";

const { width } = Dimensions.get("window");
const STORAGE_KEY = "has_seen_onboarding";

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { colors, isDark } = useAppTheme();
  //FOR DEV
  // useEffect(() => {
  //   if (__DEV__) {
  //     AsyncStorage.removeItem("has_seen_onboarding");
  //   }
  // }, []);

  useEffect(() => {
    //verify daca onboardingul a fost trecut
    AsyncStorage.getItem(STORAGE_KEY).then((value) => {
      if (value === "true") {
        router.replace("/(tabs)/explore");
      } else {
        setLoading(false);
      }
    });
  }, []);

  const handleNext = async () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      await AsyncStorage.setItem(STORAGE_KEY, "true");
      router.replace("/(tabs)/explore");
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem(STORAGE_KEY, "true");
    router.replace("/(tabs)/explore");
  };

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const currentSlide = onboardingData[currentIndex];

  const parseTitle = (title: string) => {
    const regex = /<highlight>(.*?)<\/highlight>/;
    const match = title.match(regex);
    if (match) {
      const parts = title.split(regex);
      return (
        <Text style={[styles.title, { color: colors.text }]}>
          {parts[0]}
          <Text style={[styles.highlight, { color: colors.primary }]}>
            {match[1]}
          </Text>
          {parts[2]}
        </Text>
      );
    }
    return <Text style={[styles.title, { color: colors.text }]}>{title}</Text>;
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.topSection, { backgroundColor: colors.primary }]}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.illustrationBox} />
      </View>

      <View
        style={[styles.bottomSection, { backgroundColor: colors.background }]}
      >
        {parseTitle(currentSlide.title)}
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {currentSlide.description}
        </Text>

        <View style={styles.indicators}>
          {onboardingData.map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.dot,
                { backgroundColor: colors.primarySoft },
                idx === currentIndex && {
                  backgroundColor: colors.primary,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={[styles.getStartedButton, { backgroundColor: colors.primary }]}
          onPress={handleNext}
        >
          <Text style={styles.getStartedText}>{currentSlide.buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ... restul stilurilor rămâne la fel

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topSection: {
    flex: 0.6,
    backgroundColor: "#EC2424",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  skipButton: { position: "absolute", top: 60, right: 20 },
  skipText: { color: "white", fontSize: 16, fontWeight: "500" },
  illustrationBox: {
    width: width * 0.8,
    height: width * 0.6,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 20,
  },
  bottomSection: {
    flex: 0.5,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    lineHeight: 32,
  },
  highlight: { color: "#EC2424" },
  description: {
    textAlign: "center",
    color: "#777",
    fontSize: 15,
    marginTop: 15,
    lineHeight: 22,
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#F8BABA",
    marginHorizontal: 5,
  },
  activeDot: { backgroundColor: "#EC2424", width: 25 },
  getStartedButton: {
    backgroundColor: "#EC2424",
    borderRadius: 16,
    width: "100%",
    paddingVertical: 16,
    alignItems: "center",
  },
  getStartedText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
