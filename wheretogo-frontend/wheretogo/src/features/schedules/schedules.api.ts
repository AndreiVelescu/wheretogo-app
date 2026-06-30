/**
 * 📅 Schedules API
 */

import { gql } from "@apollo/client";

export const MY_SCHEDULES_QUERY = gql`
  query MySchedules {
    mySchedules {
      id
      userId
      locationId
      scheduledDate
      createdAt
      location {
        id
        placeId
        name
        description
        type
        types
        priceRange
        vibes
        address
        rating
        phone
        openHours
        photos
      }
    }
  }
`;

export const SCHEDULE_LOCATION_MUTATION = gql`
  mutation ScheduleLocation($scheduledDate: String!, $locationId: Int!) {
    scheduleLocation(scheduledDate: $scheduledDate, locationId: $locationId) {
      id
      location {
        id
        placeId
        name
        description
        type
        types
        priceRange
        vibes
        address
        rating
        phone
        openHours
        photos
        menuPdf
      }
    }
  }
`;
