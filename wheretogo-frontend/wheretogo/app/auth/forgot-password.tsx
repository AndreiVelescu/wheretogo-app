import ForgotMascot from "@/components/ForgotMascot";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useAppTheme();

  const handleReset = () => {
    if (!email.trim()) return;

    console.log("Reset password for:", email);
    setModalVisible(true);
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <View style={styles.content}>
        <View style={styles.backIconContainer}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={colors.text}
            onPress={() => router.back()}
          />
        </View>
        <Text style={[styles.title, { color: colors.text }]}>
          Forgot password
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Enter your email account to reset{"\n"}your password
        </Text>

        <TextInput
          style={[
            styles.input,
            { backgroundColor: colors.inputBackground, color: colors.text },
          ]}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>

        <ForgotMascot width={200} height={260} />
      </View>

      {/* MODAL - Check Email */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={[styles.modalBox, { backgroundColor: colors.card }]}>
            <View
              style={[styles.iconCircle, { backgroundColor: colors.primary }]}
            >
              {/* Poți adăuga aici un icon svg/png */}
              {/* <Image source={require("../assets/mail-icon.png")} style={{ width: 28, height: 28 }} /> */}
              <Text style={styles.iconText}>📧</Text>
            </View>

            <Text style={styles.modalTitle}>Check your email</Text>
            <Text style={styles.modalText}>
              We have sent password recovery instructions to your email
            </Text>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    marginLeft: 20,
    marginTop: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F2F3F5",
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: {
    fontSize: 24,
    color: "#333",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  backIconContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#999",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#F7F8FA",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#E54848",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  mascot: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },

  // modal
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E54848",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  iconText: {
    fontSize: 26,
    color: "#fff",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },
  modalText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#E54848",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  closeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
