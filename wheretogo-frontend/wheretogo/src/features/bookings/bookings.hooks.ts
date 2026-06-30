/**
 * 🪝 Bookings Hooks (Apollo)
 */

import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
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
      userId
      locationId
      date
      time
      status
      guests
      persons
      notes
      createdAt
    }
  }
`;

const BOOKING_QUERY = gql`
  query Booking($id: String!) {
    booking(id: $id) {
      id
      userId
      locationId
      date
      time
      status
      guests
      persons
      notes
      createdAt
    }
  }
`;

const CREATE_BOOKING_MUTATION = gql`
  mutation CreateBooking($input: CreateBookingInput!) {
    createBooking(input: $input) {
      id
      userId
      locationId
      date
      time
      status
      guests
      persons
      notes
      createdAt
    }
  }
`;

const UPDATE_BOOKING_MUTATION = gql`
  mutation UpdateBooking($id: String!, $input: UpdateBookingInput!) {
    updateBooking(id: $id, input: $input) {
      id
      userId
      locationId
      date
      time
      status
      guests
      persons
      notes
      createdAt
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

const mapBooking = (booking: any): Booking => ({
  id: booking.id,
  userId: booking.userId,
  locationId: booking.locationId,
  date: booking.date,
  time: booking.time,
  status: booking.status,
  persons: booking.persons ?? booking.guests ?? 0,
  affiliateUrl: booking.affiliateUrl ?? null,
  createdAt: booking.createdAt || new Date().toISOString(),
});

/**
 * Query Keys
 */
export const BOOKINGS_KEYS = {
  all: ["bookings"] as const,
  lists: () => [...BOOKINGS_KEYS.all, "list"] as const,
  detail: (id: string) => [...BOOKINGS_KEYS.all, "detail", id] as const,
};

/**
 * Get user's bookings
 */
export const useBookings = () => {
  const { data, loading, error, refetch } = useQuery<{ myBookings: Booking[] }>(
    MY_BOOKINGS_QUERY
  );

  const response: ApiResponse<Booking[]> | undefined = data?.myBookings
    ? {
        success: true,
        data: data.myBookings.map(mapBooking),
        message: "Bookings loaded successfully",
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Get booking by ID
 */
export const useBooking = (bookingId: string) => {
  const { data, loading, error, refetch } = useQuery<
    { booking: Booking },
    { id: string }
  >(BOOKING_QUERY, {
    variables: { id: bookingId },
    skip: !bookingId,
  });

  const response: ApiResponse<Booking> | undefined = data?.booking
    ? {
        success: true,
        data: mapBooking(data.booking),
        message: "Booking loaded successfully",
        statusCode: 200,
      }
    : undefined;

  return { data: response, isLoading: loading, error, refetch };
};

/**
 * Create booking
 */
export const useCreateBooking = () => {
  const [mutate, { loading, error }] = useMutation<
    { createBooking: Booking },
    { input: CreateBookingInput }
  >(CREATE_BOOKING_MUTATION, {
    refetchQueries: [{ query: MY_BOOKINGS_QUERY }],
  });

  const createBooking = async (data: CreateBookingInput) => {
    const result = await mutate({ variables: { input: data } });
    return result.data?.createBooking
      ? mapBooking(result.data.createBooking)
      : undefined;
  };

  return { createBooking, isLoading: loading, error };
};

/**
 * Update booking
 */
export const useUpdateBooking = () => {
  const [mutate, { loading, error }] = useMutation<
    { updateBooking: Booking },
    { id: string; input: UpdateBookingInput }
  >(UPDATE_BOOKING_MUTATION, {
    refetchQueries: [{ query: MY_BOOKINGS_QUERY }],
  });

  const updateBooking = async (bookingId: string, data: UpdateBookingInput) => {
    const result = await mutate({ variables: { id: bookingId, input: data } });
    return result.data?.updateBooking
      ? mapBooking(result.data.updateBooking)
      : undefined;
  };

  return { updateBooking, isLoading: loading, error };
};

/**
 * Cancel booking
 */
export const useCancelBooking = () => {
  const [mutate, { loading, error }] = useMutation<
    { cancelBooking: { message: string } },
    { id: string }
  >(CANCEL_BOOKING_MUTATION, {
    refetchQueries: [{ query: MY_BOOKINGS_QUERY }],
  });

  const cancelBooking = async (bookingId: string) => {
    await mutate({ variables: { id: bookingId } });
  };

  return { cancelBooking, isLoading: loading, error };
};
