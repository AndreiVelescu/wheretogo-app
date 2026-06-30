import { useAppTheme } from "@/src/contexts/ThemeContext";
import { useCreatePost, usePublishPost } from "@/src/feed/hooks";
import { useDeletePost } from "@/src/feed/hooks/useDeletePost";
import { useMyPosts } from "@/src/feed/hooks/useGetMyPosts";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyPostsScreen() {
  const { posts, loading, error, refetch } = useMyPosts();
  const { remove: deletePost } = useDeletePost();
  const { publish } = usePublishPost();
  const { colors, isDark } = useAppTheme();

  const [refreshing, setRefreshing] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const handleDeletePost = (postId: number) => {
    Alert.alert("Delete Post", "Are you sure you want to delete this post?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await deletePost(postId);
            Alert.alert("Success", "Post deleted successfully");
          } catch (error) {
            Alert.alert(
              "Error",
              error instanceof Error ? error.message : "Failed to delete post"
            );
          }
        },
      },
    ]);
  };

  const handlePublishPost = async (postId: number) => {
    try {
      await publish(postId);
      Alert.alert("Success", "Post published successfully");
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "Failed to publish post"
      );
    }
  };

  const renderPost = ({ item }: any) => {
    const isPublished = !!item.publishedAt;

    // Fix HTTPS to HTTP for MinIO URLs (temporary workaround)
    const fixMediaUrl = (url: string) => {
      if (url && url.includes("10.22.248.182:9000")) {
        return url.replace("https://", "http://");
      }
      return url;
    };

    return (
      <View
        style={[
          styles.postCard,
          {
            backgroundColor: colors.card,
            shadowColor: isDark ? "transparent" : "#000",
          },
        ]}
      >
        {/* Post Header */}
        <View style={styles.postHeader}>
          <View style={styles.postTitleContainer}>
            <Text style={[styles.postTitle, { color: colors.text }]}>
              {item.title || "Untitled"}
            </Text>
            {!isPublished && (
              <View
                style={[styles.draftBadge, { backgroundColor: colors.warning }]}
              >
                <Text style={styles.draftText}>Draft</Text>
              </View>
            )}
          </View>
          <TouchableOpacity onPress={() => handleDeletePost(item.id)}>
            <Ionicons name="trash-outline" size={22} color={colors.error} />
          </TouchableOpacity>
        </View>

        {/* Post Description */}
        {item.description && (
          <Text
            style={[styles.postDescription, { color: colors.textSecondary }]}
            numberOfLines={2}
          >
            {item.description}
          </Text>
        )}

        {/* Post Media */}
        {item.media && item.media.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.mediaScroll}
          >
            {item.media.map((media: any) => (
              <Image
                key={media.id}
                source={{ uri: fixMediaUrl(media.url) }}
                style={[
                  styles.mediaImage,
                  { backgroundColor: colors.borderLight },
                ]}
                contentFit="cover"
                placeholder={{ blurhash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4" }}
                transition={200}
              />
            ))}
          </ScrollView>
        )}

        {/* Post Tags */}
        {item.tags && item.tags.length > 0 && (
          <View style={styles.tagsContainer}>
            {item.tags.slice(0, 3).map((tag: string, index: number) => (
              <View
                key={index}
                style={[styles.tag, { backgroundColor: colors.primarySoft }]}
              >
                <Text style={[styles.tagText, { color: colors.primary }]}>
                  #{tag}
                </Text>
              </View>
            ))}
            {item.tags.length > 3 && (
              <Text style={[styles.moreTagsText, { color: colors.textMuted }]}>
                +{item.tags.length - 3}
              </Text>
            )}
          </View>
        )}

        {/* Post Stats */}
        <View style={[styles.postStats, { borderTopColor: colors.separator }]}>
          <View style={styles.statItem}>
            <Ionicons
              name="heart-outline"
              size={18}
              color={colors.textSecondary}
            />
            <Text style={[styles.statText, { color: colors.textSecondary }]}>
              {item.likesCount}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons
              name="chatbubble-outline"
              size={18}
              color={colors.textSecondary}
            />
            <Text style={[styles.statText, { color: colors.textSecondary }]}>
              {item.commentsCount}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons
              name="bookmark-outline"
              size={18}
              color={colors.textSecondary}
            />
            <Text style={[styles.statText, { color: colors.textSecondary }]}>
              {item.savedCount}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons
              name="eye-outline"
              size={18}
              color={colors.textSecondary}
            />
            <Text style={[styles.statText, { color: colors.textSecondary }]}>
              {item.viewsCount}
            </Text>
          </View>
        </View>

        {/* Post Footer */}
        <View style={styles.postFooter}>
          <Text style={[styles.postDate, { color: colors.textMuted }]}>
            {isPublished
              ? `Published ${new Date(item.publishedAt).toLocaleDateString()}`
              : `Created ${new Date(item.createdAt).toLocaleDateString()}`}
          </Text>
          <View style={styles.postActions}>
            {!isPublished && (
              <TouchableOpacity
                style={[
                  styles.publishButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => handlePublishPost(item.id)}
              >
                <Text style={styles.publishButtonText}>Publish</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => router.push(`/post/${item.id}` as any)}
            >
              <Ionicons
                name="eye-outline"
                size={22}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  if (loading) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
      >
        <View style={styles.centerContainer}>
          <Ionicons
            name="alert-circle-outline"
            size={48}
            color={colors.error}
          />
          <Text style={[styles.errorText, { color: colors.textSecondary }]}>
            Failed to load posts
          </Text>
          <TouchableOpacity
            style={[styles.retryButton, { backgroundColor: colors.primary }]}
            onPress={onRefresh}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

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
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>
          My Posts
        </Text>
        <TouchableOpacity onPress={() => setShowCreateModal(true)}>
          <Ionicons name="add-circle" size={28} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Posts List */}
      {posts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="document-text-outline"
            size={64}
            color={colors.borderLight}
          />
          <Text style={[styles.emptyTitle, { color: colors.text }]}>
            No posts yet
          </Text>
          <Text
            style={[styles.emptyDescription, { color: colors.textSecondary }]}
          >
            Create your first post to share your experiences
          </Text>
          <TouchableOpacity
            style={[styles.createButton, { backgroundColor: colors.primary }]}
            onPress={() => setShowCreateModal(true)}
          >
            <Text style={styles.createButtonText}>Create Post</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}

      {/* Create Post Modal */}
      <Modal
        visible={showCreateModal}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <CreatePostModal onClose={() => setShowCreateModal(false)} />
      </Modal>
    </SafeAreaView>
  );
}

// Create Post Modal Component
function CreatePostModal({ onClose }: { onClose: () => void }) {
  const { createWithMedia, isLoading, uploadProgress } = useCreatePost();
  const { colors } = useAppTheme();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState<
    Array<{ uri: string; filename: string }>
  >([]);

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      const images = result.assets.map((asset) => {
        const uriParts = asset.uri.split("/");
        const originalFilename = uriParts[uriParts.length - 1] || "image.jpg";
        return {
          uri: asset.uri,
          filename: originalFilename,
        };
      });
      setSelectedImages(images);
    }
  };

  const handleCreate = async () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a title");
      return;
    }

    try {
      const result = await createWithMedia({
        type: "EXPERIENCE",
        title: title.trim(),
        description: description.trim(),
        visibility: "PUBLIC",
        media: selectedImages.map((img) => ({
          uri: img.uri,
          type: "IMAGE",
          filename: img.filename,
          contentType: "image/jpeg",
        })),
      });

      if (result?.success) {
        Alert.alert("Success", "Post created successfully!");
        onClose();
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "Failed to create post"
      );
    }
  };

  return (
    <SafeAreaView
      style={[styles.modalContainer, { backgroundColor: colors.background }]}
    >
      <View
        style={[
          styles.modalHeader,
          { backgroundColor: colors.card, borderBottomColor: colors.border },
        ]}
      >
        <TouchableOpacity onPress={onClose}>
          <Text style={[styles.cancelButton, { color: colors.textSecondary }]}>
            Cancel
          </Text>
        </TouchableOpacity>
        <Text style={[styles.modalTitle, { color: colors.text }]}>
          Create Post
        </Text>
        <TouchableOpacity onPress={handleCreate} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color={colors.primary} />
          ) : (
            <Text
              style={[styles.createButton, { backgroundColor: colors.primary }]}
            >
              Create
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.modalContent}>
        <TextInput
          style={[
            styles.titleInput,
            { backgroundColor: colors.card, color: colors.text },
          ]}
          placeholder="Post title"
          placeholderTextColor={colors.inputPlaceholder}
          value={title}
          onChangeText={setTitle}
          editable={!isLoading}
        />

        <TextInput
          style={[
            styles.descriptionInput,
            { backgroundColor: colors.card, color: colors.text },
          ]}
          placeholder="What's on your mind?"
          placeholderTextColor={colors.inputPlaceholder}
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          editable={!isLoading}
        />

        <TouchableOpacity
          style={[
            styles.addMediaButton,
            { backgroundColor: colors.card, borderColor: colors.primary },
          ]}
          onPress={pickImages}
          disabled={isLoading}
        >
          <Ionicons name="image-outline" size={24} color={colors.primary} />
          <Text style={[styles.addMediaText, { color: colors.primary }]}>
            Add Photos
          </Text>
        </TouchableOpacity>

        {selectedImages.length > 0 && (
          <View style={styles.selectedImagesContainer}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Selected Images ({selectedImages.length})
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {selectedImages.map((img, index) => (
                <View key={index} style={styles.selectedImageWrapper}>
                  <Image
                    source={{ uri: img.uri }}
                    style={[
                      styles.selectedImage,
                      { backgroundColor: colors.borderLight },
                    ]}
                    contentFit="cover"
                  />
                  <TouchableOpacity
                    style={[
                      styles.removeImageButton,
                      { backgroundColor: colors.card },
                    ]}
                    onPress={() =>
                      setSelectedImages(
                        selectedImages.filter((_, i) => i !== index)
                      )
                    }
                  >
                    <Ionicons
                      name="close-circle"
                      size={24}
                      color={colors.error}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Upload Progress */}
        {Object.keys(uploadProgress).length > 0 && (
          <View
            style={[styles.progressContainer, { backgroundColor: colors.card }]}
          >
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Uploading...
            </Text>
            {Object.values(uploadProgress).map((progress) => (
              <View key={progress.fileKey} style={styles.progressItem}>
                <Text
                  style={[
                    styles.progressFileName,
                    { color: colors.textSecondary },
                  ]}
                >
                  {progress.fileKey.split("/").pop()}
                </Text>
                <View
                  style={[
                    styles.progressBar,
                    { backgroundColor: colors.borderLight },
                  ]}
                >
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${progress.progress}%`,
                        backgroundColor: colors.primary,
                      },
                    ]}
                  />
                </View>
                <Text
                  style={[styles.progressText, { color: colors.textMuted }]}
                >
                  {progress.status}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  listContent: {
    padding: 16,
  },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  postTitleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  draftBadge: {
    backgroundColor: "#FFA500",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  draftText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  postDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
    lineHeight: 20,
  },
  mediaScroll: {
    marginBottom: 12,
  },
  mediaImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  tag: {
    backgroundColor: "#FFE8E8",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: "#E53935",
    fontWeight: "500",
  },
  moreTagsText: {
    fontSize: 12,
    color: "#666",
    alignSelf: "center",
  },
  postStats: {
    flexDirection: "row",
    gap: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    marginBottom: 12,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    fontSize: 14,
    color: "#666",
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postDate: {
    fontSize: 12,
    color: "#999",
  },
  postActions: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  publishButton: {
    backgroundColor: "#E53935",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  publishButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginTop: 16,
  },
  emptyDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },
  createButton: {
    backgroundColor: "#E53935",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 24,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    fontSize: 16,
    color: "#666",
    marginTop: 12,
  },
  retryButton: {
    backgroundColor: "#E53935",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 16,
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  cancelButton: {
    fontSize: 16,
    color: "#666",
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  descriptionInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    minHeight: 120,
    textAlignVertical: "top",
    marginBottom: 12,
  },
  addMediaButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E53935",
    borderStyle: "dashed",
  },
  addMediaText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E53935",
  },
  selectedImagesContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },
  selectedImageWrapper: {
    position: "relative",
    marginRight: 8,
  },
  selectedImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  removeImageButton: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  progressContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  progressItem: {
    marginBottom: 12,
  },
  progressFileName: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    marginBottom: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#E53935",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: "#999",
  },
});
