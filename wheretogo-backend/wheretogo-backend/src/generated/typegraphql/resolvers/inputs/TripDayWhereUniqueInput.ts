import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TripDayTripIdDayNumberCompoundUniqueInput } from "../inputs/TripDayTripIdDayNumberCompoundUniqueInput";
import { TripDayWhereInput } from "../inputs/TripDayWhereInput";
import { TripRelationFilter } from "../inputs/TripRelationFilter";
import { TripStopListRelationFilter } from "../inputs/TripStopListRelationFilter";

@TypeGraphQL.InputType("TripDayWhereUniqueInput", {})
export class TripDayWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TripDayTripIdDayNumberCompoundUniqueInput, {
    nullable: true
  })
  tripId_dayNumber?: TripDayTripIdDayNumberCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [TripDayWhereInput], {
    nullable: true
  })
  AND?: TripDayWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayWhereInput], {
    nullable: true
  })
  OR?: TripDayWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayWhereInput], {
    nullable: true
  })
  NOT?: TripDayWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tripId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  dayNumber?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TripRelationFilter, {
    nullable: true
  })
  trip?: TripRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TripStopListRelationFilter, {
    nullable: true
  })
  stops?: TripStopListRelationFilter | undefined;
}
