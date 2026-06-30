import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { CREATE_POST_MUTATION } from "../feed.operations";
import { CreatePostInput } from "../feed.types";
import { useMediaUpload } from "./useMediaUpload";

export interface CreatePostMedia {
  uri: string; // Local file URI
  type: "IMAGE" | "VIDEO";
  filename: string;
  contentType: string;
}

export interface CreatePostWithMediaInput {
  type: "EXPERIENCE" | "TIP" | "REVIEW" | "STORY";
  title: string;
  description?: string;
  tags?: string[];
  locationId?: number;
  tripId?: number;
  visibility?: "PUBLIC" | "PRIVATE" | "FOLLOWERS";
  media: CreatePostMedia[];
}

export const useCreatePost = () => {
  const [createPostMutation, { loading: createLoading, error: createError }] =
    useMutation(CREATE_POST_MUTATION, {
      refetchQueries: ["MyPosts"],
    });

  const { uploadMultipleFiles, uploadProgress, clearProgress } =
    useMediaUpload();

  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  /**
   * Original create method (without media upload)
   */
  const create = async (input: CreatePostInput) => {
    const { data } = await createPostMutation({ variables: { input } });
    return data;
  };

  /**
   * Create post with automatic media upload
   */
  const createWithMedia = async (input: CreatePostWithMediaInput) => {
    setIsUploading(true);
    setUploadError(null);

    try {
      // Step 1: Upload all media files
      const uploadedFiles = await uploadMultipleFiles(
        input.media.map((media) => ({
          uri: media.uri,
          filename: media.filename,
          contentType: media.contentType,
        }))
      );

      // Step 2: Create post with uploaded media URLs
      const { data } = await createPostMutation({
        variables: {
          input: {
            type: input.type,
            title: input.title,
            description: input.description,
            tags: input.tags,
            locationId: input.locationId,
            tripId: input.tripId,
            visibility: input.visibility || "PUBLIC",
            media: uploadedFiles.map((file, index) => ({
              type: input.media[index].type,
              url: file.url,
              order: index,
            })),
          },
        },
      });

      clearProgress();
      return data?.createPost;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to create post";
      setUploadError(errorMessage);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    create,
    createWithMedia,
    isLoading: createLoading || isUploading,
    error: createError || uploadError,
    uploadProgress,
    clearProgress,
  };
};
