/**
 * 📅 Schedules Types
 */

export interface Location {
  id: number;
  placeId: string;
  name: string;
  description?: string;
  type?: string;
  types?: string[];
  priceRange?: string;
  vibes?: string[];
  address?: string;
  rating?: number;
  phone?: string;
  openHours?: string[];
  photos?: string[];
}

export interface Schedule {
  id: number;
  userId: number;
  locationId: number;
  scheduledDate: string;
  createdAt: string;
  location: Location;
}
