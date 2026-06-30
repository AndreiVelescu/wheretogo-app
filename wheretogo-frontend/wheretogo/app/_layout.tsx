import { ApolloProvider } from "@apollo/client/react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PortalProvider } from "@gorhom/portal";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import CustomSplashScreen from "@/components/SplashScreen";
import { AuthProvider, useAuth } from "@/src/contexts/AuthContext";
import { NotificationsProvider } from "@/src/contexts/NotificationsContext";
import { AppThemeProvider, useAppTheme } from "@/src/contexts/ThemeContext";
import { useAutoUserStatus } from "@/src/hooks/useUserStatus";
import { apolloClient } from "@/src/lib/apolloClient";
import Toast from "react-native-toast-message";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync().catch(console.warn);

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        if (error) throw error;

        if (loaded) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setAppIsReady(true);
        }
      } catch (e) {
        console.warn(e);
        setAppIsReady(true);
      }
    }

    prepare();
  }, [loaded, error]);

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplashScreen();
  }, [appIsReady]);

  if (!appIsReady) {
    return <CustomSplashScreen />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApolloProvider client={apolloClient}>
        <SafeAreaProvider>
          <PortalProvider>
            <AppThemeProvider>
              <AuthProvider>
                <UserStatusManager />
                <NotificationsProvider>
                  <ThemedNavigation />
                </NotificationsProvider>
              </AuthProvider>
            </AppThemeProvider>
          </PortalProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    </GestureHandlerRootView>
  );
}

function ThemedNavigation() {
  const { isDark, colors } = useAppTheme();

  const navTheme = isDark
    ? {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: colors.background,
          card: colors.card,
          text: colors.text,
          border: colors.border,
          primary: colors.primary,
        },
      }
    : {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: colors.background,
          card: colors.card,
          text: colors.text,
          border: colors.border,
          primary: colors.primary,
        },
      };

  return (
    <ThemeProvider value={navTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="destination/[id]"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
        <Stack.Screen name="messages" options={{ headerShown: false }} />
        <Stack.Screen name="chat/[id]" options={{ headerShown: false }} />
      </Stack>
      <Toast />
    </ThemeProvider>
  );
}

function UserStatusManager() {
  const { isAuthenticated } = useAuth();

  useAutoUserStatus(isAuthenticated);

  return null;
}
