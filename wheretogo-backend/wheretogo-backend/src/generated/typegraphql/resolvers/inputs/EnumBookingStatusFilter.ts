import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumBookingStatusFilter } from "../inputs/NestedEnumBookingStatusFilter";
import { BookingStatus } from "../../enums/BookingStatus";

@TypeGraphQL.InputType("EnumBookingStatusFilter", {})
export class EnumBookingStatusFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumBookingStatusFilter, {
    nullable: true
  })
  not?: NestedEnumBookingStatusFilter | undefined;
}
