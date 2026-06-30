import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateNestedManyWithoutLocationInput } from "../inputs/BookingCreateNestedManyWithoutLocationInput";
import { FavoriteCreateNestedManyWithoutLocationInput } from "../inputs/FavoriteCreateNestedManyWithoutLocationInput";
import { LocationCreatephotosInput } from "../inputs/LocationCreatephotosInput";
import { LocationCreatetypesInput } from "../inputs/LocationCreatetypesInput";
import { LocationCreatevibesInput } from "../inputs/LocationCreatevibesInput";
import { NotificationCreateNestedManyWithoutLocationInput } from "../inputs/NotificationCreateNestedManyWithoutLocationInput";
import { PostCreateNestedManyWithoutLocationInput } from "../inputs/PostCreateNestedManyWithoutLocationInput";
import { ReviewCreateNestedManyWithoutLocationInput } from "../inputs/ReviewCreateNestedManyWithoutLocationInput";
import { ScheduleLocationInCalendarCreateNestedManyWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarCreateNestedManyWithoutLocationInput";
import { TripStopCreateNestedManyWithoutLocationInput } from "../inputs/TripStopCreateNestedManyWithoutLocationInput";

@TypeGraphQL.InputType("LocationCreateWithoutEventsInput", {})
export class LocationCreateWithoutEventsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => LocationCreatetypesInput, {
    nullable: true
  })
  types?: LocationCreatetypesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priceRange?: string | undefined;

  @TypeGraphQL.Field(_type => LocationCreatevibesInput, {
    nullable: true
  })
  vibes?: LocationCreatevibesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lng?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  rating?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userRatingsTotal?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  googleUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  openHours?: string | undefined;

  @TypeGraphQL.Field(_type => LocationCreatephotosInput, {
    nullable: true
  })
  photos?: LocationCreatephotosInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  menuPdf?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  popularityScore?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimatedCost?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  googleImported?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  reviews?: ReviewCreateNestedManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => BookingCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  bookings?: BookingCreateNestedManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  favorites?: FavoriteCreateNestedManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => TripStopCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  tripStops?: TripStopCreateNestedManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  scheduleLocationInCalendars?: ScheduleLocationInCalendarCreateNestedManyWithoutLocationInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutLocationInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutLocationInput | undefined;
}
