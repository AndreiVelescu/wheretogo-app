import { useAuth } from "@/src/contexts/AuthContext";
import { useAppTheme } from "@/src/contexts/ThemeContext";
import { MediaCarousel } from "@/src/feed/components/MediaCarousel";
import { PostActions } from "@/src/feed/components/PostActions";
import { PostHeader } from "@/src/feed/components/PostHeader";
import type { Post, PostComment } from "@/src/feed/feed.types";
import { ReportReason, SharePlatform } from "@/src/feed/feed.types";
import {
  useComments,
  useIncrementViews,
  useLikePost,
  useReportPost,
  useSavePost,
  useSharePost,
} from "@/src/feed/hooks";
import { usePost } from "@/src/feed/hooks/useGetPostById";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Share,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const postId = Number(id);
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();

  // ─── Data hooks ─────────────────────────────────────
  const {
    post: postData,
    loading: postLoading,
    error: postError,
  } = usePost(postId);
  const post = (postData as any)?.getPostById as Post | undefined;

  const { incrementViews } = useIncrementViews();
  const {
    comments,
    loading: commentsLoading,
    createComment,
    deleteComment,
    toggleCommentLike,
  } = useComments(postId);
  const { toggleLike } = useLikePost();
  const { toggleSave } = useSavePost();
  const { sharePost } = useSharePost();
  const { reportPost } = useReportPost();

  const [replyTo, setReplyTo] = useState<number | null>(null);
  const { user: currentUser } = useAuth();

  // Keep a ref to post so handlers never cause re-renders
  const postRef = useRef(post);
  useEffect(() => {
    postRef.current = post;
  }, [post]);

  // Track view on mount
  useEffect(() => {
    if (postId) incrementViews(postId);
  }, [postId]);

  // ─── Stable handlers (don't depend on `post`) ──────
  const handleLike = useCallback(async () => {
    const p = postRef.current;
    if (!p) return;
    try {
      await toggleLike(p.id, p.isLikedByMe);
    } catch (e) {
      console.error("Like failed:", e);
    }
  }, [toggleLike]);

  const handleSave = useCallback(async () => {
    const p = postRef.current;
    if (!p) return;
    try {
      await toggleSave(p.id, p.isSavedByMe);
    } catch (e) {
      console.error("Save failed:", e);
    }
  }, [toggleSave]);

  const handleShare = useCallback(async () => {
    const p = postRef.current;
    if (!p) return;
    try {
      await sharePost(p.id, SharePlatform.LINK);
      await Share.share({
        message: p.title || "Check out this post on WhereToGo!",
        url: `https://wheretogo.app/post/${p.id}`,
      });
    } catch (e: any) {
      if (e?.message !== "User did not share") {
        console.error("Share failed:", e);
      }
    }
  }, [sharePost]);

  const handleReport = useCallback(() => {
    Alert.alert("Report Post", "Why are you reporting this post?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Spam",
        onPress: () =>
          reportPost({ postId, reason: ReportReason.SPAM }).then(() =>
            Alert.alert("Success", "Thank you for your report")
          ),
      },
      {
        text: "Inappropriate",
        onPress: () =>
          reportPost({ postId, reason: ReportReason.INAPPROPRIATE }).then(() =>
            Alert.alert("Success", "Thank you for your report")
          ),
      },
      {
        text: "Harassment",
        onPress: () =>
          reportPost({ postId, reason: ReportReason.HARASSMENT }).then(() =>
            Alert.alert("Success", "Thank you for your report")
          ),
      },
    ]);
  }, [postId, reportPost]);

  const handleDeleteComment = useCallback(
    (commentId: number) => {
      Alert.alert(
        "Delete Comment",
        "Are you sure you want to delete this comment?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            style: "destructive",
            onPress: async () => {
              try {
                await deleteComment(commentId);
              } catch {
                Alert.alert("Error", "Failed to delete comment");
              }
            },
          },
        ]
      );
    },
    [deleteComment]
  );

  // ─── Memoized header for FlatList ──────────────────
  const postContentElement = useMemo(
    () => (
      <PostContent
        post={post}
        postLoading={postLoading}
        postError={postError}
        commentsCount={comments.length}
        onLike={handleLike}
        onShare={handleShare}
        onSave={handleSave}
        colors={colors}
      />
    ),
    [
      post,
      postLoading,
      postError,
      comments.length,
      handleLike,
      handleShare,
      handleSave,
      colors,
    ]
  );

  const renderCommentItem = useCallback(
    ({ item }: { item: PostComment }) => (
      <CommentItem
        comment={item}
        onReply={setReplyTo}
        onDelete={handleDeleteComment}
        onLike={toggleCommentLike}
        currentUserId={currentUser?.id ? Number(currentUser.id) : undefined}
        colors={colors}
      />
    ),
    [handleDeleteComment, toggleCommentLike, currentUser?.id, colors]
  );

  const listEmptyComponent = useMemo(
    () =>
      commentsLoading ? (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons
            name="chatbubble-outline"
            size={48}
            color={colors.borderLight}
          />
          <Text style={[styles.emptyTitle, { color: colors.textSecondary }]}>
            No comments yet
          </Text>
          <Text style={[styles.emptyDescription, { color: colors.textMuted }]}>
            Be the first to comment!
          </Text>
        </View>
      ),
    [commentsLoading, colors]
  );

  // ─── Loading state ──────────────────────────────────
  if (postLoading && !post) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.background }]}
        edges={["top"]}
      >
        <View
          style={[
            styles.header,
            { backgroundColor: colors.card, borderBottomColor: colors.border },
          ]}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Post</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  // ─── Main content ───────────────────────────────────
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top"]}
    >
      {/* Navigation header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: colors.background,
            borderBottomColor: colors.border,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Post</Text>
        <TouchableOpacity
          onPress={handleReport}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="ellipsis-horizontal" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={styles.flex1}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={insets.top - 40}
      >
        {/* Post + comments in single scrollable list */}
        <FlatList
          data={comments}
          keyExtractor={commentKeyExtractor}
          ListHeaderComponent={postContentElement}
          renderItem={renderCommentItem}
          ListEmptyComponent={listEmptyComponent}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          removeClippedSubviews={Platform.OS === "android"}
          maxToRenderPerBatch={10}
          windowSize={7}
        />

        <CommentInput
          postId={postId}
          replyTo={replyTo}
          onReplyCancel={() => setReplyTo(null)}
          createComment={createComment}
          colors={colors}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* ──────────── Post Content (memoized header) ──────────── */

