import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingListRelationFilter } from "../inputs/BookingListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EventListRelationFilter } from "../inputs/EventListRelationFilter";
import { FavoriteListRelationFilter } from "../inputs/FavoriteListRelationFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LocationName_address_uniqueCompoundUniqueInput } from "../inputs/LocationName_address_uniqueCompoundUniqueInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ReviewListRelationFilter } from "../inputs/ReviewListRelationFilter";
import { ScheduleLocationInCalendarListRelationFilter } from "../inputs/ScheduleLocationInCalendarListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { TripStopListRelationFilter } from "../inputs/TripStopListRelationFilter";

@TypeGraphQL.InputType("LocationWhereUniqueInput", {})
export class LocationWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeId?: string | undefined;

  @TypeGraphQL.Field(_type => LocationName_address_uniqueCompoundUniqueInput, {
    nullable: true
  })
  name_address_unique?: LocationName_address_uniqueCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereInput], {
    nullable: true
  })
  AND?: LocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereInput], {
    nullable: true
  })
  OR?: LocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationWhereInput], {
    nullable: true
  })
  NOT?: LocationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  types?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  priceRange?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  vibes?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  lat?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  lng?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  rating?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  userRatingsTotal?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  website?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  googleUrl?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  openHours?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  photos?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  menuPdf?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  popularityScore?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  estimatedCost?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  googleImported?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ReviewListRelationFilter, {
    nullable: true
  })
  reviews?: ReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EventListRelationFilter, {
    nullable: true
  })
  events?: EventListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookingListRelationFilter, {
    nullable: true
  })
  bookings?: BookingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FavoriteListRelationFilter, {
    nullable: true
  })
  favorites?: FavoriteListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TripStopListRelationFilter, {
    nullable: true
  })
  tripStops?: TripStopListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarListRelationFilter, {
    nullable: true
  })
  scheduleLocationInCalendars?: ScheduleLocationInCalendarListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;
}
