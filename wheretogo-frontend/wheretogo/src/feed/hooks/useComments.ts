import { useMutation, useQuery } from "@apollo/client/react";
import {
  CREATE_COMMENT_MUTATION,
  DELETE_COMMENT_MUTATION,
  GET_COMMENTS_QUERY,
  LIKE_COMMENT_MUTATION,
  UNLIKE_COMMENT_MUTATION,
  UPDATE_COMMENT_MUTATION,
} from "../feed.operations";
import type {
  CreateCommentInput,
  PostComment,
  UpdateCommentInput,
} from "../feed.types";

interface GetCommentsData {
  getCommentsByPost: PostComment[];
}

interface CreateCommentData {
  createComment: PostComment;
}

interface UpdateCommentData {
  updateComment: PostComment;
}

export const useComments = (postId: number) => {
  const { data, loading, error, refetch } = useQuery<GetCommentsData>(
    GET_COMMENTS_QUERY,
    {
      variables: { postId },
      skip: !postId,
    }
  );

  const [createCommentMutation] = useMutation<CreateCommentData>(
    CREATE_COMMENT_MUTATION
  );
  const [updateCommentMutation] = useMutation<UpdateCommentData>(
    UPDATE_COMMENT_MUTATION
  );
  const [deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION);
  const [likeCommentMutation] = useMutation(LIKE_COMMENT_MUTATION);
  const [unlikeCommentMutation] = useMutation(UNLIKE_COMMENT_MUTATION);

  const createComment = async (input: CreateCommentInput) => {
    try {
      const result = await createCommentMutation({
        variables: { input },
        update: (cache, { data }) => {
          if (data?.createComment) {
            // Update comments count in post
            cache.modify({
              id: cache.identify({ __typename: "PostWithAuthor", id: postId }),
              fields: {
                commentsCount: (prev: number) => prev + 1,
              },
            });
          }
        },
        refetchQueries: [{ query: GET_COMMENTS_QUERY, variables: { postId } }],
      });
      return result.data?.createComment;
    } catch (error) {
      console.error("Error creating comment:", error);
      throw error;
    }
  };

  const updateComment = async (input: UpdateCommentInput) => {
    try {
      const result = await updateCommentMutation({
        variables: { input },
      });
      return result.data?.updateComment;
    } catch (error) {
      console.error("Error updating comment:", error);
      throw error;
    }
  };

  const deleteComment = async (commentId: number) => {
    try {
      await deleteCommentMutation({
        variables: { commentId },
        update: (cache) => {
          // Update comments count in post
          cache.modify({
            id: cache.identify({ __typename: "PostWithAuthor", id: postId }),
            fields: {
              commentsCount: (prev: number) => Math.max(0, prev - 1),
            },
          });
        },
        refetchQueries: [{ query: GET_COMMENTS_QUERY, variables: { postId } }],
      });
    } catch (error) {
      console.error("Error deleting comment:", error);
      throw error;
    }
  };

  const toggleCommentLike = async (commentId: number, isLiked: boolean) => {
    try {
      if (isLiked) {
        await unlikeCommentMutation({
          variables: { commentId },
          optimisticResponse: {
            unlikeComment: true,
          },
        });
      } else {
        await likeCommentMutation({
          variables: { commentId },
          optimisticResponse: {
            likeComment: true,
          },
        });
      }
      await refetch();
    } catch (error) {
      console.error("Error toggling comment like:", error);
      throw error;
    }
  };

  return {
    comments: (data?.getCommentsByPost || []) as PostComment[],
    loading,
    error,
    refetch,
    createComment,
    updateComment,
    deleteComment,
    toggleCommentLike,
  };
};
