/**
 * 📐 Layout Components - ScreenWrapper
 * Wrapper pentru ecrane cu SafeArea și KeyboardAvoidingView
 */

import { useAppTheme } from "@/src/contexts/ThemeContext";
import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

interface ScreenWrapperProps {
  children: ReactNode;
  scrollable?: boolean;
  edges?: ("top" | "bottom" | "left" | "right")[];
}

export const ScreenWrapper = ({
  children,
  scrollable = true,
  edges = ["top", "bottom"],
}: ScreenWrapperProps) => {
  const { colors } = useAppTheme();
  const content = scrollable ? (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  ) : (
    <View style={styles.container}>{children}</View>
  );

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {content}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
});
