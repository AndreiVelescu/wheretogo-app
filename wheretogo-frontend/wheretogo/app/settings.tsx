import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { ProfileMenuItem } from "@/src/features/user/components";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useCallback } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const { logout } = useAuth();
  const { colors, isDark } = useAppTheme();

  const handleLogout = useCallback(() => {
    Alert.alert("Deconectare", "Ești sigur că vrei să te deconectezi?", [
      { text: "Anulează", style: "cancel" },
      {
        text: "Deconectare",
        style: "destructive",
        onPress: async () => {
          try {
            await logout();
            router.replace("/auth/login");
          } catch (err) {
            console.error("Logout failed", err);
          }
        },
      },
    ]);
  }, [logout]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top"]}
    >
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={[
            styles.backBtn,
            { backgroundColor: isDark ? colors.card : colors.inputBackground },
          ]}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Feather name="arrow-left" size={20} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Setări</Text>
        <View style={{ width: 38 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Account Section */}
        <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>
          Cont
        </Text>
        <View style={[styles.menuCard, { backgroundColor: colors.card }]}>
          <ProfileMenuItem
            icon="user"
            label="Editează profilul"
            onPress={() => router.push("/edit-profile")}
          />
          <View
            style={[styles.divider, { backgroundColor: colors.separator }]}
          />
          <ProfileMenuItem
            icon="lock"
            label="Confidențialitate"
            onPress={() => console.log("Privacy")}
          />
        </View>

        {/* Notifications Section */}
        <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>
          Notificări
        </Text>
        <View style={[styles.menuCard, { backgroundColor: colors.card }]}>
          <ProfileMenuItem
            icon="bell"
            label="Notificări"
            onPress={() => router.push("/notifications")}
          />
        </View>

        {/* Support Section */}
        <Text style={[styles.sectionTitle, { color: colors.textMuted }]}>
          Suport
        </Text>
        <View style={[styles.menuCard, { backgroundColor: colors.card }]}>
          <ProfileMenuItem
            icon="help-circle"
            label="Ajutor și suport"
            onPress={() => console.log("Help")}
          />
          <View
            style={[styles.divider, { backgroundColor: colors.separator }]}
          />
          <ProfileMenuItem
            icon="info"
            label="Despre aplicație"
            onPress={() => console.log("About")}
          />
        </View>

        {/* Logout */}
        <View
          style={[
            styles.menuCard,
            { backgroundColor: colors.card, marginTop: 24 },
          ]}
        >
          <ProfileMenuItem
            icon="log-out"
            label="Deconectare"
            color="#E53935"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>

        <Text style={[styles.version, { color: colors.textMuted }]}>
          WhereToGo v1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginTop: 24,
    marginBottom: 8,
    marginLeft: 4,
  },
  menuCard: {
    borderRadius: 14,
    overflow: "hidden",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 64,
  },
  version: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 32,
  },
});
