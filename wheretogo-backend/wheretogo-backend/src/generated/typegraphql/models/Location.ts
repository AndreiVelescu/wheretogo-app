import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Booking } from "../models/Booking";
import { Event } from "../models/Event";
import { Favorite } from "../models/Favorite";
import { Notification } from "../models/Notification";
import { Post } from "../models/Post";
import { Review } from "../models/Review";
import { ScheduleLocationInCalendar } from "../models/ScheduleLocationInCalendar";
import { TripStop } from "../models/TripStop";
import { LocationCount } from "../resolvers/outputs/LocationCount";

@TypeGraphQL.ObjectType("Location", {
  simpleResolvers: true
})
export class Location {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  types!: string[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priceRange?: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  vibes!: string[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lng?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  rating?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userRatingsTotal?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  googleUrl?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  openHours?: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  photos!: string[];

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  menuPdf?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  popularityScore?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimatedCost?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  googleImported!: boolean;

  reviews?: Review[];

  events?: Event[];

  bookings?: Booking[];

  favorites?: Favorite[];

  notifications?: Notification[];

  tripStops?: TripStop[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  scheduleLocationInCalendars?: ScheduleLocationInCalendar[];

  posts?: Post[];

  @TypeGraphQL.Field(_type => LocationCount, {
    nullable: true
  })
  _count?: LocationCount | null;
}
