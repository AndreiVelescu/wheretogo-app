# Media Upload Frontend Implementation

## Overview

Frontend implementation for uploading media files to MinIO using presigned URLs. The flow is:

1. Request presigned URL from backend
2. Upload file directly to MinIO
3. Confirm upload with backend
4. Use returned URL in post creation

## Installation

Required packages (already in most Expo projects):

```bash
npx expo install expo-file-system
```

## Usage

### Basic Upload

```typescript
import { useMediaUpload } from "@/src/feed/hooks";

function MyComponent() {
  const { uploadFile, uploadProgress } = useMediaUpload();

  const handleUpload = async (uri: string) => {
    try {
      const result = await uploadFile(uri, "photo.jpg", "image/jpeg");

      console.log("Uploaded URL:", result.url);
      console.log("File size:", result.size);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
}
```

### Create Post with Media

```typescript
import { useCreatePost } from "@/src/feed/hooks";
import * as ImagePicker from "expo-image-picker";

function CreatePost() {
  const { createWithMedia, isLoading, uploadProgress } = useCreatePost();

  const pickAndCreatePost = async () => {
    // Pick images
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (result.canceled) return;

    // Create post with automatic upload
    await createWithMedia({
      type: "EXPERIENCE",
      title: "My Amazing Trip",
      description: "Check out these photos!",
      visibility: "PUBLIC",
      media: result.assets.map((asset, index) => ({
        uri: asset.uri,
        type: "IMAGE",
        filename: `photo_${Date.now()}_${index}.jpg`,
        contentType: "image/jpeg",
      })),
    });
  };

  return (
    <View>
      <Button title="Create Post" onPress={pickAndCreatePost} />

      {/* Show upload progress */}
      {Object.values(uploadProgress).map((progress) => (
        <Text key={progress.fileKey}>
          {progress.status}: {progress.progress}%
        </Text>
      ))}
    </View>
  );
}
```

### Multiple Files Upload

```typescript
import { useMediaUpload } from "@/src/feed/hooks";

function BulkUpload() {
  const { uploadMultipleFiles } = useMediaUpload();

  const uploadPhotos = async (photos: Array<{ uri: string }>) => {
    const files = photos.map((photo, index) => ({
      uri: photo.uri,
      filename: `photo_${index}.jpg`,
      contentType: "image/jpeg",
    }));

    const results = await uploadMultipleFiles(files);

    // All files uploaded successfully
    console.log(
      "Uploaded URLs:",
      results.map((r) => r.url)
    );
  };
}
```

## API Reference

### useMediaUpload Hook

**Returns:**

- `uploadFile(uri, filename, contentType)` - Upload single file
- `uploadMultipleFiles(files[])` - Upload multiple files
- `deleteFile(fileKey)` - Delete uploaded file
- `uploadProgress` - Object with upload progress for each file
- `clearProgress()` - Clear progress tracking

**Upload Progress Object:**

```typescript
{
  [fileKey: string]: {
    fileKey: string;
    progress: number; // 0-100
    status: 'pending' | 'uploading' | 'confirming' | 'completed' | 'failed';
    error?: string;
  }
}
```

### useCreatePost Hook

**Returns:**

- `create(input)` - Create post (traditional way, no upload)
- `createWithMedia(input)` - Create post with automatic media upload
- `isLoading` - Combined loading state (upload + create)
- `error` - Combined error (upload or create)
- `uploadProgress` - Upload progress tracking
- `clearProgress()` - Clear upload progress

**CreatePostWithMediaInput:**

```typescript
{
  type: 'EXPERIENCE' | 'TIP' | 'REVIEW' | 'STORY';
  title: string;
  description?: string;
  tags?: string[];
  locationId?: number;
  tripId?: number;
  visibility?: 'PUBLIC' | 'PRIVATE' | 'FOLLOWERS';
  media: Array<{
    uri: string;          // Local file URI
    type: 'IMAGE' | 'VIDEO';
    filename: string;
    contentType: string;  // 'image/jpeg', 'image/png', etc.
  }>;
}
```

## Content Types

Common content types:

- Images: `image/jpeg`, `image/png`, `image/webp`
- Videos: `video/mp4`, `video/quicktime`

## Error Handling

The hooks automatically handle:

- Failed uploads (cleanup on backend)
- Network errors
- Invalid file formats
- Expired presigned URLs

All errors are thrown and should be caught:

```typescript
try {
  await createWithMedia(input);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
```

## Upload Progress Tracking

```typescript
const { uploadProgress } = useCreatePost();

// Display progress for each file
Object.entries(uploadProgress).map(([fileKey, progress]) => (
  <View key={fileKey}>
    <Text>{progress.status}</Text>
    <ProgressBar value={progress.progress} />
    {progress.error && <Text>{progress.error}</Text>}
  </View>
));
```

## Example Component

See `CreatePostExample.tsx` for a complete working example with:

- Image picker integration
- Upload progress display
- Error handling
- Form validation

## Backend Integration

The frontend automatically communicates with these GraphQL mutations:

- `requestUpload` - Get presigned URL
- `confirmUpload` - Confirm successful upload
- `deleteUpload` - Cleanup failed uploads

Make sure these are available on your backend!

## File Naming

Files are automatically organized:

```
uploads/
  {userId}/
    {uuid}.{extension}
```

Example: `uploads/123/a1b2c3d4-e5f6-7890-abcd-ef1234567890.jpg`

## Cleanup

Failed uploads are automatically cleaned up. To manually delete a file:

```typescript
const { deleteFile } = useMediaUpload();

await deleteFile(fileKey);
```

## Performance Tips

1. **Compress images before upload:**

```typescript
import * as ImageManipulator from "expo-image-manipulator";

const compressed = await ImageManipulator.manipulateAsync(
  uri,
  [{ resize: { width: 1920 } }],
  { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
);
```

2. **Use sequential uploads for multiple files** (already implemented)
3. **Show progress feedback to users** (uploadProgress)

## Troubleshooting

**Upload fails with 403:**

- Check MinIO credentials in backend `.env`
- Verify bucket exists and is accessible

**Upload succeeds but confirm fails:**

- Check file actually exists in MinIO
- Verify fileKey format is correct

**Presigned URL expired:**

- URLs expire in 15 minutes
- Don't cache URLs, request fresh ones

## Next Steps

- [ ] Add image compression
- [ ] Add thumbnail generation
- [ ] Add video upload support
- [ ] Add drag-and-drop upload
- [ ] Add bulk delete functionality
