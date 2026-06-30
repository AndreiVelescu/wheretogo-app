import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBookingStatusWithAggregatesFilter } from "../inputs/EnumBookingStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("BookingScalarWhereWithAggregatesInput", {})
export class BookingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [BookingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: BookingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: BookingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: BookingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  locationId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  time?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  persons?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBookingStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumBookingStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  affiliateUrl?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
