export interface Location {
  id: number;
  name: string;
  description: string;
  type: string;
  priceRange: string;
  vibes: string[];
  address: string;
  openHours: string; // Changed to string to match Backend DTO
  photos: string[];
  menuPdf?: string;
  createdAt: string; // Dates over JSON are strings

  // These come from the Backend DTO calculation
  averageRating: number;
  reviewCount: number;
  isHype: boolean;
  isFavorite: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface Review {
  id: number;
  userId: number;
  locationId: number;
  rating: number;
  comment: string;
  likes: number;
  createdAt: string;
}

export interface Event {
  id: number;
  locationId: number;
  name: string;
  description: string;
  date: string;
  notify: boolean;
  notifications?: Notification[];
  createdAt: string;
}

export interface Booking {
  id: number;
  userId: number;
  locationId: number;
  date: string;
  time: string;
  persons: number;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  affiliateUrl?: string | null;
  createdAt: string;
}

export interface Favorite {
  id: number;
  userId: number;
  locationId: number;
  createdAt: string;
}

export interface Notification {
  id: number;
  userId: number;
  title: string;
  message: string;
  type: "event" | "booking" | "review" | "trending" | "general";
  isRead: boolean;
  locationId?: number | null;
  eventId?: number | null;
  createdAt: string;
}

export interface Follower {
  id: number;
  userId: number;
  followerId: number;
  createdAt: string;
}
