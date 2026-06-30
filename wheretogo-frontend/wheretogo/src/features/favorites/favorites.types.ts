/**
 * ❤️ Favorites Types
 */

export interface Favorite {
  id: number;
  userId: number;
  locationId: number;
  createdAt: string;
}

export interface AddFavoriteInput {
  locationId: number;
}
