/**
 * 💬 Comments Bottom Sheet — slides up from the bottom when tapping a post
 */

import { useAppTheme } from "@/src/contexts/ThemeContext";
import type { PostComment } from "@/src/feed/feed.types";
import { useComments, useIncrementViews } from "@/src/feed/hooks";
import { usePost } from "@/src/feed/hooks/useGetPostById";
import { normalizeRemoteImageUrl } from "@/src/utils/imageUtils";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  PanResponder,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const SHEET_HEIGHT = SCREEN_HEIGHT * 0.7;

interface CommentsBottomSheetProps {
  postId: number | null;
  visible: boolean;
  onClose: () => void;
}

export function CommentsBottomSheet({
  postId,
  visible,
  onClose,
}: CommentsBottomSheetProps) {
  const translateY = useRef(new Animated.Value(SHEET_HEIGHT)).current;
  const { colors } = useAppTheme();

  const {
    comments,
    loading: commentsLoading,
    createComment,
    deleteComment,
    toggleCommentLike,
  } = useComments(postId || 0);

  const { post: postData, loading: postLoading } = usePost(postId || 0);
  const { incrementViews } = useIncrementViews();
  const post = (postData as any)?.getPostById;

  const [commentText, setCommentText] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Track view on open
  useEffect(() => {
    if (visible && postId) {
      incrementViews(postId);
    }
  }, [visible, postId]);

  // Animate open/close
  useEffect(() => {
    if (visible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        damping: 20,
        stiffness: 200,
      }).start();
    } else {
      translateY.setValue(SHEET_HEIGHT);
    }
  }, [visible]);

  const handleClose = useCallback(() => {
    Animated.timing(translateY, {
      toValue: SHEET_HEIGHT,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setCommentText("");
      setReplyTo(null);
      onClose();
    });
  }, [onClose, translateY]);

  // Swipe-down to dismiss
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gs) => gs.dy > 8,
      onPanResponderMove: (_, gs) => {
        if (gs.dy > 0) {
          translateY.setValue(gs.dy);
        }
      },
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 100 || gs.vy > 0.5) {
          handleClose();
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const handleSubmitComment = async () => {
    if (!commentText.trim() || submitting || !postId) return;
    setSubmitting(true);
    try {
      await createComment({
        postId,
        content: commentText.trim(),
        parentId: replyTo || undefined,
      });
      setCommentText("");
      setReplyTo(null);
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteComment = useCallback(
    async (commentId: number) => {
      try {
        await deleteComment(commentId);
      } catch {
        // silent
      }
    },
    [deleteComment],
  );

  const renderComment = useCallback(
    ({ item }: { item: PostComment }) => (
      <View style={styles.commentRow}>
        <Image
          source={{
            uri: normalizeRemoteImageUrl(
              item.author?.avatar || "https://via.placeholder.com/32",
            ),
          }}
          style={styles.commentAvatar}
          contentFit="cover"
        />
        <View style={styles.commentBody}>
          <Text style={styles.commentContent}>
            <Text style={styles.commentAuthor}>
              {item.author?.name || "User"}{" "}
            </Text>
            {item.content}
          </Text>
          <View style={styles.commentMeta}>
            <Text style={styles.commentTime}>
              {formatRelative(item.createdAt)}
            </Text>
            {(item.likesCount ?? 0) > 0 && (
              <Text style={styles.commentLikes}>
                {item.likesCount} {item.likesCount === 1 ? "like" : "likes"}
              </Text>
            )}
            <TouchableOpacity onPress={() => setReplyTo(item.id)}>
              <Text style={styles.commentReplyBtn}>Reply</Text>
            </TouchableOpacity>
          </View>
          {/* Replies */}
          {item.replies?.map((reply) => (
            <View key={reply.id} style={styles.replyRow}>
              <Image
                source={{
                  uri: normalizeRemoteImageUrl(
                    reply.author?.avatar || "https://via.placeholder.com/24",
                  ),
                }}
                style={styles.replyAvatar}
                contentFit="cover"
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.commentContent}>
                  <Text style={styles.commentAuthor}>
                    {reply.author?.name || "User"}{" "}
                  </Text>
                  {reply.content}
                </Text>
                <Text style={styles.commentTime}>
                  {formatRelative(reply.createdAt)}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.heartBtn}
          onPress={() =>
            toggleCommentLike(item.id, !!(item as any).isLikedByMe)
          }
        >
          <Ionicons
            name={(item as any).isLikedByMe ? "heart" : "heart-outline"}
            size={14}
            color={(item as any).isLikedByMe ? "#FF6B6B" : "#BCBCBC"}
          />
        </TouchableOpacity>
      </View>
    ),
    [toggleCommentLike],
  );

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={handleClose}
    >
      {/* Backdrop */}
      <Pressable style={styles.backdrop} onPress={handleClose} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={0}
        pointerEvents="box-none"
      >
        <Animated.View
          style={[
            styles.sheet,
            { transform: [{ translateY }], backgroundColor: colors.card },
          ]}
          {...panResponder.panHandlers}
        >
          {/* Handle */}
          <View style={styles.handleBar}>
            <View style={[styles.handle, { backgroundColor: colors.border }]} />
          </View>

          {/* Post preview (mini) */}
          {post && (
            <View
              style={[
                styles.postPreview,
                { borderBottomColor: colors.separator },
              ]}
            >
              {post.media?.[0]?.url && (
                <Image
                  source={{ uri: normalizeRemoteImageUrl(post.media[0].url) }}
                  style={styles.postThumb}
                  contentFit="cover"
                />
              )}
              <View style={styles.postPreviewInfo}>
                <Text
                  style={[styles.postPreviewTitle, { color: colors.text }]}
                  numberOfLines={1}
                >
                  {post.title || post.description?.slice(0, 40) || "Post"}
                </Text>
                <Text
                  style={[
                    styles.postPreviewAuthor,
                    { color: colors.textMuted },
                  ]}
                  numberOfLines={1}
                >
                  {post.author?.name || "You"}
                </Text>
              </View>
              <View style={styles.postPreviewStats}>
                <Ionicons name="heart" size={14} color="#FF6B6B" />
                <Text
                  style={[styles.postPreviewStatText, { color: colors.text }]}
                >
                  {post.likesCount || 0}
                </Text>
              </View>
            </View>
          )}

          {/* Title */}
          <View style={styles.titleRow}>
            <Text style={[styles.title, { color: colors.text }]}>Comments</Text>
            <Text style={[styles.commentCount, { color: colors.textMuted }]}>
              {comments.length > 0 ? comments.length : ""}
            </Text>
          </View>

          {/* Comments list */}
          {commentsLoading && comments.length === 0 ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#FF6B6B" />
            </View>
          ) : (
            <FlatList
              data={comments}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderComment}
              contentContainerStyle={styles.listContent}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Ionicons
                    name="chatbubble-outline"
                    size={40}
                    color={colors.borderLight}
                  />
                  <Text style={[styles.emptyText, { color: colors.text }]}>
                    No comments yet
                  </Text>
                  <Text
                    style={[styles.emptySubText, { color: colors.textMuted }]}
                  >
                    Be the first to comment
                  </Text>
                </View>
              }
            />
          )}

          {/* Input */}
          <View
            style={[
              styles.inputContainer,
              { borderTopColor: colors.border, backgroundColor: colors.card },
            ]}
          >
            {replyTo && (
              <View
                style={[
                  styles.replyBanner,
                  { backgroundColor: colors.backgroundSecondary },
                ]}
              >
                <Text
                  style={[styles.replyBannerText, { color: colors.textMuted }]}
                >
                  Replying to comment
                </Text>
                <TouchableOpacity onPress={() => setReplyTo(null)}>
                  <Ionicons name="close-circle" size={18} color="#999" />
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, { color: colors.text }]}
                placeholder="Add a comment..."
                placeholderTextColor={colors.inputPlaceholder}
                value={commentText}
                onChangeText={setCommentText}
                multiline
                maxLength={500}
              />
              <TouchableOpacity
                onPress={handleSubmitComment}
                disabled={!commentText.trim() || submitting}
              >
                {submitting ? (
                  <ActivityIndicator size="small" color="#FF6B6B" />
                ) : (
                  <Text
                    style={[
                      styles.postBtn,
                      !commentText.trim() && styles.postBtnDisabled,
                    ]}
                  >
                    Post
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

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

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  keyboardView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  sheet: {
    height: SHEET_HEIGHT,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: "hidden",
  },
  handleBar: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 4,
  },
  handle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#DCDCDC",
  },

  // Post preview
  postPreview: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#F0F0F0",
    gap: 10,
  },
  postThumb: {
    width: 40,
    height: 40,
    borderRadius: 6,
  },
  postPreviewInfo: {
    flex: 1,
  },
  postPreviewTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A1A2E",
  },
  postPreviewAuthor: {
    fontSize: 12,
    color: "#8A8A9D",
    marginTop: 1,
  },
  postPreviewStats: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  postPreviewStatText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1A1A2E",
  },

  // Title
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A2E",
  },
  commentCount: {
    fontSize: 13,
    fontWeight: "500",
    color: "#8A8A9D",
  },

  // List
  listContent: {
    paddingBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // Empty
  emptyContainer: {
    alignItems: "center",
    paddingTop: 50,
    gap: 6,
  },
  emptyText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A1A2E",
  },
  emptySubText: {
    fontSize: 13,
    color: "#8A8A9D",
  },

  // Comment
  commentRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
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
  heartBtn: {
    paddingTop: 6,
  },

  // Replies
  replyRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 8,
    paddingLeft: 4,
  },
  replyAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 2,
  },

  // Input
  inputContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E8E8E8",
    backgroundColor: "#fff",
    paddingBottom: Platform.OS === "ios" ? 30 : 12,
  },
  replyBanner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: "#F5F5F5",
  },
  replyBannerText: {
    fontSize: 12,
    color: "#666",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 12,
  },
  input: {
    flex: 1,
    maxHeight: 80,
    fontSize: 14,
    color: "#1A1A2E",
    paddingVertical: 0,
  },
  postBtn: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FF6B6B",
  },
  postBtnDisabled: {
    color: "#D0D0D0",
  },
});
