/**
 * 📅 Bookings API Layer
 */

import { apolloClient } from "@/src/lib/apolloClient";
import { gql } from "@apollo/client";
import { ApiResponse } from "../auth/auth.types";
import {
  Booking,
  CreateBookingInput,
  UpdateBookingInput,
} from "./bookings.types";

const MY_BOOKINGS_QUERY = gql`
  query MyBookings {
    myBookings {
      id
      date
      time
      status
      guests
      notes
      locationId
    }
  }
`;

const BOOKING_QUERY = gql`
  query Booking($id: String!) {
    booking(id: $id) {
      id
      date
      time
      status
      guests
      notes
      locationId
    }
  }
`;

const CREATE_BOOKING_MUTATION = gql`
  mutation CreateBooking($input: CreateBookingInput!) {
    createBooking(input: $input) {
      id
      date
      time
      status
      guests
      notes
      locationId
    }
  }
`;

const UPDATE_BOOKING_MUTATION = gql`
  mutation UpdateBooking($id: String!, $input: UpdateBookingInput!) {
    updateBooking(id: $id, input: $input) {
      id
      date
      time
      status
      guests
      notes
      locationId
    }
  }
`;

const CANCEL_BOOKING_MUTATION = gql`
  mutation CancelBooking($id: String!) {
    cancelBooking(id: $id) {
      message
    }
  }
`;

export const bookingsApi = {
  /**
   * Get user's bookings
   */
  async getMyBookings(): Promise<ApiResponse<Booking[]>> {
    try {
      const result = await apolloClient.query<{ myBookings: Booking[] }>({
        query: MY_BOOKINGS_QUERY,
        fetchPolicy: "network-only",
      });
      return {
        success: true,
        data: result.data?.myBookings || [],
        message: "Bookings loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      return {
        success: false,
        data: [],
        message: error?.message || "Failed to load bookings",
        statusCode: 500,
      };
    }
  },

  /**
   * Get booking by ID
   */
  async getById(bookingId: string): Promise<ApiResponse<Booking>> {
    try {
      const result = await apolloClient.query<{ booking: Booking }>({
        query: BOOKING_QUERY,
        variables: { id: bookingId },
        fetchPolicy: "network-only",
      });
      if (!result.data?.booking) {
        throw new Error("Booking not found");
      }
      return {
        success: true,
        data: result.data.booking,
        message: "Booking loaded successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to load booking");
    }
  },

  /**
   * Create new booking
   */
  async create(bookingData: CreateBookingInput): Promise<ApiResponse<Booking>> {
    try {
      const result = await apolloClient.mutate<{ createBooking: Booking }>({
        mutation: CREATE_BOOKING_MUTATION,
        variables: { input: bookingData },
      });
      return {
        success: true,
        data: result.data?.createBooking,
        message: "Booking created successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to create booking");
    }
  },

  /**
   * Update booking
   */
  async update(
    bookingId: string,
    updateData: UpdateBookingInput
  ): Promise<ApiResponse<Booking>> {
    try {
      const result = await apolloClient.mutate<{ updateBooking: Booking }>({
        mutation: UPDATE_BOOKING_MUTATION,
        variables: { id: bookingId, input: updateData },
      });
      return {
        success: true,
        data: result.data?.updateBooking,
        message: "Booking updated successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to update booking");
    }
  },

  /**
   * Cancel booking
   */
  async cancel(bookingId: string): Promise<ApiResponse<void>> {
    try {
      await apolloClient.mutate({
        mutation: CANCEL_BOOKING_MUTATION,
        variables: { id: bookingId },
      });
      return {
        success: true,
        message: "Booking cancelled successfully",
        statusCode: 200,
      };
    } catch (error: any) {
      throw new Error(error?.message || "Failed to cancel booking");
    }
  },
};
