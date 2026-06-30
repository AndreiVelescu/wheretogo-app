import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTransportModeNullableFilter } from "../inputs/EnumTransportModeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LocationNullableRelationFilter } from "../inputs/LocationNullableRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TripDayRelationFilter } from "../inputs/TripDayRelationFilter";

@TypeGraphQL.InputType("TripStopWhereInput", {})
export class TripStopWhereInput {
  @TypeGraphQL.Field(_type => [TripStopWhereInput], {
    nullable: true
  })
  AND?: TripStopWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopWhereInput], {
    nullable: true
  })
  OR?: TripStopWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopWhereInput], {
    nullable: true
  })
  NOT?: TripStopWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tripDayId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  locationId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  customName?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  arrivalTime?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  departureTime?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTransportModeNullableFilter, {
    nullable: true
  })
  transportMode?: EnumTransportModeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  estimatedCost?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TripDayRelationFilter, {
    nullable: true
  })
  tripDay?: TripDayRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationNullableRelationFilter, {
    nullable: true
  })
  location?: LocationNullableRelationFilter | undefined;
}
