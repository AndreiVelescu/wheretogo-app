import { useMutation } from "@apollo/client/react";
import { UPDATE_POST_MUTATION } from "../feed.operations";
import { UpdatePostInput } from "../feed.types";

export const useUpdatePost = () => {
  const [updatePost, { loading, error }] = useMutation(UPDATE_POST_MUTATION);

  const update = async (input: UpdatePostInput) => {
    const { data } = await updatePost({
      variables: { input },
      refetchQueries: ["MyPosts", "GetPostById"],
    });
    return data;
  };

  return { update, loading, error };
};
