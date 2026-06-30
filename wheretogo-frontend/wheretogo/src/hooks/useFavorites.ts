import {
  useAddFavorite as useAddFavoriteFeature,
  useFavorites as useFavoritesFeature,
  useIsFavorite as useIsFavoriteFeature,
  useRemoveFavorite as useRemoveFavoriteFeature,
} from "../features/favorites";

// Query Keys
export const FAVORITES_QUERY_KEYS = {
  all: ["favorites"] as const,
  lists: () => [...FAVORITES_QUERY_KEYS.all, "list"] as const,
  list: () => [...FAVORITES_QUERY_KEYS.lists()] as const,
};

export const useFavorites = () => {
  return useFavoritesFeature();
};

// Hook pentru a verifica dacă o locație este favorită
export const useIsFavorite = (locationId: number | string) => {
  return useIsFavoriteFeature(locationId);
}; // Hook pentru a adăuga la favorite
export const useAddFavorite = () => {
  return useAddFavoriteFeature();
};

// Hook pentru a șterge din favorite
export const useRemoveFavorite = () => {
  return useRemoveFavoriteFeature();
};

// Hook pentru a toggle favorite status
export const useToggleFavorite = () => {
  const addFavorite = useAddFavorite();
  const removeFavorite = useRemoveFavorite();

  return {
    toggleFavorite: async (locationId: number, isFavorited: boolean) => {
      try {
        if (isFavorited) {
          await removeFavorite.mutateAsync({ locationId });
        } else {
          await addFavorite.mutateAsync(locationId as number);
        }
      } catch (error) {
        console.error("Error toggling favorite:", error);
        throw error;
      }
    },
    isLoading: addFavorite.isPending || removeFavorite.isPending,
    error: addFavorite.error || removeFavorite.error,
  };
};
