/**
 * 📸 Avatar Upload Hook
 *
 * Complete flow:
 *   1. Pick image (gallery or camera)
 *   2. requestUpload → presigned URL + fileKey
 *   3. Upload to MinIO via presigned URL
 *   4. confirmUpload → final URL
 *   5. updateAvatar → persist to user profile
 *
 * Also supports removeAvatar.
 */

import { useMutation } from "@apollo/client/react";
import * as Crypto from "expo-crypto";
import * as FileSystem from "expo-file-system/legacy";
import * as ImagePicker from "expo-image-picker";
import { useCallback, useState } from "react";
import {
  CONFIRM_UPLOAD_MUTATION,
  REQUEST_UPLOAD_MUTATION,
} from "../../feed/media.operations";
import { useRemoveAvatar, useUpdateAvatar } from "./user.hooks";

export type AvatarUploadStatus =
  | "idle"
  | "picking"
  | "uploading"
  | "confirming"
  | "saving"
  | "done"
  | "error";

export interface AvatarUploadState {
  status: AvatarUploadStatus;
  progress: number; // 0-100
  error: string | null;
  localUri: string | null; // preview while uploading
}

const INITIAL_STATE: AvatarUploadState = {
  status: "idle",
  progress: 0,
  error: null,
  localUri: null,
};

