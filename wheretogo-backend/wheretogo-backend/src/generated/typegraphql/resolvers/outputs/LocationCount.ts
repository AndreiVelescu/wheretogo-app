import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCountBookingsArgs } from "./args/LocationCountBookingsArgs";
import { LocationCountEventsArgs } from "./args/LocationCountEventsArgs";
import { LocationCountFavoritesArgs } from "./args/LocationCountFavoritesArgs";
import { LocationCountNotificationsArgs } from "./args/LocationCountNotificationsArgs";
import { LocationCountPostsArgs } from "./args/LocationCountPostsArgs";
import { LocationCountReviewsArgs } from "./args/LocationCountReviewsArgs";
import { LocationCountScheduleLocationInCalendarsArgs } from "./args/LocationCountScheduleLocationInCalendarsArgs";
import { LocationCountTripStopsArgs } from "./args/LocationCountTripStopsArgs";

@TypeGraphQL.ObjectType("LocationCount", {
  simpleResolvers: true
})
export class LocationCount {
  reviews!: number;
  events!: number;
  bookings!: number;
  favorites!: number;
  notifications!: number;
  tripStops!: number;
  scheduleLocationInCalendars!: number;
  posts!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "reviews",
    nullable: false
  })
  getReviews(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountReviewsArgs): number {
    return root.reviews;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "events",
    nullable: false
  })
  getEvents(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountEventsArgs): number {
    return root.events;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "bookings",
    nullable: false
  })
  getBookings(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountBookingsArgs): number {
    return root.bookings;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "favorites",
    nullable: false
  })
  getFavorites(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountFavoritesArgs): number {
    return root.favorites;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "notifications",
    nullable: false
  })
  getNotifications(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountNotificationsArgs): number {
    return root.notifications;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "tripStops",
    nullable: false
  })
  getTripStops(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountTripStopsArgs): number {
    return root.tripStops;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "scheduleLocationInCalendars",
    nullable: false
  })
  getScheduleLocationInCalendars(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountScheduleLocationInCalendarsArgs): number {
    return root.scheduleLocationInCalendars;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: LocationCount, @TypeGraphQL.Args() args: LocationCountPostsArgs): number {
    return root.posts;
  }
}
