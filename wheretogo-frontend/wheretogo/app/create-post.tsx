import { useAppTheme } from "@/src/contexts/ThemeContext";
import { PostType, PostVisibility } from "@/src/feed/feed.types";
import { useCreatePost } from "@/src/feed/hooks";
import type { CreatePostMedia } from "@/src/feed/hooks/useCreatePost";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
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

// ─── Types ──────────────────────────────────────────────
type PostTypeOption = {
  value: PostType;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  description: string;
  color: string;
};

type VisibilityOption = {
  value: PostVisibility;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

// ─── Constants ──────────────────────────────────────────
const POST_TYPES: PostTypeOption[] = [
  {
    value: PostType.EXPERIENCE,
    label: "Experience",
    icon: "sparkles",
    description: "Share a travel experience",
    color: "#FF6B6B",
  },
  {
    value: PostType.TIP,
    label: "Tip",
    icon: "bulb",
    description: "Share a useful travel tip",
    color: "#FFA726",
  },
  {
    value: PostType.TRIP,
    label: "Trip",
    icon: "airplane",
    description: "Share a complete trip",
    color: "#42A5F5",
  },
];

const VISIBILITY_OPTIONS: VisibilityOption[] = [
  { value: PostVisibility.PUBLIC, label: "Public", icon: "globe-outline" },
  { value: PostVisibility.FRIENDS, label: "Friends", icon: "people-outline" },
  {
    value: PostVisibility.PRIVATE,
    label: "Only me",
    icon: "lock-closed-outline",
  },
];

// ─── Screen ─────────────────────────────────────────────
export default function CreatePostScreen() {
  const { createWithMedia, create, isLoading, uploadProgress } =
    useCreatePost();
  const { colors, isDark } = useAppTheme();

  // Form state
  const [step, setStep] = useState<1 | 2>(1); // 1 = type picker, 2 = form
  const [postType, setPostType] = useState<PostType>(PostType.EXPERIENCE);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [visibility, setVisibility] = useState<PostVisibility>(
    PostVisibility.PUBLIC
  );
  const [selectedMedia, setSelectedMedia] = useState<
    ImagePicker.ImagePickerAsset[]
  >([]);
  const [publishNow, setPublishNow] = useState(true);

  // ─── Media Picker ───────────────────────────────────
  const pickImages = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(
        "Permission needed",
        "Allow access to your photo library to add images."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsMultipleSelection: true,
      selectionLimit: 10,
      quality: 0.8,
      videoMaxDuration: 60,
    });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedMedia((prev) => [...prev, ...result.assets].slice(0, 10));
    }
  };

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission needed", "Allow camera access to take photos.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.8,
      allowsEditing: true,
    });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedMedia((prev) => [...prev, ...result.assets].slice(0, 10));
    }
  };

  const removeMedia = (index: number) => {
    setSelectedMedia((prev) => prev.filter((_, i) => i !== index));
  };

  // ─── Tags parsing ────────────────────────────────────
  const parseTags = (input: string): string[] => {
    return input
      .split(/[,\s#]+/)
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t.length > 0);
  };

  // ─── Submit ─────────────────────────────────────────
  const handleSubmit = async () => {
    if (!title.trim()) {
      Alert.alert("Missing title", "Please add a title to your post.");
      return;
    }

    try {
      if (selectedMedia.length > 0) {
        const media: CreatePostMedia[] = selectedMedia.map((asset) => ({
          uri: asset.uri,
          type: (asset.type === "video" ? "VIDEO" : "IMAGE") as
            | "IMAGE"
            | "VIDEO",
          filename: asset.fileName || `media_${Date.now()}.jpg`,
          contentType: asset.mimeType || "image/jpeg",
        }));

        await createWithMedia({
          type: postType as any,
          title: title.trim(),
          description: description.trim() || undefined,
          tags: parseTags(tags),
          visibility: visibility as any,
          media,
        });
      } else {
        await create({
          type: postType,
          title: title.trim(),
          description: description.trim() || undefined,
          tags: parseTags(tags),
          visibility,
          publishNow,
        });
      }

      Alert.alert("Success! 🎉", "Your post has been created.", [
        { text: "View Feed", onPress: () => router.replace("/(tabs)/feed") },
        { text: "My Posts", onPress: () => router.replace("/my-posts") },
      ]);
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "Failed to create post"
      );
    }
  };

  // ─── Upload progress ────────────────────────────────
  const totalProgress = Object.values(uploadProgress);
  const overallProgress =
    totalProgress.length > 0
      ? totalProgress.reduce((sum, p) => sum + p.progress, 0) /
        totalProgress.length
      : 0;

  // ─── Step 1: Type Picker ────────────────────────────
  if (step === 1) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <View
          style={[
            styles.header,
            { backgroundColor: colors.card, borderBottomColor: colors.border },
          ]}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={26} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.text }]}>
            New Post
          </Text>
          <View style={{ width: 26 }} />
        </View>

        <View style={styles.typePickerContent}>
          <Text style={[styles.typePickerTitle, { color: colors.text }]}>
            What do you want to share?
          </Text>
          <Text
            style={[styles.typePickerSubtitle, { color: colors.textMuted }]}
          >
            Choose the type that best fits your content
          </Text>

          <View style={styles.typeCards}>
            {POST_TYPES.map((type) => (
              <TouchableOpacity
                key={type.value}
                style={[
                  styles.typeCard,
                  { backgroundColor: colors.card, borderColor: colors.border },
                  postType === type.value && {
                    borderColor: type.color,
                    backgroundColor: type.color + "08",
                  },
                ]}
                activeOpacity={0.7}
                onPress={() => setPostType(type.value)}
              >
                <View
                  style={[
                    styles.typeIconCircle,
                    { backgroundColor: type.color + "15" },
                  ]}
                >
                  <Ionicons name={type.icon} size={28} color={type.color} />
                </View>
                <Text style={[styles.typeCardLabel, { color: colors.text }]}>
                  {type.label}
                </Text>
                <Text
                  style={[styles.typeCardDesc, { color: colors.textMuted }]}
                >
                  {type.description}
                </Text>
                {postType === type.value && (
                  <View
                    style={[
                      styles.typeCheckmark,
                      { backgroundColor: type.color },
                    ]}
                  >
                    <Ionicons name="checkmark" size={14} color="#fff" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={[
            styles.bottomBar,
            { backgroundColor: colors.card, borderTopColor: colors.border },
          ]}
        >
          <TouchableOpacity
            style={[styles.nextButton, { backgroundColor: colors.primary }]}
            onPress={() => setStep(2)}
          >
            <Text style={styles.nextButtonText}>Continue</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ─── Step 2: Form ───────────────────────────────────
  const activeType = POST_TYPES.find((t) => t.value === postType)!;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View
          style={[
            styles.header,
            { backgroundColor: colors.card, borderBottomColor: colors.border },
          ]}
        >
          <TouchableOpacity onPress={() => setStep(1)}>
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Ionicons
              name={activeType.icon}
              size={16}
              color={activeType.color}
            />
            <Text style={[styles.headerTitle, { color: colors.text }]}>
              {activeType.label}
            </Text>
          </View>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={24} color={colors.textMuted} />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.formScroll}
          contentContainerStyle={styles.formContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Title */}
          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { color: colors.text }]}>
              Title *
            </Text>
            <TextInput
              style={[
                styles.titleInput,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Give your post a catchy title..."
              placeholderTextColor={colors.inputPlaceholder}
              value={title}
              onChangeText={setTitle}
              maxLength={150}
              multiline
            />
            <Text style={[styles.charCount, { color: colors.textMuted }]}>
              {title.length}/150
            </Text>
          </View>

          {/* Description */}
          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { color: colors.text }]}>
              Description
            </Text>
            <TextInput
              style={[
                styles.descriptionInput,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="Tell your story..."
              placeholderTextColor={colors.inputPlaceholder}
              value={description}
              onChangeText={setDescription}
              maxLength={2000}
              multiline
              textAlignVertical="top"
            />
            <Text style={[styles.charCount, { color: colors.textMuted }]}>
              {description.length}/2000
            </Text>
          </View>

          {/* Media */}
          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { color: colors.text }]}>
              Photos & Videos{" "}
              <Text style={[styles.inputHint, { color: colors.textMuted }]}>
                ({selectedMedia.length}/10)
              </Text>
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.mediaRow}
              contentContainerStyle={styles.mediaRowContent}
            >
              {/* Add buttons */}
              <TouchableOpacity
                style={[
                  styles.addMediaBtn,
                  {
                    borderColor: colors.primarySoft,
                    backgroundColor: isDark ? colors.cardElevated : "#FFF8F8",
                  },
                ]}
                onPress={pickImages}
              >
                <Ionicons
                  name="images-outline"
                  size={26}
                  color={colors.primary}
                />
                <Text style={[styles.addMediaLabel, { color: colors.primary }]}>
                  Gallery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.addMediaBtn,
                  {
                    borderColor: colors.primarySoft,
                    backgroundColor: isDark ? colors.cardElevated : "#FFF8F8",
                  },
                ]}
                onPress={takePhoto}
              >
                <Ionicons
                  name="camera-outline"
                  size={26}
                  color={colors.primary}
                />
                <Text style={[styles.addMediaLabel, { color: colors.primary }]}>
                  Camera
                </Text>
              </TouchableOpacity>

              {/* Previews */}
              {selectedMedia.map((asset, idx) => (
                <View key={idx} style={styles.mediaPreviewContainer}>
                  <Image
                    source={{ uri: asset.uri }}
                    style={[
                      styles.mediaPreview,
                      { backgroundColor: colors.borderLight },
                    ]}
                    contentFit="cover"
                  />
                  <TouchableOpacity
                    style={[
                      styles.removeMediaBtn,
                      { backgroundColor: colors.card },
                    ]}
                    onPress={() => removeMedia(idx)}
                  >
                    <Ionicons
                      name="close-circle"
                      size={22}
                      color={colors.error}
                    />
                  </TouchableOpacity>
                  {asset.type === "video" && (
                    <View style={styles.videoBadge}>
                      <Ionicons name="videocam" size={12} color="#fff" />
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Tags */}
          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { color: colors.text }]}>
              Tags
            </Text>
            <TextInput
              style={[
                styles.tagsInput,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                },
              ]}
              placeholder="travel, sunset, japan (comma separated)"
              placeholderTextColor={colors.inputPlaceholder}
              value={tags}
              onChangeText={setTags}
              autoCapitalize="none"
            />
            {tags.length > 0 && (
              <View style={styles.tagsPreview}>
                {parseTags(tags)
                  .slice(0, 6)
                  .map((tag, i) => (
                    <View
                      key={i}
                      style={[
                        styles.tagChip,
                        { backgroundColor: colors.primarySoft },
                      ]}
                    >
                      <Text
                        style={[styles.tagChipText, { color: colors.primary }]}
                      >
                        #{tag}
                      </Text>
                    </View>
                  ))}
              </View>
            )}
          </View>

          {/* Visibility */}
          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { color: colors.text }]}>
              Who can see this?
            </Text>
            <View style={styles.visibilityRow}>
              {VISIBILITY_OPTIONS.map((opt) => (
                <TouchableOpacity
                  key={opt.value}
                  style={[
                    styles.visibilityOption,
                    {
                      backgroundColor: colors.card,
                      borderColor: colors.border,
                    },
                    visibility === opt.value && {
                      borderColor: colors.primary,
                      backgroundColor: colors.primarySoft,
                    },
                  ]}
                  onPress={() => setVisibility(opt.value)}
                >
                  <Ionicons
                    name={opt.icon}
                    size={18}
                    color={
                      visibility === opt.value
                        ? colors.primary
                        : colors.textMuted
                    }
                  />
                  <Text
                    style={[
                      styles.visibilityLabel,
                      { color: colors.textMuted },
                      visibility === opt.value && { color: colors.primary },
                    ]}
                  >
                    {opt.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Publish toggle */}
          <TouchableOpacity
            style={[
              styles.toggleRow,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={() => setPublishNow(!publishNow)}
            activeOpacity={0.7}
          >
            <View style={styles.toggleInfo}>
              <Ionicons
                name={publishNow ? "rocket" : "time-outline"}
                size={20}
                color={publishNow ? colors.primary : colors.textMuted}
              />
              <View>
                <Text style={[styles.toggleLabel, { color: colors.text }]}>
                  {publishNow ? "Publish immediately" : "Save as draft"}
                </Text>
                <Text style={[styles.toggleHint, { color: colors.textMuted }]}>
                  {publishNow
                    ? "Your post will be visible right away"
                    : "You can publish later from My Posts"}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.toggle,
                { backgroundColor: colors.borderLight },
                publishNow && { backgroundColor: colors.primary },
              ]}
            >
              <View
                style={[styles.toggleThumb, publishNow && styles.toggleThumbOn]}
              />
            </View>
          </TouchableOpacity>

          {/* Spacer */}
          <View style={{ height: 100 }} />
        </ScrollView>

        {/* Upload progress overlay */}
        {isLoading && (
          <View style={styles.progressOverlay}>
            <View
              style={[styles.progressCard, { backgroundColor: colors.card }]}
            >
              <ActivityIndicator size="large" color={colors.primary} />
              <Text style={[styles.progressText, { color: colors.text }]}>
                {totalProgress.length > 0
                  ? `Uploading media... ${Math.round(overallProgress * 100)}%`
                  : "Creating post..."}
              </Text>
              {totalProgress.length > 0 && (
                <View
                  style={[
                    styles.progressBarTrack,
                    { backgroundColor: colors.borderLight },
                  ]}
                >
                  <View
                    style={[
                      styles.progressBarFill,
                      {
                        width: `${overallProgress * 100}%`,
                        backgroundColor: colors.primary,
                      },
                    ]}
                  />
                </View>
              )}
            </View>
          </View>
        )}

        {/* Submit button */}
        <View
          style={[
            styles.bottomBar,
            { backgroundColor: colors.card, borderTopColor: colors.border },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.submitButton,
              { backgroundColor: colors.primary },
              isLoading && styles.submitDisabled,
            ]}
            onPress={handleSubmit}
            disabled={isLoading}
            activeOpacity={0.8}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <>
                <Ionicons
                  name={publishNow ? "rocket" : "save-outline"}
                  size={18}
                  color="#fff"
                />
                <Text style={styles.submitText}>
                  {publishNow ? "Publish" : "Save Draft"}
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ─── Styles ─────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A2E",
  },

  // Step 1: Type Picker
  typePickerContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  typePickerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1A1A2E",
    marginBottom: 6,
  },
  typePickerSubtitle: {
    fontSize: 15,
    color: "#8A8A9D",
    marginBottom: 32,
  },
  typeCards: {
    gap: 14,
  },
  typeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#F0F0F0",
    gap: 14,
    position: "relative",
  },
  typeIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  typeCardLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A2E",
  },
  typeCardDesc: {
    fontSize: 13,
    color: "#8A8A9D",
    position: "absolute",
    right: 16,
  },
  typeCheckmark: {
    position: "absolute",
    top: -6,
    right: -6,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },

  // Bottom bar
  bottomBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E5E7EB",
  },
  nextButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6B6B",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },

  // Step 2: Form
  formScroll: {
    flex: 1,
  },
  formContent: {
    padding: 16,
    gap: 20,
  },
  inputGroup: {
    gap: 6,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A1A2E",
    marginBottom: 2,
  },
  inputHint: {
    fontWeight: "400",
    color: "#999",
  },
  titleInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: "#1A1A2E",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    fontWeight: "600",
  },
  descriptionInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#1A1A2E",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    minHeight: 120,
    lineHeight: 22,
  },
  charCount: {
    fontSize: 12,
    color: "#B0B0B0",
    textAlign: "right",
  },

  // Media
  mediaRow: {
    marginTop: 4,
  },
  mediaRowContent: {
    gap: 10,
    paddingRight: 8,
  },
  addMediaBtn: {
    width: 90,
    height: 90,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#FFD4D4",
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF8F8",
    gap: 4,
  },
  addMediaLabel: {
    fontSize: 11,
    color: "#FF6B6B",
    fontWeight: "600",
  },
  mediaPreviewContainer: {
    position: "relative",
  },
  mediaPreview: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: "#E5E7EB",
  },
  removeMediaBtn: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#fff",
    borderRadius: 11,
  },
  videoBadge: {
    position: "absolute",
    bottom: 4,
    left: 4,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },

  // Tags
  tagsInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#1A1A2E",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  tagsPreview: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 6,
  },
  tagChip: {
    backgroundColor: "#FFF0F0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagChipText: {
    fontSize: 13,
    color: "#FF6B6B",
    fontWeight: "500",
  },

  // Visibility
  visibilityRow: {
    flexDirection: "row",
    gap: 10,
  },
  visibilityOption: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
  },
  visibilityActive: {
    borderColor: "#FF6B6B",
    backgroundColor: "#FFF5F5",
  },
  visibilityLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#999",
  },
  visibilityLabelActive: {
    color: "#FF6B6B",
  },

  // Publish toggle
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  toggleInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  toggleLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A1A2E",
  },
  toggleHint: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  toggle: {
    width: 46,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  toggleOn: {
    backgroundColor: "#FF6B6B",
  },
  toggleThumb: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#fff",
  },
  toggleThumbOn: {
    alignSelf: "flex-end",
  },

  // Progress overlay
  progressOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  progressCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 28,
    alignItems: "center",
    gap: 16,
    width: "75%",
  },
  progressText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A1A2E",
  },
  progressBarTrack: {
    width: "100%",
    height: 4,
    backgroundColor: "#F0F0F0",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#FF6B6B",
    borderRadius: 2,
  },

  // Submit
  submitButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6B6B",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  submitDisabled: {
    opacity: 0.6,
  },
  submitText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
