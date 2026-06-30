import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTripStatusFilter } from "../inputs/NestedEnumTripStatusFilter";
import { TripStatus } from "../../enums/TripStatus";

@TypeGraphQL.InputType("EnumTripStatusFilter", {})
export class EnumTripStatusFilter {
  @TypeGraphQL.Field(_type => TripStatus, {
    nullable: true
  })
  equals?: "DRAFT" | "PLANNED" | "ACTIVE" | "COMPLETED" | "CANCELLED" | undefined;

  @TypeGraphQL.Field(_type => [TripStatus], {
    nullable: true
  })
  in?: Array<"DRAFT" | "PLANNED" | "ACTIVE" | "COMPLETED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => [TripStatus], {
    nullable: true
  })
  notIn?: Array<"DRAFT" | "PLANNED" | "ACTIVE" | "COMPLETED" | "CANCELLED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTripStatusFilter, {
    nullable: true
  })
  not?: NestedEnumTripStatusFilter | undefined;
}