interface PostContentProps {
  post: Post | undefined;
  postLoading: boolean;
  postError: any;
  commentsCount: number;
  onLike: () => void;
  onShare: () => void;
  onSave: () => void;
  colors: any;
}

const PostContent = React.memo(function PostContent({
  post,
  postLoading,
  postError,
  commentsCount,
  onLike,
  onShare,
  onSave,
  colors,
}: PostContentProps) {
  const router = useRouter();
  const noopComment = useCallback(() => {}, []);
  if (postLoading) {
    return (
      <View style={{ paddingVertical: 60, alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ marginTop: 12, color: colors.textMuted, fontSize: 14 }}>
          Loading post...
        </Text>
      </View>
    );
  }

  if (postError) {
    return (
      <View
        style={{
          paddingVertical: 60,
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Ionicons name="alert-circle-outline" size={48} color={colors.error} />
        <Text
          style={{
            marginTop: 12,
            color: colors.error,
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          Failed to load post
        </Text>
        <Text
          style={{
            marginTop: 4,
            color: colors.textMuted,
            fontSize: 13,
            textAlign: "center",
          }}
        >
          {postError.message}
        </Text>
      </View>
    );
  }

  if (!post) {
    return (
      <View style={{ paddingVertical: 60, alignItems: "center" }}>
        <Ionicons
          name="document-text-outline"
          size={48}
          color={colors.borderLight}
        />
        <Text style={{ marginTop: 12, color: colors.textMuted, fontSize: 15 }}>
          Post not found
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.postSection, { backgroundColor: colors.background }]}>
      {/* Author header */}
      <PostHeader
        author={post.author}
        location={post.location}
        createdAt={post.createdAt}
      />

      {/* Media */}
      {post.media?.length > 0 && <MediaCarousel media={post.media} />}

      {/* Actions */}
      <PostActions
        likesCount={post.likesCount}
        commentsCount={post.commentsCount}
        sharesCount={post.sharesCount ?? 0}
        isLikedByMe={post.isLikedByMe}
        isSavedByMe={post.isSavedByMe}
        onLike={onLike}
        onComment={noopComment}
        onShare={onShare}
        onSave={onSave}
      />

      {/* Title */}
      {post.title && (
        <Text style={[styles.postTitle, { color: colors.text }]}>
          {post.title}
        </Text>
      )}

      {/* Description */}
      {post.description && (
        <Text style={[styles.postDescription, { color: colors.textSecondary }]}>
          {post.description}
        </Text>
      )}

      {/* Tags */}
      {post.tags?.length > 0 && (
        <View style={styles.tagsRow}>
          {post.tags.slice(0, 6).map((tag, i) => (
            <View
              key={i}
              style={[styles.tag, { backgroundColor: colors.primarySoft }]}
            >
              <Text style={[styles.tagText, { color: colors.primary }]}>
                #{tag}
              </Text>
            </View>
          ))}
          {post.tags.length > 6 && (
            <Text style={[styles.moreTags, { color: colors.textMuted }]}>
              +{post.tags.length - 6}
            </Text>
          )}
        </View>
      )}

      {/* Trip link */}
      {post.trip && (
        <TouchableOpacity
          style={[styles.tripLink, { backgroundColor: colors.primarySoft }]}
          activeOpacity={0.7}
          onPress={() =>
            router.push(`/trip/itinerary?tripId=${post.trip!.id}` as any)
          }
        >
          <Ionicons name="map-outline" size={14} color={colors.primary} />
          <Text
            style={[styles.tripText, { color: colors.primary }]}
            numberOfLines={1}
          >
            Part of trip: {post.trip.title}
          </Text>
          <Ionicons name="chevron-forward" size={14} color={colors.primary} />
        </TouchableOpacity>
      )}

      {/* Comments divider */}
      <View
        style={[
          styles.commentsDivider,
          { borderTopColor: colors.card, backgroundColor: colors.card },
        ]}
      >
        <Text style={[styles.commentsTitle, { color: colors.text }]}>
          Comments{" "}
          {commentsCount > 0 && (
            <Text style={[styles.commentsCount, { color: colors.textMuted }]}>
              ({commentsCount})
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
});

/* ──────────── Comment Item ──────────── */

interface CommentItemProps {
  comment: PostComment;
  onReply: (commentId: number) => void;
  onDelete: (commentId: number) => void;
  onLike: (commentId: number, isLiked: boolean) => void;
  currentUserId?: number;
  isReply?: boolean;
  colors?: any;
}

const CommentItem = React.memo(function CommentItem({
  comment,
  onReply,
  onDelete,
  onLike,
  currentUserId,
  isReply,
  colors: colorsProp,
}: CommentItemProps) {
  const { colors: themeColors } = useAppTheme();
  const colors = colorsProp || themeColors;
  return (
    <View
      style={[
        styles.commentRow,
        isReply && styles.commentReply,
        { backgroundColor: colors.card },
      ]}
    >
      <Image
        source={{
          uri: comment.author?.avatar || "https://via.placeholder.com/36",
        }}
        style={[
          isReply ? styles.replyAvatar : styles.commentAvatar,
          { backgroundColor: colors.borderLight },
        ]}
        contentFit="cover"
      />
      <View style={styles.commentBody}>
        <Text style={[styles.commentContent, { color: colors.text }]}>
          <Text style={styles.commentAuthor}>
            {comment.author?.name || "User"}{" "}
          </Text>
          {comment.content}
        </Text>
        <View style={styles.commentMeta}>
          <Text style={[styles.commentTime, { color: colors.textMuted }]}>
            {formatRelative(comment.createdAt)}
          </Text>
          {(comment.likesCount ?? 0) > 0 && (
            <Text style={[styles.commentLikes, { color: colors.textMuted }]}>
              {comment.likesCount} {comment.likesCount === 1 ? "like" : "likes"}
            </Text>
          )}
          {!isReply && (
            <TouchableOpacity onPress={() => onReply(comment.id)}>
              <Text
                style={[styles.commentReplyBtn, { color: colors.textMuted }]}
              >
                Reply
              </Text>
            </TouchableOpacity>
          )}
          {currentUserId === comment.author?.id && (
            <TouchableOpacity onPress={() => onDelete(comment.id)}>
              <Text style={[styles.commentDeleteBtn, { color: colors.error }]}>
                Delete
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Nested replies */}
        {comment.replies?.map((reply) => (
          <CommentItem
            key={reply.id}
            comment={reply}
            onReply={onReply}
            onDelete={onDelete}
            onLike={onLike}
            currentUserId={currentUserId}
            isReply
            colors={colors}
          />
        ))}
      </View>

      {/* Like heart */}
      <TouchableOpacity
        style={styles.heartBtn}
        onPress={() => onLike(comment.id, !!(comment as any).isLikedByMe)}
      >
        <Ionicons
          name={(comment as any).isLikedByMe ? "heart" : "heart-outline"}
          size={14}
          color={
            (comment as any).isLikedByMe ? colors.primary : colors.textMuted
          }
        />
      </TouchableOpacity>
    </View>
  );
});

/* ──────────── Comment Input ──────────── */

interface CommentInputProps {
  postId: number;
  replyTo: number | null;
  onReplyCancel: () => void;
  createComment: (input: {
    postId: number;
    content: string;
    parentId?: number;
  }) => Promise<any>;
  colors: any;
}

const CommentInput = React.memo(function CommentInput({
  postId,
  replyTo,
  onReplyCancel,
  createComment,
  colors,
}: CommentInputProps) {
  const [commentText, setCommentText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<TextInput>(null);

  // Auto-focus input when replying
  useEffect(() => {
    if (replyTo) {
      inputRef.current?.focus();
    }
  }, [replyTo]);

  const handleSubmit = useCallback(async () => {
    if (!commentText.trim() || submitting) return;
    Keyboard.dismiss();
    setSubmitting(true);
    try {
      await createComment({
        postId,
        content: commentText.trim(),
        parentId: replyTo || undefined,
      });
      setCommentText("");
      onReplyCancel();
    } catch {
      Alert.alert("Error", "Failed to post comment");
    } finally {
      setSubmitting(false);
    }
  }, [commentText, submitting, postId, replyTo, createComment, onReplyCancel]);

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={[
        styles.inputContainer,
        { backgroundColor: colors.card, borderTopColor: colors.border },
      ]}
    >
      {replyTo && (
        <View
          style={[
            styles.replyBanner,
            { backgroundColor: colors.backgroundSecondary },
          ]}
        >
          <Text style={[styles.replyText, { color: colors.textSecondary }]}>
            Replying to comment
          </Text>
          <TouchableOpacity onPress={onReplyCancel}>
            <Ionicons name="close-circle" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.inputRow}>
        <TextInput
          ref={inputRef}
          style={[
            styles.input,
            { backgroundColor: colors.inputBackground, color: colors.text },
          ]}
          placeholder="Add a comment..."
          placeholderTextColor={colors.inputPlaceholder}
          value={commentText}
          onChangeText={setCommentText}
          multiline
          maxLength={500}
          returnKeyType="default"
          blurOnSubmit={false}
        />
        <TouchableOpacity
          style={[
            styles.sendButton,
            { backgroundColor: colors.primary },
            (!commentText.trim() || submitting) && {
              backgroundColor: colors.borderLight,
            },
          ]}
          onPress={handleSubmit}
          disabled={!commentText.trim() || submitting}
        >
          {submitting ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Ionicons name="send" size={18} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
});

/* ──────────── Helpers ──────────── */

const commentKeyExtractor = (item: PostComment) => item.id.toString();

function formatRelative(dateStr: string): string {
  const now = Date.now();
  const d = new Date(dateStr).getTime();
  const diffS = Math.floor((now - d) / 1000);
  if (diffS < 60) return "now";
  const diffM = Math.floor(diffS / 60);
  if (diffM < 60) return `${diffM}m`;
  const diffH = Math.floor(diffM / 60);
  if (diffH < 24) return `${diffH}h`;
  const diffD = Math.floor(diffH / 24);
  if (diffD < 7) return `${diffD}d`;
  const diffW = Math.floor(diffD / 7);
  return `${diffW}w`;
}

/* ──────────── Styles ──────────── */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flex1: {
    flex: 1,
  },

  // Navigation header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E7EB",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A2E",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  listContent: {
    paddingBottom: 8,
  },

  // ─── Post section ───────────────────────────────
  postSection: {
    backgroundColor: "#fff",
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A2E",
    paddingHorizontal: 14,
    marginTop: 2,
    marginBottom: 4,
  },
  postDescription: {
    fontSize: 14,
    color: "#555",
    paddingHorizontal: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    paddingHorizontal: 14,
    paddingTop: 4,
    paddingBottom: 8,
  },
  tag: {
    backgroundColor: "#FFF0F0",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  tagText: {
    fontSize: 12,
    color: "#FF6B6B",
    fontWeight: "500",
  },
  moreTags: {
    fontSize: 12,
    color: "#999",
    alignSelf: "center",
  },
  tripLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginHorizontal: 14,
    marginTop: 2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#FFF5F5",
    borderRadius: 8,
  },
  tripText: {
    flex: 1,
    fontSize: 13,
    color: "#FF6B6B",
    fontWeight: "500",
  },

  // ─── Comments divider ──────────────────────────
  commentsDivider: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#F0F0F0",
    marginTop: 8,
  },
  commentsTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A2E",
  },
  commentsCount: {
    fontWeight: "500",
    color: "#8A8A9D",
  },

  // ─── Comment rows (Instagram style) ────────────
  commentRow: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },
  commentReply: {
    marginLeft: 10,
    paddingLeft: 4,
    marginTop: 8,
  },
  commentAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E5E7EB",
    marginTop: 2,
  },
  replyAvatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#E5E7EB",
    marginTop: 2,
  },
  commentBody: {
    flex: 1,
  },
  commentContent: {
    fontSize: 13,
    color: "#1A1A2E",
    lineHeight: 18,
  },
  commentAuthor: {
    fontWeight: "700",
  },
  commentMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 12,
  },
  commentTime: {
    fontSize: 12,
    color: "#8A8A9D",
  },
  commentLikes: {
    fontSize: 12,
    color: "#8A8A9D",
    fontWeight: "500",
  },
  commentReplyBtn: {
    fontSize: 12,
    color: "#8A8A9D",
    fontWeight: "600",
  },
  commentDeleteBtn: {
    fontSize: 12,
    color: "#E53935",
    fontWeight: "500",
  },
  heartBtn: {
    paddingTop: 6,
  },

  // ─── Empty ──────────────────────────────────────
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 50,
    gap: 6,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  emptyDescription: {
    fontSize: 13,
    color: "#999",
  },

  // ─── Input ──────────────────────────────────────
  inputContainer: {
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E8E8E8",
    paddingBottom: Platform.OS === "ios" ? 4 : 8,
  },
  replyBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: "#F5F5F5",
  },
  replyText: {
    fontSize: 12,
    color: "#666",
    fontStyle: "italic",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    maxHeight: 80,
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: "#1A1A2E",
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FF6B6B",
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonDisabled: {
    backgroundColor: "#D0D0D0",
  },
});
