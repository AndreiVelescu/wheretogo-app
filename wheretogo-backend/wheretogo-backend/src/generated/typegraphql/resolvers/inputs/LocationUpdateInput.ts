import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingUpdateManyWithoutLocationNestedInput } from "../inputs/BookingUpdateManyWithoutLocationNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EventUpdateManyWithoutLocationNestedInput } from "../inputs/EventUpdateManyWithoutLocationNestedInput";
import { FavoriteUpdateManyWithoutLocationNestedInput } from "../inputs/FavoriteUpdateManyWithoutLocationNestedInput";
import { LocationUpdatephotosInput } from "../inputs/LocationUpdatephotosInput";
import { LocationUpdatetypesInput } from "../inputs/LocationUpdatetypesInput";
import { LocationUpdatevibesInput } from "../inputs/LocationUpdatevibesInput";
import { NotificationUpdateManyWithoutLocationNestedInput } from "../inputs/NotificationUpdateManyWithoutLocationNestedInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutLocationNestedInput } from "../inputs/PostUpdateManyWithoutLocationNestedInput";
import { ReviewUpdateManyWithoutLocationNestedInput } from "../inputs/ReviewUpdateManyWithoutLocationNestedInput";
import { ScheduleLocationInCalendarUpdateManyWithoutLocationNestedInput } from "../inputs/ScheduleLocationInCalendarUpdateManyWithoutLocationNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TripStopUpdateManyWithoutLocationNestedInput } from "../inputs/TripStopUpdateManyWithoutLocationNestedInput";

@TypeGraphQL.InputType("LocationUpdateInput", {})
export class LocationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  placeId?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdatetypesInput, {
    nullable: true
  })
  types?: LocationUpdatetypesInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  priceRange?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdatevibesInput, {
    nullable: true
  })
  vibes?: LocationUpdatevibesInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  lat?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  lng?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  userRatingsTotal?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  website?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  phone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  googleUrl?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  openHours?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdatephotosInput, {
    nullable: true
  })
  photos?: LocationUpdatephotosInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  menuPdf?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  popularityScore?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  estimatedCost?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  googleImported?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ReviewUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  reviews?: ReviewUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  events?: EventUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => BookingUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  bookings?: BookingUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => FavoriteUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  favorites?: FavoriteUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => TripStopUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  tripStops?: TripStopUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  scheduleLocationInCalendars?: ScheduleLocationInCalendarUpdateManyWithoutLocationNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutLocationNestedInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutLocationNestedInput | undefined;
}
