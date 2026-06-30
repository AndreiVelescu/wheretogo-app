import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";

// ─── Color Tokens ────────────────────────────────────────────────
export interface ThemeColors {
  // Backgrounds
  background: string;
  backgroundSecondary: string;
  card: string;
  cardElevated: string;

  // Text
  text: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;

  // Borders
  border: string;
  borderLight: string;
  separator: string;

  // Primary / Accent
  primary: string;
  primarySoft: string;
  primaryText: string;

  // Secondary accent (orange)
  accent: string;
  accentSoft: string;

  // Status
  success: string;
  successSoft: string;
  warning: string;
  warningSoft: string;
  error: string;
  errorSoft: string;

  // Interactive
  inputBackground: string;
  inputBorder: string;
  inputPlaceholder: string;

  // Tab bar
  tabBar: string;
  tabBarBorder: string;
  tabActive: string;
  tabInactive: string;

  // Chat
  chatBubbleMine: string;
  chatBubbleMineTxt: string;
  chatBubbleOther: string;
  chatBubbleOtherTxt: string;
  chatBubbleOtherBorder: string;

  // Shadows (only color, opacity applied inline)
  shadow: string;

  // Overlay / modals
  overlay: string;

  // Stars / rating
  star: string;

  // Skeleton / placeholder
  skeleton: string;
  skeletonHighlight: string;

  // Badge (notification)
  badge: string;
  badgeText: string;
}

const lightColors: ThemeColors = {
  // Backgrounds
  background: "#F9FAFB",
  backgroundSecondary: "#FFFFFF",
  card: "#FFFFFF",
  cardElevated: "#FFFFFF",

  // Text
  text: "#111827",
  textSecondary: "#6B7280",
  textMuted: "#9CA3AF",
  textInverse: "#FFFFFF",

  // Borders
  border: "#E5E7EB",
  borderLight: "#F3F4F6",
  separator: "#F0F0F0",

  // Primary
  primary: "#E53935",
  primarySoft: "#FEF2F2",
  primaryText: "#FFFFFF",

  // Accent
  accent: "#FF6B00",
  accentSoft: "#FFF7ED",

  // Status
  success: "#4CAF50",
  successSoft: "#F0FFF4",
  warning: "#FF9800",
  warningSoft: "#FFF8E1",
  error: "#EF4444",
  errorSoft: "#FEF2F2",

  // Inputs
  inputBackground: "#F3F4F6",
  inputBorder: "#E5E7EB",
  inputPlaceholder: "#9CA3AF",

  // Tab bar
  tabBar: "#FFFFFF",
  tabBarBorder: "#EEEEEE",
  tabActive: "#E53935",
  tabInactive: "#474747",

  // Chat
  chatBubbleMine: "#E74C3C",
  chatBubbleMineTxt: "#FFFFFF",
  chatBubbleOther: "#FFFFFF",
  chatBubbleOtherTxt: "#1F2937",
  chatBubbleOtherBorder: "#E5E7EB",

  // Shadow
  shadow: "#000000",

  // Overlay
  overlay: "rgba(0,0,0,0.45)",

  // Stars
  star: "#FFD700",

  // Skeleton
  skeleton: "#E5E7EB",
  skeletonHighlight: "#F3F4F6",

  // Badge
  badge: "#E74C3C",
  badgeText: "#FFFFFF",
};

const darkColors: ThemeColors = {
  // Backgrounds
  background: "#0F1117",
  backgroundSecondary: "#0F1117",
  card: "#1E2130",
  cardElevated: "#252839",

  // Text
  text: "#F3F4F6",
  textSecondary: "#9CA3AF",
  textMuted: "#6B7280",
  textInverse: "#111827",

  // Borders
  border: "#2D3141",
  borderLight: "#252839",
  separator: "#2D3141",

  // Primary
  primary: "#EF5350",
  primarySoft: "#3A1A1A",
  primaryText: "#FFFFFF",

  // Accent
  accent: "#FF8A33",
  accentSoft: "#2A1F0F",

  // Status
  success: "#66BB6A",
  successSoft: "#1A2E1A",
  warning: "#FFB74D",
  warningSoft: "#2E2510",
  error: "#EF5350",
  errorSoft: "#3A1A1A",

  // Inputs
  inputBackground: "#252839",
  inputBorder: "#2D3141",
  inputPlaceholder: "#6B7280",

  // Tab bar
  tabBar: "#1A1D27",
  tabBarBorder: "#2D3141",
  tabActive: "#EF5350",
  tabInactive: "#6B7280",

  // Chat
  chatBubbleMine: "#EF5350",
  chatBubbleMineTxt: "#FFFFFF",
  chatBubbleOther: "#252839",
  chatBubbleOtherTxt: "#F3F4F6",
  chatBubbleOtherBorder: "#2D3141",

  // Shadow
  shadow: "#000000",

  // Overlay
  overlay: "rgba(0,0,0,0.65)",

  // Stars
  star: "#FFD700",

  // Skeleton
  skeleton: "#252839",
  skeletonHighlight: "#2D3141",

  // Badge
  badge: "#EF5350",
  badgeText: "#FFFFFF",
};

// ─── Theme Object ─────────────────────────────────────────────────
export type ThemeMode = "light" | "dark" | "system";

export interface AppTheme {
  mode: ThemeMode;
  isDark: boolean;
  colors: ThemeColors;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<AppTheme | null>(null);

const THEME_STORAGE_KEY = "@wheretogo_theme_mode";

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const systemScheme = useColorScheme();
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [loaded, setLoaded] = useState(false);

  // Load persisted theme
  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY).then((val) => {
      if (val === "light" || val === "dark" || val === "system") {
        setModeState(val);
      }
      setLoaded(true);
    });
  }, []);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    AsyncStorage.setItem(THEME_STORAGE_KEY, newMode);
  }, []);

  const isDark = useMemo(() => {
    if (mode === "system") return systemScheme === "dark";
    return mode === "dark";
  }, [mode, systemScheme]);

  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);

  const value = useMemo<AppTheme>(
    () => ({ mode, isDark, colors, setMode }),
    [mode, isDark, colors, setMode]
  );

  if (!loaded) return null;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useAppTheme(): AppTheme {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useAppTheme must be used within AppThemeProvider");
  }
  return ctx;
}

// Re-export colors for static use (e.g. in StyleSheet that can't use hooks)
export { darkColors, lightColors };
