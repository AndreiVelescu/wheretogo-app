import { useMutation } from "@apollo/client/react";
import { PUBLISH_POST_MUTATION } from "../feed.operations";

export const usePublishPost = () => {
  const [publishPost, { loading, error }] = useMutation(PUBLISH_POST_MUTATION, {
    refetchQueries: ["MyPosts"],
  });

  const publish = async (postId: number) => {
    const { data } = await publishPost({ variables: { postId } });
    return data;
  };

  return { publish, loading, error };
};
