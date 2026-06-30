import { useQuery } from "@apollo/client/react";
import { GET_SAVED_POSTS_QUERY } from "../feed.operations";
import type { Post } from "../feed.types";

export const useSavedPosts = () => {
  const { data, loading, error, refetch } = useQuery<{ getSavedPosts: Post[] }>(
    GET_SAVED_POSTS_QUERY
  );

  return {
    savedPosts: (data?.getSavedPosts || []) as Post[],
    loading,
    error,
    refetch,
  };
};
