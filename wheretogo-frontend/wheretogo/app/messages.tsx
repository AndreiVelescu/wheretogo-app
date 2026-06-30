import { ChatSelection } from "@/src/components/chat";
import { ChatRoom } from "@/src/components/chat/types";
import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MessagesScreen() {
  const [activeTab, setActiveTab] = useState<"trips" | "direct">("trips");
  const { isAuthenticated, user } = useAuth();
  const { colors } = useAppTheme();

  if (!user) {
    return null; // or a loading indicator
  }

  const handleChatSelect = (chatRoom: ChatRoom) => {
    router.push(`/chat/${chatRoom.id}`);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={[styles.safeHeader, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={28} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <ChatSelection
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onChatSelect={handleChatSelect}
        isAuthenticated={isAuthenticated}
        currentUserId={Number(user.id)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  safeHeader: {
    backgroundColor: "#F9FAFB",
  },
  header: {
    paddingLeft: 4,
    paddingBottom: 8,
  },
  backButton: {
    padding: 4,
    paddingRight: 8,
  },
});
