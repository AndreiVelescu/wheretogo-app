import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ActivityIndicator,
  Animated,
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
import Toast from "react-native-toast-message";

import Mascot from "@/components/Mascot";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useCheckNickname } from "@/src/features/auth/auth.hooks";
import { useDebounce } from "@/src/hooks/useDebounce";
import { RegisterFormData, registerSchema } from "@/src/schemas/auth";

const TOTAL_STEPS = 3;

// ── Password strength helper ──
function getPasswordStrength(password: string) {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { label: "Slab", color: "#EF4444", ratio: 0.25 };
  if (score <= 3) return { label: "Mediu", color: "#F59E0B", ratio: 0.5 };
  if (score <= 4) return { label: "Bun", color: "#3B82F6", ratio: 0.75 };
  return { label: "Puternic", color: "#10B981", ratio: 1 };
}

export default function RegisterScreen() {
  const { colors, isDark } = useAppTheme();
  const { register: authRegister, login: authLogin } = useAuth();

  const [step, setStep] = useState(1);
  const [isPending, setIsPending] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Nickname availability
  const {
    checkNickname,
    isAvailable: nicknameAvailable,
    isChecking: isCheckingNickname,
  } = useCheckNickname();
  const debouncedNickname = useDebounce(formData.nickname?.trim() || "", 400);

  useEffect(() => {
    if (
      debouncedNickname.length >= 3 &&
      /^[a-zA-Z][a-zA-Z0-9._]*$/.test(debouncedNickname)
    ) {
      checkNickname(debouncedNickname);
    }
  }, [debouncedNickname]);

  // Refs for focus
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmRef = useRef<TextInput>(null);
  const nicknameRef = useRef<TextInput>(null);

  const passwordStrength = useMemo(
    () => getPasswordStrength(formData.password),
    [formData.password]
  );

  const updateField = useCallback(
    (field: keyof RegisterFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    [errors]
  );

  const markTouched = useCallback((field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }, []);

  // ── Step 1 validation ──
  const validateStep1 = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};
    const name = formData.name.trim();
    const email = formData.email.trim();

    if (!name) newErrors.name = "Numele este obligatoriu";
    else if (name.length < 2)
      newErrors.name = "Numele trebuie să aibă minim 2 caractere";
    else if (!/^[a-zA-ZÀ-ž\s'-]+$/.test(name))
      newErrors.name = "Numele poate conține doar litere și spații";

    if (!email) newErrors.email = "Email-ul este obligatoriu";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Introdu un email valid";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.name, formData.email]);

  // ── Step 2 validation ──
  const validateStep2 = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.password) newErrors.password = "Parola este obligatorie";
    else if (formData.password.length < 8)
      newErrors.password = "Minim 8 caractere";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password))
      newErrors.password =
        "Trebuie cel puțin o literă mare, una mică și o cifră";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirmă parola";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Parolele nu se potrivesc";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.password, formData.confirmPassword]);

  // ── Step 3 validation ──
  const validateStep3 = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};
    const nickname = formData.nickname?.trim() || "";

    if (!nickname) newErrors.nickname = "Nickname-ul este obligatoriu";
    else if (nickname.length < 3) newErrors.nickname = "Minim 3 caractere";
    else if (nickname.length > 20) newErrors.nickname = "Maxim 20 caractere";
    else if (!/^[a-zA-Z]/.test(nickname))
      newErrors.nickname = "Trebuie să înceapă cu o literă";
    else if (!/^[a-zA-Z][a-zA-Z0-9._]*$/.test(nickname))
      newErrors.nickname = "Doar litere, cifre, punct sau underscore";
    else if (nicknameAvailable === false)
      newErrors.nickname = "Acest nickname este deja folosit";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.nickname, nicknameAvailable]);

  // ── Navigation ──
  const animateSlide = useCallback(
    (direction: "forward" | "back", callback: () => void) => {
      const toValue = direction === "forward" ? -30 : 30;
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
      setTimeout(callback, 60);
    },
    [slideAnim]
  );

  const goNext = useCallback(() => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    animateSlide("forward", () => setStep((s) => Math.min(s + 1, TOTAL_STEPS)));
  }, [step, validateStep1, validateStep2, animateSlide]);

  const goBack = useCallback(() => {
    if (step === 1) {
      router.back();
      return;
    }
    animateSlide("back", () => setStep((s) => Math.max(s - 1, 1)));
  }, [step, animateSlide]);

  // ── Submit ──
  const handleRegister = useCallback(async () => {
    if (!validateStep3()) return;

    // Full Zod validation
    try {
      registerSchema.parse(formData);
    } catch (zodError: any) {
      const fieldErrors: Record<string, string> = {};
      zodError.errors?.forEach((err: any) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      if (Object.keys(fieldErrors).some((k) => k === "name" || k === "email")) {
        setStep(1);
      } else if (
        Object.keys(fieldErrors).some(
          (k) => k === "password" || k === "confirmPassword"
        )
      ) {
        setStep(2);
      }
      return;
    }

    setIsPending(true);
    try {
      await authRegister(formData);

      Toast.show({
        type: "success",
        text1: "Cont creat cu succes! 🎉",
        text2: "Bine ai venit!",
        position: "top",
        visibilityTime: 2000,
        topOffset: 60,
      });

      router.replace("/(tabs)/explore");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Înregistrare eșuată",
        text2: error?.message || "Ceva nu a mers bine",
        position: "top",
        visibilityTime: 3000,
        topOffset: 60,
      });
    } finally {
      setIsPending(false);
    }
  }, [formData, validateStep3, authRegister]);

  // ── Helpers ──
  const renderError = (field: string) => {
    if (!errors[field]) return null;
    return (
      <View style={styles.errorRow}>
        <Ionicons name="alert-circle" size={14} color={colors.error} />
        <Text style={[styles.errorText, { color: colors.error }]}>
          {errors[field]}
        </Text>
      </View>
    );
  };

  const inputStyle = (field: string) => [
    styles.input,
    {
      backgroundColor: colors.inputBackground,
      borderColor: errors[field] ? colors.error : colors.inputBorder,
      color: colors.text,
    },
  ];

  // ── Step 1: Name & Email ──
  const renderStep1 = () => (
    <>
      <Text style={[styles.stepTitle, { color: colors.text }]}>
        Despre tine
      </Text>
      <Text style={[styles.stepSubtitle, { color: colors.textSecondary }]}>
        Spune-ne cum te cheamă și cum te putem contacta
      </Text>

      <View style={styles.fieldGroup}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Nume complet
        </Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="person-outline"
            size={18}
            color={colors.inputPlaceholder}
            style={styles.inputIcon}
          />
          <TextInput
            style={[...inputStyle("name"), styles.inputWithIcon]}
            placeholder="ex: Ion Popescu"
            placeholderTextColor={colors.inputPlaceholder}
            value={formData.name}
            onChangeText={(t) => updateField("name", t)}
            onBlur={() => markTouched("name")}
            autoCapitalize="words"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current?.focus()}
          />
        </View>
        {renderError("name")}
      </View>

      <View style={styles.fieldGroup}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Adresă de email
        </Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="mail-outline"
            size={18}
            color={colors.inputPlaceholder}
            style={styles.inputIcon}
          />
          <TextInput
            ref={emailRef}
            style={[...inputStyle("email"), styles.inputWithIcon]}
            placeholder="email@exemplu.com"
            placeholderTextColor={colors.inputPlaceholder}
            value={formData.email}
            onChangeText={(t) => updateField("email", t)}
            onBlur={() => markTouched("email")}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={goNext}
          />
        </View>
        {renderError("email")}
      </View>
    </>
  );

  // ── Step 2: Password ──
  const renderStep2 = () => (
    <>
      <Text style={[styles.stepTitle, { color: colors.text }]}>Securitate</Text>
      <Text style={[styles.stepSubtitle, { color: colors.textSecondary }]}>
        Alege o parolă puternică pentru contul tău
      </Text>

      <View style={styles.fieldGroup}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Parolă
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
            style={[
              ...inputStyle("password"),
              styles.inputWithIcon,
              { paddingRight: 48 },
            ]}
            placeholder="Minim 8 caractere"
            placeholderTextColor={colors.inputPlaceholder}
            secureTextEntry={!showPassword}
            value={formData.password}
            onChangeText={(t) => updateField("password", t)}
            onBlur={() => markTouched("password")}
            returnKeyType="next"
            onSubmitEditing={() => confirmRef.current?.focus()}
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
        {renderError("password")}

        {/* Password strength bar */}
        {formData.password.length > 0 && (
          <View style={styles.strengthContainer}>
            <View
              style={[
                styles.strengthTrack,
                { backgroundColor: isDark ? colors.borderLight : "#E5E7EB" },
              ]}
            >
              <View
                style={[
                  styles.strengthFill,
                  {
                    backgroundColor: passwordStrength.color,
                    width: `${passwordStrength.ratio * 100}%`,
                  },
                ]}
              />
            </View>
            <Text
              style={[styles.strengthLabel, { color: passwordStrength.color }]}
            >
              {passwordStrength.label}
            </Text>
          </View>
        )}

        <View style={styles.hintRow}>
          <Ionicons
            name="information-circle-outline"
            size={14}
            color={colors.textMuted}
          />
          <Text style={[styles.hintText, { color: colors.textMuted }]}>
            Literă mare, literă mică și o cifră
          </Text>
        </View>
      </View>

      <View style={styles.fieldGroup}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>
          Confirmă parola
        </Text>
        <View style={styles.inputWrapper}>
          <Ionicons
            name="shield-checkmark-outline"
            size={18}
            color={colors.inputPlaceholder}
            style={styles.inputIcon}
          />
          <TextInput
            ref={confirmRef}
            style={[
              ...inputStyle("confirmPassword"),
              styles.inputWithIcon,
              { paddingRight: 48 },
            ]}
            placeholder="Rescrie parola"
            placeholderTextColor={colors.inputPlaceholder}
            secureTextEntry={!showConfirm}
            value={formData.confirmPassword}
            onChangeText={(t) => updateField("confirmPassword", t)}
            onBlur={() => markTouched("confirmPassword")}
            returnKeyType="next"
            onSubmitEditing={goNext}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setShowConfirm((p) => !p)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name={showConfirm ? "eye-outline" : "eye-off-outline"}
              size={20}
              color={colors.inputPlaceholder}
            />
          </TouchableOpacity>
        </View>
        {renderError("confirmPassword")}

        {/* Match indicator */}
        {formData.confirmPassword.length > 0 &&
          formData.password === formData.confirmPassword && (
            <View style={styles.matchRow}>
              <Ionicons
                name="checkmark-circle"
                size={14}
                color={colors.success}
              />
              <Text style={[styles.matchText, { color: colors.success }]}>
                Parolele se potrivesc
              </Text>
            </View>
          )}
      </View>
    </>
  );

  // ── Step 3: Nickname ──
  const renderStep3 = () => {
    const nick = formData.nickname?.trim() || "";
    const isValid = nick.length >= 3 && /^[a-zA-Z][a-zA-Z0-9._]*$/.test(nick);
    return (
      <>
        <Text style={[styles.stepTitle, { color: colors.text }]}>
          Alege-ți nickname-ul
        </Text>
        <Text style={[styles.stepSubtitle, { color: colors.textSecondary }]}>
          Acesta va fi numele tău unic în aplicație
        </Text>

        <View style={styles.fieldGroup}>
          <Text style={[styles.label, { color: colors.textSecondary }]}>
            NICKNAME
          </Text>
          <View style={styles.inputWrapper}>
            <Ionicons
              name="at-outline"
              size={18}
              color={colors.inputPlaceholder}
              style={styles.inputIcon}
            />
            <TextInput
              ref={nicknameRef}
              style={[...inputStyle("nickname"), styles.inputWithIcon]}
              placeholder="ex: ion.popescu"
              placeholderTextColor={colors.inputPlaceholder}
              value={formData.nickname}
              onChangeText={(t) =>
                updateField("nickname", t.toLowerCase().replace(/\s/g, ""))
              }
              onBlur={() => markTouched("nickname")}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={handleRegister}
            />
          </View>
          {renderError("nickname")}

          {/* Availability indicator */}
          {nick.length >= 3 &&
            isValid &&
            !errors.nickname &&
            (isCheckingNickname ? (
              <View style={styles.matchRow}>
                <ActivityIndicator
                  size="small"
                  color={colors.textMuted}
                  style={{ width: 14, height: 14 }}
                />
                <Text style={[styles.matchText, { color: colors.textMuted }]}>
                  Se verifică...
                </Text>
              </View>
            ) : nicknameAvailable === true ? (
              <View style={styles.matchRow}>
                <Ionicons
                  name="checkmark-circle"
                  size={14}
                  color={colors.success}
                />
                <Text style={[styles.matchText, { color: colors.success }]}>
                  Nickname disponibil
                </Text>
              </View>
            ) : nicknameAvailable === false ? (
              <View style={styles.matchRow}>
                <Ionicons name="close-circle" size={14} color={colors.error} />
                <Text style={[styles.matchText, { color: colors.error }]}>
                  Nickname-ul este deja folosit
                </Text>
              </View>
            ) : null)}

          <View style={styles.hintRow}>
            <Ionicons
              name="information-circle-outline"
              size={14}
              color={colors.textMuted}
            />
            <Text style={[styles.hintText, { color: colors.textMuted }]}>
              3-20 caractere • începe cu literă • litere, cifre, . sau _
            </Text>
          </View>
        </View>

        {/* Preview */}
        {nick.length > 0 && (
          <View
            style={[
              styles.nicknamePreview,
              {
                backgroundColor: isDark ? colors.card : colors.inputBackground,
                borderColor: colors.border,
              },
            ]}
          >
            <Ionicons
              name="person-circle-outline"
              size={40}
              color={colors.primary}
            />
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={[styles.previewName, { color: colors.text }]}>
                {formData.name}
              </Text>
              <Text
                style={[
                  styles.previewNickname,
                  { color: colors.textSecondary },
                ]}
              >
                @{nick}
              </Text>
            </View>
          </View>
        )}
      </>
    );
  };

  // ── Check if current step is complete (for button enable) ──
  const isStepValid = useMemo(() => {
    if (step === 1) {
      return formData.name.trim().length >= 2 && formData.email.includes("@");
    }
    if (step === 2) {
      return (
        formData.password.length >= 8 &&
        formData.confirmPassword.length > 0 &&
        formData.password === formData.confirmPassword
      );
    }
    // Step 3
    const nick = formData.nickname?.trim() || "";
    return (
      nick.length >= 3 &&
      /^[a-zA-Z][a-zA-Z0-9._]*$/.test(nick) &&
      nicknameAvailable === true &&
      !isCheckingNickname
    );
  }, [step, formData, nicknameAvailable, isCheckingNickname]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={goBack}
            style={[
              styles.backButton,
              {
                backgroundColor: isDark ? colors.card : colors.inputBackground,
              },
            ]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={20} color={colors.text} />
          </TouchableOpacity>

          {/* Step indicator */}
          <View style={styles.stepsRow}>
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <View
                key={i}
                style={[
                  styles.stepDot,
                  {
                    backgroundColor:
                      i + 1 <= step
                        ? colors.primary
                        : isDark
                        ? colors.borderLight
                        : "#E5E7EB",
                    width: i + 1 === step ? 24 : 8,
                  },
                ]}
              />
            ))}
          </View>

          <Text style={[styles.stepCounter, { color: colors.textMuted }]}>
            {step}/{TOTAL_STEPS}
          </Text>
        </View>

        {/* ── Content ── */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Animated.View
              style={{
                transform: [{ translateX: slideAnim }],
              }}
            >
              {step === 1
                ? renderStep1()
                : step === 2
                ? renderStep2()
                : renderStep3()}
            </Animated.View>
            <View>
              <Mascot width={160} />
            </View>
          </View>
        </ScrollView>

        {/* ── Footer ── */}
        <View
          style={[
            styles.footer,
            {
              borderTopColor: colors.border,
              backgroundColor: colors.background,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.primaryButton,
              { backgroundColor: colors.primary },
              (!isStepValid || isPending) && { opacity: 0.5 },
            ]}
            onPress={step === TOTAL_STEPS ? handleRegister : goNext}
            disabled={!isStepValid || isPending}
            activeOpacity={0.8}
          >
            {isPending ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <View style={styles.buttonInner}>
                <Text style={styles.primaryButtonText}>
                  {step === TOTAL_STEPS ? "Creează cont" : "Continuă"}
                </Text>
                {step < TOTAL_STEPS && (
                  <Ionicons name="arrow-forward" size={18} color="#fff" />
                )}
              </View>
            )}
          </TouchableOpacity>

          {step === 1 && (
            <View style={styles.loginRow}>
              <Text style={[styles.loginText, { color: colors.textSecondary }]}>
                Ai deja un cont?{" "}
              </Text>
              <TouchableOpacity onPress={() => router.push("/auth/login")}>
                <Text style={[styles.loginLink, { color: colors.primary }]}>
                  Conectează-te
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  stepsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  stepDot: {
    height: 8,
    borderRadius: 4,
  },
  stepCounter: {
    fontSize: 13,
    fontWeight: "600",
  },

  // Scroll content
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 32,
  },
  stepTitle: {
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  stepSubtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 32,
  },

  // Fields
  fieldGroup: {
    marginBottom: 22,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
    marginLeft: 2,
    textTransform: "uppercase",
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

  // Errors
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

  // Hints
  hintRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 8,
    marginLeft: 2,
  },
  hintText: {
    fontSize: 12,
  },

  // Strength bar
  strengthContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  strengthTrack: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    overflow: "hidden",
  },
  strengthFill: {
    height: "100%",
    borderRadius: 2,
  },
  strengthLabel: {
    fontSize: 12,
    fontWeight: "700",
    width: 60,
  },

  // Match
  matchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 6,
    marginLeft: 2,
  },
  matchText: {
    fontSize: 13,
    fontWeight: "500",
  },

  // Footer
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: Platform.OS === "ios" ? 8 : 16,
    borderTopWidth: 1,
  },
  primaryButton: {
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  loginText: {
    fontSize: 14,
  },
  loginLink: {
    fontSize: 14,
    fontWeight: "700",
  },

  // Nickname preview
  nicknamePreview: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 4,
  },
  previewName: {
    fontSize: 16,
    fontWeight: "700",
  },
  previewNickname: {
    fontSize: 14,
    marginTop: 2,
  },
});
