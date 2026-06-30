import { useCreatePost } from "@/src/feed/hooks";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

/**
 * Example component showing how to create a post with media upload
 */
export default function CreatePostExample() {
  const { createWithMedia, isLoading, uploadProgress } = useCreatePost();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState<
    Array<{ uri: string; filename: string }>
  >([]);

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      // Extract original filename or use default
      const images = result.assets.map((asset) => {
        const uriParts = asset.uri.split("/");
        const originalFilename = uriParts[uriParts.length - 1] || "image.jpg";
        return {
          uri: asset.uri,
          filename: originalFilename, // UUID will be generated automatically
        };
      });
      setSelectedImages(images);
    }
  };

  const handleCreatePost = async () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a title");
      return;
    }

    if (selectedImages.length === 0) {
      Alert.alert("Error", "Please select at least one image");
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
        // Reset form
        setTitle("");
        setDescription("");
        setSelectedImages([]);
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "Failed to create post"
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create New Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Post title"
        value={title}
        onChangeText={setTitle}
        editable={!isLoading}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description (optional)"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        editable={!isLoading}
      />

      <Button title="Pick Images" onPress={pickImages} disabled={isLoading} />

      {selectedImages.length > 0 && (
        <View style={styles.imagesContainer}>
          <Text style={styles.sectionTitle}>
            Selected Images ({selectedImages.length})
          </Text>
          {selectedImages.map((img, index) => (
            <Image
              key={index}
              source={{ uri: img.uri }}
              style={styles.thumbnail}
            />
          ))}
        </View>
      )}

      {/* Upload Progress */}
      {Object.keys(uploadProgress).length > 0 && (
        <View style={styles.progressContainer}>
          <Text style={styles.sectionTitle}>Upload Progress</Text>
          {Object.values(uploadProgress).map((progress) => (
            <View key={progress.fileKey} style={styles.progressItem}>
              <Text style={styles.progressText}>
                {progress.fileKey.split("/").pop()}
              </Text>
              <Text style={styles.progressText}>
                {progress.status} - {progress.progress}%
              </Text>
              {progress.error && (
                <Text style={styles.errorText}>{progress.error}</Text>
              )}
            </View>
          ))}
        </View>
      )}

      <View style={styles.buttonContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#E53935" />
        ) : (
          <Button
            title="Create Post"
            onPress={handleCreatePost}
            disabled={!title.trim() || selectedImages.length === 0}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  imagesContainer: {
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  progressContainer: {
    marginTop: 16,
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  progressItem: {
    marginBottom: 8,
  },
  progressText: {
    fontSize: 14,
    color: "#666",
  },
  errorText: {
    fontSize: 14,
    color: "#E53935",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});
