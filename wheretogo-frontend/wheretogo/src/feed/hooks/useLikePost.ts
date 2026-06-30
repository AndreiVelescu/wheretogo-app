import { useMutation } from "@apollo/client/react";
import { LIKE_POST_MUTATION, UNLIKE_POST_MUTATION } from "../feed.operations";

export const useLikePost = () => {
  const [likePost] = useMutation(LIKE_POST_MUTATION);
  const [unlikePost] = useMutation(UNLIKE_POST_MUTATION);

  const toggleLike = async (postId: number, isLiked: boolean) => {
    try {
      if (isLiked) {
        await unlikePost({
          variables: { postId },
          optimisticResponse: {
            unlikePost: true,
          },
          update: (cache) => {
            cache.modify({
              id: cache.identify({ __typename: "PostWithAuthor", id: postId }),
              fields: {
                isLikedByMe: () => false,
                likesCount: (prev: number) => Math.max(0, prev - 1),
              },
            });
          },
        });
      } else {
        await likePost({
          variables: { postId },
          optimisticResponse: {
            likePost: true,
          },
          update: (cache) => {
            cache.modify({
              id: cache.identify({ __typename: "PostWithAuthor", id: postId }),
              fields: {
                isLikedByMe: () => true,
                likesCount: (prev: number) => prev + 1,
              },
            });
          },
        });
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      throw error;
    }
  };

  return { toggleLike };
};
