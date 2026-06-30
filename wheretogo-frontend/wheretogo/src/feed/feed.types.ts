export enum PostType {
  EXPERIENCE = "EXPERIENCE",
  TIP = "TIP",
  TRIP = "TRIP",
}

export enum PostVisibility {
  PUBLIC = "PUBLIC",
  FRIENDS = "FRIENDS",
  PRIVATE = "PRIVATE",
}

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
}

export enum SharePlatform {
  INTERNAL = "INTERNAL",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
  TWITTER = "TWITTER",
  WHATSAPP = "WHATSAPP",
  LINK = "LINK",
}

export enum ReportReason {
  SPAM = "SPAM",
  INAPPROPRIATE = "INAPPROPRIATE",
  HARASSMENT = "HARASSMENT",
  MISLEADING = "MISLEADING",
  COPYRIGHT = "COPYRIGHT",
  OTHER = "OTHER",
}

// Types
export interface UserMinimal {
  id: number;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface LocationMinimal {
  id: number;
  name: string;
  address?: string;
  type: string;
}

export interface TripMinimal {
  id: number;
  title: string;
  city?: string;
  country?: string;
}

export interface PostMedia {
  id: number;
  type: MediaType;
  url: string;
  thumbnail?: string;
  order: number;
  width?: number;
  height?: number;
  duration?: number;
}

export interface Post {
  id: number;
  type: PostType;
  title?: string;
  description?: string;
  tags: string[];
  likesCount: number;
  commentsCount: number;
  savedCount: number;
  sharesCount: number;
  viewsCount: number;
  visibility: PostVisibility;
  author: UserMinimal;
  location?: LocationMinimal;
  trip?: TripMinimal;
  media: PostMedia[];
  isLikedByMe: boolean;
  isSavedByMe: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface Comment {
  id: number;
  content: string;
  likesCount: number;
  author: UserMinimal;
  parentId?: number;
  replies?: Comment[];
  isLikedByMe: boolean;
  createdAt: string;
  editedAt?: string;
}

export interface CreatePostOutput {
  postId: number;
  success: boolean;
  message?: string;
}

// Input Types
export interface CreatePostInput {
  type: PostType;
  title?: string;
  description?: string;
  tags?: string[];
  visibility?: PostVisibility;
  locationId?: number;
  tripId?: number;
  media?: PostMediaInput[];
  publishNow?: boolean;
}

export interface PostMediaInput {
  type: MediaType;
  url: string;
  thumbnail?: string;
  order?: number;
  width?: number;
  height?: number;
  duration?: number;
}

export interface UpdatePostInput {
  id: number;
  title?: string;
  description?: string;
  tags?: string[];
  visibility?: PostVisibility;
  locationId?: number;
  tripId?: number;
}

export interface CreateCommentInput {
  postId: number;
  content: string;
  parentId?: number;
}

export interface SavePostInput {
  postId: number;
  note?: string;
}

export interface SharePostInput {
  postId: number;
  platform?: SharePlatform;
}

export interface ReportPostInput {
  postId: number;
  reason: ReportReason;
  details?: string;
}

export interface UpdateCommentInput {
  id: number;
  content: string;
}

export interface PostComment {
  id: number;
  content: string;
  createdAt: string;
  editedAt?: string;
  likesCount: number;
  author: UserMinimal;
  replies?: PostComment[];
}

export interface SavedPost {
  id: number;
  note?: string;
  createdAt: string;
  post: Post;
}

export interface CreateCollectionInput {
  name: string;
  description?: string;
  isPublic?: boolean;
  coverImage?: string;
}

export interface PostCollection {
  id: number;
  name: string;
  description?: string;
  isPublic: boolean;
  coverImage?: string;
  createdAt: string;
}

export interface AddPostToCollectionInput {
  collectionId: number;
  postId: number;
  note?: string;
  order?: number;
}
