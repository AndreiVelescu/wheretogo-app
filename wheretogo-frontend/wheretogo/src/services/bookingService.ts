import apiClient from "./apiClient";
import { Booking, PaginatedResponse } from "../types/location";
import { API_CONFIG } from "../config/api";
import { ApiResponse } from "../types/auth";

export const bookingService = {
  // Get user's bookings
  getMyBookings: async (): Promise<ApiResponse<Booking[]>> => {
    try {
      const response = await apiClient.get<PaginatedResponse<Booking>>(
        API_CONFIG.ENDPOINTS.BOOKINGS.BY_USER
      );
      return {
        success: true,
        data: response.data.data || [],
        message: "Rezervările au fost încărcate cu succes",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message:
          error?.response?.data?.message || "Nu s-au putut încărca rezervările",
        statusCode: error?.response?.status || 500,
      };
    }
  },

  // Create a new booking
  createBooking: async (bookingData: {
    locationId: string;
    startDate: string;
    endDate: string;
    guests: number;
    notes?: string;
  }): Promise<ApiResponse<Booking>> => {
    try {
      const { data, status } = await apiClient.post<Booking>(
        API_CONFIG.ENDPOINTS.BOOKINGS.BASE,
        bookingData
      );
      return {
        success: true,
        data,
        message: "Rezervarea a fost creată cu succes",
        statusCode: status,
      };
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  },

  // Update booking status
  updateBooking: async (
    bookingId: string,
    updateData: {
      status?: "PENDING" | "CONFIRMED" | "CANCELLED";
      startDate?: string;
      endDate?: string;
      guests?: number;
      notes?: string;
    }
  ): Promise<ApiResponse<Booking>> => {
    try {
      const { data, status } = await apiClient.put<Booking>(
        `${API_CONFIG.ENDPOINTS.BOOKINGS.BASE}/${bookingId}`,
        updateData
      );
      return {
        success: true,
        data,
        message: "Rezervarea a fost actualizată",
        statusCode: status,
      };
    } catch (error) {
      console.error("Error updating booking:", error);
      throw error;
    }
  },

  // Cancel booking
  cancelBooking: async (bookingId: string): Promise<ApiResponse<void>> => {
    try {
      const { status } = await apiClient.delete(
        `${API_CONFIG.ENDPOINTS.BOOKINGS.BASE}/${bookingId}`
      );
      return {
        success: true,
        data: undefined,
        message: "Rezervarea a fost anulată",
        statusCode: status,
      };
    } catch (error) {
      console.error("Error canceling booking:", error);
      throw error;
    }
  },

  // Get booking by ID
  getBookingById: async (bookingId: string): Promise<ApiResponse<Booking>> => {
    try {
      const { data, status } = await apiClient.get<Booking>(
        `${API_CONFIG.ENDPOINTS.BOOKINGS.BASE}/${bookingId}`
      );
      return {
        success: true,
        data,
        message: "Rezervarea a fost încărcată",
        statusCode: status,
      };
    } catch (error) {
      console.error("Error fetching booking:", error);
      throw error;
    }
  },
};
