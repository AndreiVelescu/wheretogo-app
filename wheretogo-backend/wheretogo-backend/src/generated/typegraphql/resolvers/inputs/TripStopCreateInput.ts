import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutTripStopsInput } from "../inputs/LocationCreateNestedOneWithoutTripStopsInput";
import { TripDayCreateNestedOneWithoutStopsInput } from "../inputs/TripDayCreateNestedOneWithoutStopsInput";
import { TransportMode } from "../../enums/TransportMode";

@TypeGraphQL.InputType("TripStopCreateInput", {})
export class TripStopCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lng?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  arrivalTime?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  departureTime?: string | undefined;

  @TypeGraphQL.Field(_type => TransportMode, {
    nullable: true
  })
  transportMode?: "WALK" | "CAR" | "PUBLIC_TRANSPORT" | "BIKE" | "TAXI" | "OTHER" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimatedCost?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TripDayCreateNestedOneWithoutStopsInput, {
    nullable: false
  })
  tripDay!: TripDayCreateNestedOneWithoutStopsInput;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutTripStopsInput, {
    nullable: true
  })
  location?: LocationCreateNestedOneWithoutTripStopsInput | undefined;
}
