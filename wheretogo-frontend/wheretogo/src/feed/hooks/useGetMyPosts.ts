import { useQuery } from "@apollo/client/react";
import { MY_POSTS_QUERY } from "../feed.operations";

export const useMyPosts = () => {
  const { data, loading, error, refetch } = useQuery(MY_POSTS_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  return {
    posts: data?.myPosts || [],
    loading,
    error,
    refetch,
  };
};