export const useAvatarUpload = () => {
  const [state, setState] = useState<AvatarUploadState>(INITIAL_STATE);

  const [requestUpload] = useMutation<{
    requestUpload: {
      uploadUrl: string;
      fileKey: string;
      sessionId: string;
      expiresIn: number;
      expiresAt: string;
    };
  }>(REQUEST_UPLOAD_MUTATION);
  const [confirmUpload] = useMutation<{
    confirmUpload: {
      success: boolean;
      fileKey: string;
      url: string;
      size: number;
      contentType: string;
    };
  }>(CONFIRM_UPLOAD_MUTATION);
  const { updateAvatar } = useUpdateAvatar();
  const { removeAvatar, isLoading: isRemoving } = useRemoveAvatar();

  // ─── Reset state ─────────────────────────────────
  const reset = useCallback(() => setState(INITIAL_STATE), []);

  // ─── Pick image from gallery ─────────────────────
  const pickFromGallery = useCallback(async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setState((s) => ({
        ...s,
        status: "error",
        error: "Gallery permission denied",
      }));
      return null;
    }

    setState((s) => ({ ...s, status: "picking" }));

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (result.canceled || !result.assets?.[0]) {
      setState(INITIAL_STATE);
      return null;
    }

    return result.assets[0];
  }, []);

  // ─── Pick image from camera ──────────────────────
  const pickFromCamera = useCallback(async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      setState((s) => ({
        ...s,
        status: "error",
        error: "Camera permission denied",
      }));
      return null;
    }

    setState((s) => ({ ...s, status: "picking" }));

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (result.canceled || !result.assets?.[0]) {
      setState(INITIAL_STATE);
      return null;
    }

    return result.assets[0];
  }, []);

  // ─── Core upload flow ────────────────────────────
  const uploadAndSetAvatar = useCallback(
    async (asset: ImagePicker.ImagePickerAsset) => {
      const uri = asset.uri;
      const extension = uri.split(".").pop()?.toLowerCase() || "jpg";
      const contentType = extension === "png" ? "image/png" : "image/jpeg";
      const uniqueFilename = `avatar-${Crypto.randomUUID()}.${extension}`;

      // Show local preview immediately
      setState({
        status: "uploading",
        progress: 0,
        error: null,
        localUri: uri,
      });

      try {
        // Step 1: Request presigned URL
        console.log("[Avatar] Step 1: Requesting presigned URL...", {
          filename: uniqueFilename,
          contentType,
        });
        const { data: reqData } = await requestUpload({
          variables: {
            input: {
              filename: uniqueFilename,
              contentType,
            },
          },
        });

        if (!reqData?.requestUpload) {
          throw new Error("Failed to get upload URL");
        }

        const { uploadUrl, fileKey } = reqData.requestUpload;
        console.log("[Avatar] Step 1 OK:", {
          fileKey,
          uploadUrl: uploadUrl.substring(0, 80) + "...",
        });

        setState((s) => ({ ...s, progress: 25 }));

        // Step 2: Upload to MinIO
        console.log("[Avatar] Step 2: Uploading to MinIO...");
        const uploadResult = await FileSystem.uploadAsync(uploadUrl, uri, {
          httpMethod: "PUT",
          headers: { "Content-Type": contentType },
        });

        console.log("[Avatar] Step 2 result:", {
          status: uploadResult.status,
          bodyLength: uploadResult.body?.length,
        });

        if (uploadResult.status !== 200) {
          throw new Error(
            `MinIO upload failed (status ${
              uploadResult.status
            }): ${uploadResult.body?.substring(0, 200)}`
          );
        }

        setState((s) => ({ ...s, status: "confirming", progress: 60 }));

        // Step 3: Confirm upload
        console.log("[Avatar] Step 3: Confirming upload...", { fileKey });
        const { data: confirmData } = await confirmUpload({
          variables: { input: { fileKey } },
        });

        if (!confirmData?.confirmUpload?.success) {
          throw new Error("Upload confirmation failed");
        }

        const finalUrl: string = confirmData.confirmUpload.url;
        console.log("[Avatar] Step 3 OK:", { finalUrl });

        setState((s) => ({ ...s, status: "saving", progress: 85 }));

        // Step 4: Set avatar on user profile
        console.log("[Avatar] Step 4: Updating avatar on profile...");
        await updateAvatar(finalUrl);
        console.log("[Avatar] Step 4 OK — avatar updated!");

        setState({
          status: "done",
          progress: 100,
          error: null,
          localUri: uri,
        });

        return finalUrl;
      } catch (err) {
        console.error("[Avatar] Upload failed at some step:", err);
        const message =
          err instanceof Error ? err.message : "Avatar upload failed";
        setState({
          status: "error",
          progress: 0,
          error: message,
          localUri: null,
        });
        throw err;
      }
    },
    [requestUpload, confirmUpload, updateAvatar]
  );

  // ─── Public helpers ──────────────────────────────
  const uploadFromGallery = useCallback(async () => {
    const asset = await pickFromGallery();
    if (!asset) return null;
    return uploadAndSetAvatar(asset);
  }, [pickFromGallery, uploadAndSetAvatar]);

  const uploadFromCamera = useCallback(async () => {
    const asset = await pickFromCamera();
    if (!asset) return null;
    return uploadAndSetAvatar(asset);
  }, [pickFromCamera, uploadAndSetAvatar]);

  const handleRemoveAvatar = useCallback(async () => {
    try {
      setState((s) => ({ ...s, status: "saving", progress: 50 }));
      await removeAvatar();
      setState({ ...INITIAL_STATE, status: "done" });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to remove avatar";
      setState({
        status: "error",
        progress: 0,
        error: message,
        localUri: null,
      });
      throw err;
    }
  }, [removeAvatar]);

  const isUploading =
    state.status === "uploading" ||
    state.status === "confirming" ||
    state.status === "saving" ||
    state.status === "picking";

  return {
    /** Current upload state */
    state,
    /** True while any async avatar operation is in progress */
    isUploading: isUploading || isRemoving,
    /** Pick from gallery → upload → set avatar (full flow) */
    uploadFromGallery,
    /** Take photo → upload → set avatar (full flow) */
    uploadFromCamera,
    /** Upload a pre-picked asset (e.g. from external picker) */
    uploadAndSetAvatar,
    /** Remove avatar from profile */
    removeAvatar: handleRemoveAvatar,
    /** Reset state back to idle */
    reset,
  };
};
