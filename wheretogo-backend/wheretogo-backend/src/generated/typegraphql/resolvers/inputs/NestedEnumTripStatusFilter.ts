import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStatus } from "../../enums/TripStatus";

@TypeGraphQL.InputType("NestedEnumTripStatusFilter", {})
export class NestedEnumTripStatusFilter {
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
