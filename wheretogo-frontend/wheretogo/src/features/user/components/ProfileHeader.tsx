/**
 * 📸 Profile Header — Avatar, name, bio, avatar upload
 */

import { useAppTheme } from "@/src/contexts/ThemeContext";
import { User } from "@/src/features/auth/auth.types";
import { useAvatarUpload } from "@/src/features/user/useAvatarUpload";
import { normalizeRemoteImageUrl } from "@/src/utils/imageUtils";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  ActionSheetIOS,
  ActivityIndicator,
  Alert,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ProfileHeaderProps {
  user: User | null;
  onEditProfile: () => void;
}

export function ProfileHeader({ user, onEditProfile }: ProfileHeaderProps) {
  const { colors } = useAppTheme();
  const {
    state: avatarState,
    isUploading,
    uploadFromGallery,
    uploadFromCamera,
    removeAvatar,
  } = useAvatarUpload();

  const avatarUri =
    avatarState.localUri || user?.avatar || user?.profilePicture || null;

  const resolvedAvatarUri = avatarState.localUri
    ? avatarState.localUri
    : avatarUri
      ? normalizeRemoteImageUrl(avatarUri)
      : null;

  const initials = (user?.name || "?")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleAvatarPress = () => {
    if (isUploading) return;
    const hasAvatar = !!resolvedAvatarUri;

    const doUploadGallery = async () => {
      try {
        await uploadFromGallery();
      } catch (e: any) {
        Alert.alert("Upload Failed", e?.message || "Could not upload photo");
      }
    };

    const doUploadCamera = async () => {
      try {
        await uploadFromCamera();
      } catch (e: any) {
        Alert.alert("Upload Failed", e?.message || "Could not upload photo");
      }
    };

    const doRemove = () => {
      Alert.alert(
        "Remove Photo",
        "Are you sure you want to remove your profile photo?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Remove",
            style: "destructive",
            onPress: async () => {
              try {
                await removeAvatar();
              } catch (e: any) {
                Alert.alert("Error", e?.message || "Could not remove photo");
              }
            },
          },
        ],
      );
    };

    if (Platform.OS === "ios") {
      const options = hasAvatar
        ? ["Cancel", "Choose from Gallery", "Take Photo", "Remove Photo"]
        : ["Cancel", "Choose from Gallery", "Take Photo"];

      ActionSheetIOS.showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex: 0,
          destructiveButtonIndex: hasAvatar ? 3 : undefined,
          title: "Change Profile Photo",
        },
        (idx: number) => {
          if (idx === 1) doUploadGallery();
          else if (idx === 2) doUploadCamera();
          else if (idx === 3 && hasAvatar) doRemove();
        },
      );
    } else {
      const buttons: any[] = [
        { text: "Cancel", style: "cancel" },
        { text: "Choose from Gallery", onPress: doUploadGallery },
        { text: "Take Photo", onPress: doUploadCamera },
      ];
      if (hasAvatar) {
        buttons.push({
          text: "Remove Photo",
          style: "destructive",
          onPress: doRemove,
        });
      }
      Alert.alert("Change Profile Photo", undefined, buttons);
    }
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <TouchableOpacity
        onPress={handleAvatarPress}
        disabled={isUploading}
        activeOpacity={0.7}
      >
        <View style={styles.avatarWrapper}>
          {resolvedAvatarUri ? (
            <Image
              source={{ uri: resolvedAvatarUri }}
              style={[
                styles.avatar,
                { borderColor: colors.border },
                isUploading && styles.avatarDimmed,
              ]}
            />
          ) : (
            <View
              style={[
                styles.avatar,
                styles.avatarPlaceholder,
                { backgroundColor: colors.primary },
              ]}
            >
              <Text style={styles.avatarInitials}>{initials}</Text>
            </View>
          )}
          {isUploading ? (
            <View style={styles.avatarOverlay}>
              <ActivityIndicator size="small" color="#fff" />
            </View>
          ) : (
            <View
              style={[
                styles.cameraBadge,
                {
                  backgroundColor: colors.primary,
                  borderColor: colors.background,
                },
              ]}
            >
              <Feather name="camera" size={11} color="#fff" />
            </View>
          )}
        </View>
      </TouchableOpacity>

      {/* Name & bio below avatar */}
      <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
        {user?.name || "Travel Explorer"}
      </Text>
      {user?.email ? (
        <Text
          style={[styles.bio, { color: colors.textSecondary }]}
          numberOfLines={2}
        >
          {user.email}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },

  // Avatar
  avatarWrapper: { position: "relative", alignSelf: "center" },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 2,
    borderColor: "#EFEFEF",
  },
  avatarDimmed: { opacity: 0.5 },
  avatarPlaceholder: {
    backgroundColor: "#FF6B6B",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitials: {
    fontSize: 30,
    fontWeight: "800",
    color: "#fff",
  },
  avatarOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 43,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBadge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FF6B6B",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FAFAFA",
  },

  // Info
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A2E",
    textAlign: "center",
    marginTop: 10,
  },
  bio: {
    fontSize: 13,
    color: "#8A8A9D",
    textAlign: "center",
    marginTop: 2,
  },
});
