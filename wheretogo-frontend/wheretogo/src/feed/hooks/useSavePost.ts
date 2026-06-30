import { useMutation } from "@apollo/client/react";
import { SAVE_POST_MUTATION, UNSAVE_POST_MUTATION } from "../feed.operations";

export const useSavePost = () => {
  const [savePost] = useMutation(SAVE_POST_MUTATION);
  const [unsavePost] = useMutation(UNSAVE_POST_MUTATION);

  const toggleSave = async (postId: number, isSaved: boolean) => {
    try {
      if (isSaved) {
        await unsavePost({
          variables: { postId },
          optimisticResponse: {
            unsavePost: true,
          },
          update: (cache) => {
            cache.modify({
              id: cache.identify({ __typename: "PostWithAuthor", id: postId }),
              fields: {
                isSavedByMe: () => false,
                savedCount: (prev: number) => Math.max(0, prev - 1),
              },
            });
          },
        });
      } else {
        await savePost({
          variables: { input: { postId } },
          optimisticResponse: {
            savePost: true,
          },
          update: (cache) => {
            cache.modify({
              id: cache.identify({ __typename: "PostWithAuthor", id: postId }),
              fields: {
                isSavedByMe: () => true,
                savedCount: (prev: number) => prev + 1,
              },
            });
          },
        });
      }
    } catch (error) {
      console.error("Error toggling save:", error);
      throw error;
    }
  };

  return { toggleSave };
};
