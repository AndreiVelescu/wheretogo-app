import { ChatScreen } from "@/src/components/chat";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useMyChats } from "@/src/hooks/useChat";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function ChatRoomScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useAuth();
  const { tripChats, directChats, loading } = useMyChats();
  const { colors } = useAppTheme();

  if (!user) {
    return null;
  }

  // Find the chat room by ID from cached data
  const allChats = [...tripChats, ...directChats];
  const chatRoom = allChats.find((chat) => chat.id === Number(id));

  // Only show loading if we don't have the chat room and still loading
  if (!chatRoom && loading) {
    return (
      <View
        style={[
          styles.loadingContainer,
          { backgroundColor: colors.background },
        ]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  // If not loading and still no chat room, show error
  if (!chatRoom) {
    return (
      <View
        style={[styles.errorContainer, { backgroundColor: colors.background }]}
      >
        <Text style={[styles.errorText, { color: colors.textSecondary }]}>
          Chat-ul nu a fost găsit
        </Text>
      </View>
    );
  }

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/messages");
    }
  };

  return (
    <ChatScreen
      chatRoom={chatRoom}
      onGoBack={handleGoBack}
      currentUserId={Number(user.id)}
      currentUserName={user?.name || "Tu"}
    />
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  errorText: {
    fontSize: 16,
    color: "#6B7280",
  },
});
