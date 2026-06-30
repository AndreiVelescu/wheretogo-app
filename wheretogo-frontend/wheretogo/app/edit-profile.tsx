import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useCheckNickname } from "@/src/features/auth/auth.hooks";
import { useUpdateProfile } from "@/src/features/user/user.hooks";
import { useDebounce } from "@/src/hooks/useDebounce";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  const { user } = useAuth();
  const { updateProfile, isLoading } = useUpdateProfile();
  const { colors, isDark } = useAppTheme();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [nicknameError, setNicknameError] = useState("");

  // Nickname availability check
  const {
    checkNickname,
    isAvailable: nicknameAvailable,
    isChecking: isCheckingNickname,
  } = useCheckNickname();
  const debouncedNickname = useDebounce(nickname.trim(), 400);

  useEffect(() => {
    const nick = debouncedNickname;
    if (!nick || nick === (user?.nickname || "")) {
      setNicknameError("");
      return;
    }
    if (nick.length < 3) {
      setNicknameError("Minim 3 caractere");
      return;
    }
    if (!/^[a-zA-Z][a-zA-Z0-9._]*$/.test(nick)) {
      setNicknameError("Doar litere, cifre, punct sau underscore");
      return;
    }
    setNicknameError("");
    checkNickname(nick);
  }, [debouncedNickname]);

  const nicknameChanged = nickname.trim() !== (user?.nickname || "");
  const nicknameIsValid =
    !nicknameChanged ||
    (nickname.trim().length >= 3 &&
      /^[a-zA-Z][a-zA-Z0-9._]*$/.test(nickname.trim()) &&
      nicknameAvailable !== false &&
      !isCheckingNickname);

  const hasChanges =
    name.trim() !== (user?.name || "") ||
    email.trim() !== (user?.email || "") ||
    nicknameChanged;

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert("Eroare", "Numele nu poate fi gol");
      return;
    }
    if (nicknameChanged && !nicknameIsValid) {
      Alert.alert("Eroare", "Nickname-ul nu este valid sau este deja folosit");
      return;
    }

    const updates: any = {
      name: name.trim(),
      email: email.trim(),
    };
    if (nicknameChanged) {
      updates.nickname = nickname.trim();
    }

    try {
      await updateProfile(updates);
      Alert.alert("Succes", "Profilul a fost actualizat", [
        { text: "OK", onPress: () => router.back() },
      ]);
    } catch (e: any) {
      Alert.alert("Eroare", e?.message || "Nu s-a putut actualiza profilul");
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top"]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: colors.card, borderBottomColor: colors.border },
        ]}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.headerBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Feather name="arrow-left" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          Editează profilul
        </Text>
        <TouchableOpacity
          onPress={handleSave}
          style={[
            styles.saveBtn,
            { backgroundColor: colors.primary },
            (!hasChanges || !nicknameIsValid) && {
              backgroundColor: colors.borderLight,
            },
          ]}
          disabled={!hasChanges || !nicknameIsValid || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text
              style={[
                styles.saveBtnText,
                (!hasChanges || !nicknameIsValid) && {
                  color: colors.textMuted,
                },
              ]}
            >
              Salvează
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Name */}
          <View style={styles.fieldGroup}>
            <Text style={[styles.fieldLabel, { color: colors.textMuted }]}>
              NUME
            </Text>
            <View
              style={[
                styles.inputWrapper,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <Feather
                name="user"
                size={18}
                color={colors.textMuted}
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.input, { color: colors.text }]}
                value={name}
                onChangeText={setName}
                placeholder="Numele tău"
                placeholderTextColor={colors.inputPlaceholder}
                maxLength={50}
                autoCapitalize="words"
                returnKeyType="next"
              />
            </View>
            <Text style={[styles.charCount, { color: colors.textMuted }]}>
              {name.length}/50
            </Text>
          </View>

          {/* Nickname */}
          <View style={styles.fieldGroup}>
            <Text style={[styles.fieldLabel, { color: colors.textMuted }]}>
              NICKNAME
            </Text>
            <View
              style={[
                styles.inputWrapper,
                {
                  backgroundColor: colors.card,
                  borderColor:
                    nicknameError || nicknameAvailable === false
                      ? colors.error
                      : colors.border,
                },
              ]}
            >
              <Ionicons
                name="at-outline"
                size={18}
                color={colors.textMuted}
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.input, { color: colors.text }]}
                value={nickname}
                onChangeText={(t) =>
                  setNickname(t.toLowerCase().replace(/\s/g, ""))
                }
                placeholder="ex: ion.popescu"
                placeholderTextColor={colors.inputPlaceholder}
                maxLength={20}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
              />
              {isCheckingNickname && (
                <ActivityIndicator
                  size="small"
                  color={colors.textMuted}
                  style={{ marginRight: 4 }}
                />
              )}
              {!isCheckingNickname &&
                nicknameChanged &&
                nickname.trim().length >= 3 &&
                !nicknameError &&
                nicknameAvailable === true && (
                  <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color={colors.success}
                    style={{ marginRight: 4 }}
                  />
                )}
              {!isCheckingNickname &&
                nicknameChanged &&
                nicknameAvailable === false &&
                !nicknameError && (
                  <Ionicons
                    name="close-circle"
                    size={20}
                    color={colors.error}
                    style={{ marginRight: 4 }}
                  />
                )}
            </View>
            {nicknameError ? (
              <Text style={[styles.nicknameHint, { color: colors.error }]}>
                {nicknameError}
              </Text>
            ) : nicknameChanged &&
              nicknameAvailable === false &&
              !isCheckingNickname ? (
              <Text style={[styles.nicknameHint, { color: colors.error }]}>
                Nickname-ul este deja folosit
              </Text>
            ) : (
              <Text style={[styles.nicknameHint, { color: colors.textMuted }]}>
                3-20 caractere • începe cu literă • litere, cifre, . sau _
              </Text>
            )}
          </View>

          {/* Email */}
          <View style={styles.fieldGroup}>
            <Text style={[styles.fieldLabel, { color: colors.textMuted }]}>
              EMAIL
            </Text>
            <View
              style={[
                styles.inputWrapper,
                { backgroundColor: colors.card, borderColor: colors.border },
              ]}
            >
              <Feather
                name="mail"
                size={18}
                color={colors.textMuted}
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.input, { color: colors.text }]}
                value={email}
                onChangeText={setEmail}
                placeholder="your@email.com"
                placeholderTextColor={colors.inputPlaceholder}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
              />
            </View>
          </View>

          {/* Info note */}
          <View
            style={[
              styles.infoBox,
              { backgroundColor: isDark ? colors.cardElevated : "#F0F4FF" },
            ]}
          >
            <Feather name="info" size={16} color={colors.textMuted} />
            <Text style={[styles.infoText, { color: colors.textMuted }]}>
              Pentru a schimba poza de profil, apasă pe avatar din pagina de
              profil.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  headerBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A2E",
  },
  saveBtn: {
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
    minWidth: 64,
    alignItems: "center",
  },
  saveBtnDisabled: {
    backgroundColor: "#E5E7EB",
  },
  saveBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  saveBtnTextDisabled: {
    color: "#ACACAC",
  },

  // Scroll
  scrollView: { flex: 1 },
  scrollContent: {
    padding: 20,
    gap: 20,
  },

  // Fields
  fieldGroup: { gap: 6 },
  fieldLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#8A8A9D",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#F0F0F0",
    paddingHorizontal: 14,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1A1A2E",
    paddingVertical: 14,
  },
  charCount: {
    fontSize: 11,
    color: "#C8C8D0",
    textAlign: "right",
    marginRight: 4,
  },
  nicknameHint: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },

  // Info
  infoBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: "#F0F4FF",
    borderRadius: 12,
    padding: 14,
    marginTop: 8,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: "#8A8A9D",
    lineHeight: 18,
  },
});
