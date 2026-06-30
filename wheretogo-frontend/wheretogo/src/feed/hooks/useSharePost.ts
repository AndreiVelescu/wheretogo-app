import { useMutation } from "@apollo/client/react";
import { SHARE_POST_MUTATION } from "../feed.operations";
import type { SharePlatform } from "../feed.types";

export const useSharePost = () => {
  const [sharePostMutation] = useMutation(SHARE_POST_MUTATION);

  const sharePost = async (postId: number, platform?: SharePlatform) => {
    try {
      await sharePostMutation({
        variables: {
          input: {
            postId,
            platform: platform || "LINK",
          },
        },
        update: (cache) => {
          // Update shares count in post
          cache.modify({
            id: cache.identify({ __typename: "PostWithAuthor", id: postId }),
            fields: {
              sharesCount: (prev: number) => prev + 1,
            },
          });
        },
      });
    } catch (error) {
      console.error("Error sharing post:", error);
      throw error;
    }
  };

  return { sharePost };
};
