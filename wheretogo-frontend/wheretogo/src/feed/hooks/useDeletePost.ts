import { useMutation } from "@apollo/client/react";
import { DELETE_POST_MUTATION } from "../feed.operations";

export const useDeletePost = () => {
  const [deletePost, { loading, error }] = useMutation(DELETE_POST_MUTATION, {
    refetchQueries: ["MyPosts"],
    update(cache, { data }, { variables }) {
      if (data) {
        cache.evict({ id: `Post:${variables?.postId}` });
        cache.gc();
      }
    },
  });

  const remove = async (postId: number) => {
    const { data } = await deletePost({ variables: { postId } });
    return data;
  };

  return { remove, loading, error };
};
