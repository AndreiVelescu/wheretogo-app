import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnNotificationEventArgs } from "./args/CreateManyAndReturnNotificationEventArgs";
import { CreateManyAndReturnNotificationLocationArgs } from "./args/CreateManyAndReturnNotificationLocationArgs";
import { CreateManyAndReturnNotificationTripArgs } from "./args/CreateManyAndReturnNotificationTripArgs";
import { Event } from "../../models/Event";
import { Location } from "../../models/Location";
import { Trip } from "../../models/Trip";
import { User } from "../../models/User";
import { NotificationType } from "../../enums/NotificationType";

@TypeGraphQL.ObjectType("CreateManyAndReturnNotification", {
  simpleResolvers: true
})
export class CreateManyAndReturnNotification {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => NotificationType, {
    nullable: false
  })
  type!: "TRIP_COLLABORATOR_ADDED" | "TRIP_COLLABORATOR_REMOVED" | "TRIP_UPDATED" | "TRIP_REMINDER" | "TRIP_STARTED" | "NEW_FOLLOWER" | "NEW_REVIEW" | "REVIEW_LIKED" | "NEW_LOCATION_NEARBY" | "LOCATION_UPDATE" | "BOOKING_CONFIRMED" | "BOOKING_CANCELLED" | "BOOKING_REMINDER" | "ACCOUNT_VERIFIED" | "PROMO" | "SYSTEM";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  data!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isRead!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  locationId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  eventId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tripId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  user!: User;

  location!: Location | null;
  event!: Event | null;
  trip!: Trip | null;

  @TypeGraphQL.Field(_type => Location, {
    name: "location",
    nullable: true
  })
  getLocation(@TypeGraphQL.Root() root: CreateManyAndReturnNotification, @TypeGraphQL.Args() args: CreateManyAndReturnNotificationLocationArgs): Location | null {
    return root.location;
  }

  @TypeGraphQL.Field(_type => Event, {
    name: "event",
    nullable: true
  })
  getEvent(@TypeGraphQL.Root() root: CreateManyAndReturnNotification, @TypeGraphQL.Args() args: CreateManyAndReturnNotificationEventArgs): Event | null {
    return root.event;
  }

  @TypeGraphQL.Field(_type => Trip, {
    name: "trip",
    nullable: true
  })
  getTrip(@TypeGraphQL.Root() root: CreateManyAndReturnNotification, @TypeGraphQL.Args() args: CreateManyAndReturnNotificationTripArgs): Trip | null {
    return root.trip;
  }
}
