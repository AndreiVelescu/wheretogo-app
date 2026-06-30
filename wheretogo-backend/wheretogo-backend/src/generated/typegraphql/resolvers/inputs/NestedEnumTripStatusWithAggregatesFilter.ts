import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTripStatusFilter } from "../inputs/NestedEnumTripStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TripStatus } from "../../enums/TripStatus";

@TypeGraphQL.InputType("NestedEnumTripStatusWithAggregatesFilter", {})
export class NestedEnumTripStatusWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTripStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTripStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTripStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumTripStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTripStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumTripStatusFilter | undefined;
}
