import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/src/contexts/AuthContext";
import { GOOGLE_CONFIG } from "@/src/config/google";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin() {
  const { googleLogin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const redirectUri = __DEV__
    ? "https://auth.expo.io/@anonymous/wheretogo"
    : `${GOOGLE_CONFIG.REDIRECT_URI_SCHEME}://oauthredirect`;

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "718045600252-qhkgltnlf2g1kc4qmhu89a8f6c9cfg69.apps.googleusercontent.com",
    iosClientId: GOOGLE_CONFIG.IOS_CLIENT_ID,
    redirectUri,
    scopes: ["profile", "email"],
    responseType: "id_token",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { params } = response;
      console.log("🔐 Google Response:", response);

      if (params.id_token) {
        console.log(
          "✅ ID Token received:",
          params.id_token.substring(0, 50) + "..."
        );
        handleGoogleLoginBackend(params.id_token);
      } else {
        console.error("❌ No ID token in response:", response);
        Toast.show({
          type: "error",
          text1: "Google Login Error",
          text2: "No ID token received from Google",
          autoHide: true,
          position: "top",
          visibilityTime: 3000,
          topOffset: 60,
        });
      }
    } else if (response?.type === "error") {
      console.error("❌ Google OAuth Error:", response.error);
      Toast.show({
        type: "error",
        text1: "Google Login Error",
        text2: response.error?.message || "Failed to connect to Google",
        autoHide: true,
        position: "top",
        visibilityTime: 3000,
        topOffset: 60,
      });
    }
  }, [response]);

  const handleGoogleLoginBackend = async (idToken: string) => {
    setIsLoading(true);
    try {
      console.log(
        "🚀 Sending idToken to backend:",
        idToken.substring(0, 50) + "..."
      );
      await googleLogin(idToken); // trimitem idToken la backend

      Toast.show({
        type: "success",
        text1: "Login successful",
        text2: "Welcome to WhereToGo!",
        autoHide: true,
        position: "top",
        visibilityTime: 2000,
        topOffset: 60,
      });

      router.replace("/(tabs)/home");
    } catch (error: any) {
      console.error("❌ Backend login error:", error);
      Toast.show({
        type: "error",
        text1: "Google Login Failed",
        text2: error?.message || "Please try again",
        autoHide: true,
        position: "top",
        visibilityTime: 3000,
        topOffset: 60,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptAsync = async () => {
    try {
      await promptAsync();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Failed to open Google login",
        autoHide: true,
        position: "top",
        visibilityTime: 3000,
        topOffset: 60,
      });
    }
  };

  return (
    <TouchableOpacity
      style={[styles.socialButton, { backgroundColor: "#DB4437" }]}
      onPress={handlePromptAsync}
      disabled={!request || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <Ionicons name="logo-google" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
