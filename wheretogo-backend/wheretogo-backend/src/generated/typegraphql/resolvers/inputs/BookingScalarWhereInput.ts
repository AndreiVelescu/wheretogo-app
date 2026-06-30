import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBookingStatusFilter } from "../inputs/EnumBookingStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BookingScalarWhereInput", {})
export class BookingScalarWhereInput {
  @TypeGraphQL.Field(_type => [BookingScalarWhereInput], {
    nullable: true
  })
  AND?: BookingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingScalarWhereInput], {
    nullable: true
  })
  OR?: BookingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingScalarWhereInput], {
    nullable: true
  })
  NOT?: BookingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  locationId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  time?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  persons?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumBookingStatusFilter, {
    nullable: true
  })
  status?: EnumBookingStatusFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  affiliateUrl?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
