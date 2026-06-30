import Logo from "@/components/Logo";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useUnreadNotificationsCount } from "@/src/features/notifications";
import { Ionicons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface AppHeaderProps {
  /** Override the default "from" param when navigating to profile */
  from?: string;
  /** Hide the header completely */
  hidden?: boolean;
}

export default function AppHeader({ from, hidden }: AppHeaderProps) {
  const { isAuthenticated, user } = useAuth();
  const { colors } = useAppTheme();
  const { count: unreadCount } = useUnreadNotificationsCount(isAuthenticated);
  const pathname = usePathname();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    if (!hidden && isAuthenticated) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [hidden, isAuthenticated, fadeAnim, slideAnim]);

  if (hidden || !isAuthenticated) return null;

  const source = pathname;

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ backgroundColor: colors.backgroundSecondary }}
    >
      <Animated.View
        style={[
          styles.header,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.iconButton,
            { backgroundColor: colors.card, shadowColor: colors.shadow },
          ]}
          onPress={() => router.push("/notifications")}
        >
          <Ionicons
            name="notifications-outline"
            size={22}
            color={colors.text}
          />
          {unreadCount > 0 && (
            <View
              style={[
                styles.badge,
                { backgroundColor: colors.primary, borderColor: colors.card },
              ]}
            >
              <Text style={styles.badgeText}>
                {unreadCount > 99 ? "99+" : unreadCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Logo width={120} color="red" />
        </View>
        <TouchableOpacity
          style={[
            styles.iconButton,
            { backgroundColor: colors.card, shadowColor: colors.shadow },
          ]}
          onPress={() => router.push("/messages")}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={22}
            color={colors.text}
          />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 6,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  userName: {
    marginLeft: 6,
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",

    gap: 10,
  },
  iconButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#E53935",
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: "#fff",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
});
