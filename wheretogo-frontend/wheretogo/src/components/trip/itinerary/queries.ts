import { gql } from "@apollo/client";

export const TRIP_QUERY = gql`
  query Trip($id: Int!) {
    trip(id: $id) {
      id
      ownerId
      owner {
        id
        name
        avatar
      }
      title
      description
      startDate
      endDate
      city
      country
      isPublic
      totalBudget
      currency
      collaborators {
        id
        tripId
        userId
        role
        createdAt
        user {
          id
          name
          email
        }
      }
      days {
        id
        dayNumber
        date
        notes
        stops {
          id
          order
          customName
          address
          lat
          lng
          arrivalTime
          departureTime
          transportMode
          notes
          location {
            id
            name
            type
            rating
            photos
            googleUrl
            lat
            lng
            address
            description
            openHours
            phone
            website
          }
        }
      }
    }
  }
`;

export const CREATE_STOP_MUTATION = gql`
  mutation CreateOneTripStop($data: TripStopCreateInput!) {
    createOneTripStop(data: $data) {
      id
      tripDayId
      locationId
      customName
      address
      lat
      lng
      order
      arrivalTime
      departureTime
      transportMode
      notes
      estimatedCost
      location {
        id
        name
        type
        rating
        photos
        address
      }
    }
  }
`;

export const UPDATE_STOP_MUTATION = gql`
  mutation UpdateOneTripStop(
    $data: TripStopUpdateInput!
    $where: TripStopWhereUniqueInput!
  ) {
    updateOneTripStop(data: $data, where: $where) {
      id
      tripDayId
      locationId
      customName
      address
      lat
      lng
      order
      arrivalTime
      departureTime
      transportMode
      notes
      estimatedCost
      createdAt
      updatedAt
    }
  }
`;

export const REORDER_STOPS_MUTATION = gql`
  mutation ReorderTripDayStops($tripDayId: Int!, $stopIds: [Int!]!) {
    reorderTripDayStops(tripDayId: $tripDayId, stopIds: $stopIds) {
      id
    }
  }
`;

export const DELETE_STOP_MUTATION = gql`
  mutation DeleteOneTripStop($where: TripStopWhereUniqueInput!) {
    deleteOneTripStop(where: $where) {
      id
      tripDayId
      order
    }
  }
`;

export const UPDATE_COLLABORATOR_ROLE_MUTATION = gql`
  mutation UpdateOneTripCollaborator(
    $where: TripCollaboratorWhereUniqueInput!
    $data: TripCollaboratorUpdateInput!
  ) {
    updateOneTripCollaborator(where: $where, data: $data) {
      id
      role
    }
  }
`;

export const ADD_TRIP_COLLABORATOR_MUTATION = gql`
  mutation AddTripCollaborator($email: String!, $tripId: Int!, $role: String!) {
    addTripCollaborator(email: $email, tripId: $tripId, role: $role)
  }
`;

export const REMOVE_COLLABORATOR_MUTATION = gql`
  mutation RemoveTripCollaborator($tripId: Int!, $userId: Int!) {
    removeTripCollaborator(tripId: $tripId, userId: $userId)
  }
`;
