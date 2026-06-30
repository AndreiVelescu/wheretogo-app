import { useMutation } from "@apollo/client/react";
import { INCREMENT_VIEWS_MUTATION } from "../feed.operations";

export const useIncrementViews = () => {
  const [incrementViewsMutation] = useMutation(INCREMENT_VIEWS_MUTATION);

  const incrementViews = async (postId: number) => {
    try {
      await incrementViewsMutation({
        variables: { postId },
        update: (cache) => {
          // Update views count in post
          cache.modify({
            id: cache.identify({ __typename: "PostWithAuthor", id: postId }),
            fields: {
              viewsCount: (prev: number) => prev + 1,
            },
          });
        },
      });
    } catch (error) {
      console.error("Error incrementing views:", error);
      // Don't throw error - views tracking shouldn't break the app
    }
  };

  return { incrementViews };
};
