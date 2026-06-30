import { useQuery } from "@apollo/client/react";
import { GET_POST_BY_ID_QUERY } from "../feed.operations";

export const usePost = (id: number) => {
  const { data, loading, error, refetch } = useQuery(GET_POST_BY_ID_QUERY, {
    variables: { id },
    skip: !id,
    fetchPolicy: "cache-and-network",
  });

  return {
    post: data || null,
    loading,
    error,
    refetch,
  };
};
