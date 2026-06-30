import { useQuery } from "@apollo/client/react";
import { MY_FEED_QUERY } from "../feed.operations";
import type { Post } from "../feed.types";

interface MyFeedData {
  myFeed: {
    posts: Post[];
    hasMore: boolean;
    cursor: string | null;
  };
}

interface MyFeedVariables {
  limit?: number;
  cursor?: string;
}

export const useMyFeed = (limit: number = 10) => {
  const { data, loading, error, refetch, fetchMore } = useQuery<
    MyFeedData,
    MyFeedVariables
  >(MY_FEED_QUERY, {
    variables: { limit },
    notifyOnNetworkStatusChange: true,
  });

  const loadMore = () => {
    if (!data?.myFeed.hasMore) return;

    return fetchMore({
      variables: {
        limit,
        cursor: data.myFeed.cursor || undefined,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        // Backend re-ranks candidates by score, so cursor pages can overlap.
        // De-duplicate by id to avoid duplicate React keys / repeated posts.
        const seen = new Set(prev.myFeed.posts.map((p) => p.id));
        const newPosts = fetchMoreResult.myFeed.posts.filter(
          (p) => !seen.has(p.id),
        );

        return {
          myFeed: {
            ...fetchMoreResult.myFeed,
            posts: [...prev.myFeed.posts, ...newPosts],
          },
        };
      },
    });
  };

  return {
    posts: data?.myFeed.posts || [],
    hasMore: data?.myFeed.hasMore || false,
    cursor: data?.myFeed.cursor || null,
    loading,
    error,
    refetch,
    loadMore,
  };
};
