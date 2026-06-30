import { useMutation } from "@apollo/client/react";
import * as Crypto from "expo-crypto";
import * as FileSystem from "expo-file-system/legacy";
import { useState } from "react";
import {
  CONFIRM_UPLOAD_MUTATION,
  DELETE_UPLOAD_MUTATION,
  REQUEST_UPLOAD_MUTATION,
} from "../media.operations";

/**
 * Generate a unique filename using UUID
 */
const generateUniqueFilename = (originalFilename: string): string => {
  const uuid = Crypto.randomUUID();
  const extension = originalFilename.split(".").pop() || "jpg";
  return `${uuid}.${extension}`;
};

export interface UploadProgress {
  fileKey: string;
  progress: number;
  status: "pending" | "uploading" | "confirming" | "completed" | "failed";
  error?: string;
}

export interface MediaUploadResult {
  url: string;
  fileKey: string;
  size: number;
  contentType: string;
}

export const useMediaUpload = () => {
  const [requestUpload] = useMutation(REQUEST_UPLOAD_MUTATION);
  const [confirmUpload] = useMutation(CONFIRM_UPLOAD_MUTATION);
  const [deleteUpload] = useMutation(DELETE_UPLOAD_MUTATION);

  const [uploadProgress, setUploadProgress] = useState<
    Record<string, UploadProgress>
  >({});

  /**
   * Upload a single file to MinIO
   * @param uri - Local file URI
   * @param filename - Original filename (UUID will be generated automatically)
   * @param contentType - MIME type (e.g., 'image/jpeg')
   */
  const uploadFile = async (
    uri: string,
    filename: string,
    contentType: string
  ): Promise<MediaUploadResult> => {
    let fileKey: string | null = null;

    try {
      // Generate unique filename to avoid collisions
      const uniqueFilename = generateUniqueFilename(filename);

      // Step 1: Request presigned upload URL
      const { data: requestData } = await requestUpload({
        variables: {
          input: {
            filename: uniqueFilename,
            contentType,
          },
        },
      });

      if (!requestData?.requestUpload) {
        throw new Error("Failed to get upload URL");
      }

      const { uploadUrl, fileKey: key } = requestData.requestUpload;
      fileKey = key;

      // Track progress
      setUploadProgress((prev) => ({
        ...prev,
        [fileKey!]: {
          fileKey: fileKey!,
          progress: 0,
          status: "uploading",
        },
      }));

      // Step 2: Upload file directly to MinIO using presigned URL
      const uploadResult = await FileSystem.uploadAsync(uploadUrl, uri, {
        httpMethod: "PUT",
        headers: {
          "Content-Type": contentType,
        },
      });

      if (uploadResult.status !== 200) {
        throw new Error(`Upload failed with status ${uploadResult.status}`);
      }

      // Update progress
      setUploadProgress((prev) => ({
        ...prev,
        [fileKey!]: {
          fileKey: fileKey!,
          progress: 100,
          status: "confirming",
        },
      }));

      // Step 3: Confirm upload on backend
      const { data: confirmData } = await confirmUpload({
        variables: {
          input: { fileKey },
        },
      });

      if (!confirmData?.confirmUpload?.success) {
        throw new Error("Failed to confirm upload");
      }

      const result = confirmData.confirmUpload;

      // Update progress
      setUploadProgress((prev) => ({
        ...prev,
        [fileKey!]: {
          fileKey: fileKey!,
          progress: 100,
          status: "completed",
        },
      }));

      return {
        url: result.url,
        fileKey: result.fileKey,
        size: result.size,
        contentType: result.contentType,
      };
    } catch (error) {
      // Update progress with error
      if (fileKey) {
        setUploadProgress((prev) => ({
          ...prev,
          [fileKey!]: {
            fileKey: fileKey!,
            progress: 0,
            status: "failed",
            error: error instanceof Error ? error.message : "Upload failed",
          },
        }));
      }

      // Try to cleanup failed upload
      if (fileKey) {
        try {
          await deleteUpload({ variables: { fileKey } });
        } catch (cleanupError) {
          console.warn("Failed to cleanup failed upload:", cleanupError);
        }
      }

      throw error;
    }
  };

  /**
   * Upload multiple files
   */
  const uploadMultipleFiles = async (
    files: Array<{
      uri: string;
      filename: string;
      contentType: string;
    }>
  ): Promise<MediaUploadResult[]> => {
    const results: MediaUploadResult[] = [];

    for (const file of files) {
      try {
        const result = await uploadFile(
          file.uri,
          file.filename,
          file.contentType
        );
        results.push(result);
      } catch (error) {
        console.error(`Failed to upload ${file.filename}:`, error);
        // Cleanup previously uploaded files on any failure
        for (const uploadedResult of results) {
          try {
            await deleteUpload({
              variables: { fileKey: uploadedResult.fileKey },
            });
          } catch (cleanupError) {
            console.warn("Failed to cleanup upload:", cleanupError);
          }
        }
        throw error;
      }
    }

    return results;
  };

  /**
   * Delete an uploaded file
   */
  const deleteFile = async (fileKey: string): Promise<boolean> => {
    try {
      const { data } = await deleteUpload({ variables: { fileKey } });
      return data?.deleteUpload ?? false;
    } catch (error) {
      console.error("Failed to delete file:", error);
      return false;
    }
  };

  /**
   * Clear upload progress tracking
   */
  const clearProgress = () => {
    setUploadProgress({});
  };

  return {
    uploadFile,
    uploadMultipleFiles,
    deleteFile,
    uploadProgress,
    clearProgress,
    generateUniqueFilename, // Export helper for manual filename generation
  };
};
