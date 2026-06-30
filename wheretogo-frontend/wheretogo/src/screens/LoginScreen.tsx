/**
 * 🔐 Login Screen
 * Exemplu de screen FĂRĂ logică business (doar UI + hooks)
 */

import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Input, ScreenWrapper } from "../components";
import { useLogin } from "../features";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    login({ email, password })
      .then((response) => {
        if (response.success) {
          Alert.alert("Success", "Logged in successfully!");
          // Navigate to home or handle success
        } else {
          Alert.alert("Error", response.message || "Login failed");
        }
      })
      .catch((error) => {
        Alert.alert("Error", error.message || "Login failed");
      });
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={handleLogin}
          loading={isLoading}
          fullWidth
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
    textAlign: "center",
  },
});
