import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBookingStatusFilter } from "../inputs/NestedEnumBookingStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { BookingStatus } from "../../enums/BookingStatus";

@TypeGraphQL.InputType("NestedEnumBookingStatusWithAggregatesFilter", {})
export class NestedEnumBookingStatusWithAggregatesFilter {
  @TypeGraphQL.Field(_type => BookingStatus, {
    nullable: true
  })
  equals?: "PENDING" | "CONFIRMED" | "CANCELLED" | undefined;

  @TypeGraphQL.Field(_type => [BookingStatus], {
    nullable: true
  })
  in?: Array<"PENDING" | "CONFIRMED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => [BookingStatus], {
    nullable: true
  })
  notIn?: Array<"PENDING" | "CONFIRMED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBookingStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumBookingStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBookingStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumBookingStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumBookingStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumBookingStatusFilter | undefined;
}
