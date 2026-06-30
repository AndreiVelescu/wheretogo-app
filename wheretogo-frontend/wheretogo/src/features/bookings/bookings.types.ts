/**
 * 📅 Bookings Types
 */

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

export interface CreateBookingInput {
  locationId: string;
  startDate: string;
  endDate: string;
  guests: number;
  notes?: string;
}

export interface UpdateBookingInput {
  status?: "PENDING" | "CONFIRMED" | "CANCELLED";
  startDate?: string;
  endDate?: string;
  guests?: number;
  notes?: string;
}
