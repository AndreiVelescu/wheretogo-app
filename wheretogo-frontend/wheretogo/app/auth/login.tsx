import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
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

import GoogleLogin from "@/components/GoogleLoginButton";
import Mascot from "@/components/Mascot";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { LoginFormData, loginSchema } from "@/src/schemas/auth";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "admin@wheretogo.com",
    password: "password123",
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [showPassword, setShowPassword] = useState(false);
  const { isAuthenticated, login: authLogin } = useAuth();
  const [isLoginPending, setIsLoginPending] = useState(false);
  const { colors, isDark } = useAppTheme();
  const passwordRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)/explore");
    }
  }, [isAuthenticated]);

  const validateForm = (): boolean => {
    try {
      loginSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const fieldErrors: Partial<LoginFormData> = {};
      if (error.errors) {
        error.errors.forEach((err: any) => {
          const field = err.path[0] as keyof LoginFormData;
          fieldErrors[field] = err.message;
        });
      }
      setErrors(fieldErrors);
      return false;
    }
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    setIsLoginPending(true);

    try {
      await authLogin(formData);
      Toast.show({
        type: "success",
        text1: "Bine ai revenit! 👋",
        text2: "Te-ai conectat cu succes",
        autoHide: true,
        position: "top",
        visibilityTime: 2000,
        topOffset: 60,
      });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Autentificare eșuată",
        text2: error?.message || "Ceva nu a mers bine",
        autoHide: true,
        position: "top",
        visibilityTime: 3000,
        topOffset: 60,
      });
    } finally {
      setIsLoginPending(false);
    }
  };

  const updateFormData = (field: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputStyle = (field: string) => [
    styles.input,
    styles.inputWithIcon,
    {
      backgroundColor: colors.inputBackground,
      borderColor: errors[field as keyof LoginFormData]
        ? colors.error
        : colors.inputBorder,
      color: colors.text,
    },
  ];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={false}
        >
          {/* Back button */}
          {/* <TouchableOpacity
            onPress={() => router.back()}
            style={[
              styles.backButton,
              {
                backgroundColor: isDark ? colors.card : colors.inputBackground,
              },
            ]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={20} color={colors.text} />
          </TouchableOpacity> */}

          {/* Mascot */}
          <View style={styles.illustrationContainer}>
            <Mascot width={110} height={160} />
          </View>

          {/* Title */}
          <Text style={[styles.title, { color: colors.text }]}>
            Bine ai revenit!
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Conectează-te pentru a continua
          </Text>

          {/* Form */}
          <View style={styles.formContainer}>
            {/* Email */}
            <View style={styles.fieldGroup}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>
                EMAIL
              </Text>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="mail-outline"
                  size={18}
                  color={colors.inputPlaceholder}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={inputStyle("email")}
                  placeholder="email@exemplu.com"
                  placeholderTextColor={colors.inputPlaceholder}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={formData.email}
                  onChangeText={(text) => updateFormData("email", text)}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current?.focus()}
                />
              </View>
              {errors.email && (
                <View style={styles.errorRow}>
                  <Ionicons
                    name="alert-circle"
                    size={14}
                    color={colors.error}
                  />
                  <Text style={[styles.errorText, { color: colors.error }]}>
                    {errors.email}
                  </Text>
                </View>
              )}
            </View>

            {/* Password */}
            <View style={styles.fieldGroup}>
              <Text style={[styles.label, { color: colors.textSecondary }]}>
                PAROLĂ
              </Text>
              <View style={styles.inputWrapper}>
                <Ionicons
                  name="lock-closed-outline"
                  size={18}
                  color={colors.inputPlaceholder}
                  style={styles.inputIcon}
                />
                <TextInput
                  ref={passwordRef}
                  style={[...inputStyle("password"), { paddingRight: 48 }]}
                  placeholder="Parola ta"
                  placeholderTextColor={colors.inputPlaceholder}
                  secureTextEntry={!showPassword}
                  value={formData.password}
                  onChangeText={(text) => updateFormData("password", text)}
                  returnKeyType="done"
                  onSubmitEditing={handleLogin}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword((p) => !p)}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={colors.inputPlaceholder}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <View style={styles.errorRow}>
                  <Ionicons
                    name="alert-circle"
                    size={14}
                    color={colors.error}
                  />
                  <Text style={[styles.errorText, { color: colors.error }]}>
                    {errors.password}
                  </Text>
                </View>
              )}
            </View>

            {/* Forgot Password */}
            <TouchableOpacity
              style={styles.forgotButton}
              onPress={() => router.push("/auth/forgot-password")}
            >
              <Text style={[styles.forgotText, { color: colors.primary }]}>
                Ai uitat parola?
              </Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity
              style={[
                styles.primaryButton,
                { backgroundColor: colors.primary },
                isLoginPending && { opacity: 0.5 },
              ]}
              onPress={handleLogin}
              disabled={isLoginPending}
              activeOpacity={0.8}
            >
              {isLoginPending ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.primaryButtonText}>Conectează-te</Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Register */}
          <View style={styles.registerRow}>
            <Text
              style={[styles.registerText, { color: colors.textSecondary }]}
            >
              Nu ai un cont?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/register")}>
              <Text style={[styles.registerLink, { color: colors.primary }]}>
                Creează cont
              </Text>
            </TouchableOpacity>
          </View>

          {/* Separator */}
          <View style={styles.separatorRow}>
            <View
              style={[styles.separatorLine, { backgroundColor: colors.border }]}
            />
            <Text style={[styles.separatorText, { color: colors.textMuted }]}>
              sau
            </Text>
            <View
              style={[styles.separatorLine, { backgroundColor: colors.border }]}
            />
          </View>

          {/* Social Login */}
          <View style={styles.socialContainer}>
            <GoogleLogin />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  illustrationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 8,
    height: 160,
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 32,
    marginTop: 6,
    lineHeight: 22,
  },
  formContainer: { width: "100%" },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
    marginLeft: 2,
    letterSpacing: 0.5,
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  inputIcon: {
    position: "absolute",
    left: 14,
    zIndex: 1,
  },
  input: {
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 16,
    borderWidth: 1.5,
  },
  inputWithIcon: {
    paddingLeft: 42,
  },
  eyeButton: {
    position: "absolute",
    right: 14,
  },
  errorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 6,
    marginLeft: 2,
  },
  errorText: {
    fontSize: 13,
    fontWeight: "500",
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginBottom: 24,
    marginTop: -4,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: "600",
  },
  primaryButton: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  registerText: { fontSize: 14 },
  registerLink: { fontSize: 14, fontWeight: "700" },
  separatorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 28,
    gap: 12,
  },
  separatorLine: {
    flex: 1,
    height: 1,
  },
  separatorText: {
    fontSize: 13,
    fontWeight: "500",
  },
  socialContainer: {
    alignItems: "center",
  },
});
