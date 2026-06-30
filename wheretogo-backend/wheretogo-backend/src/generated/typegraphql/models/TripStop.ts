import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Location } from "../models/Location";
import { TripDay } from "../models/TripDay";
import { TransportMode } from "../enums/TransportMode";

@TypeGraphQL.ObjectType("TripStop", {
  simpleResolvers: true
})
export class TripStop {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  tripDay?: TripDay;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tripDayId!: number;

  location?: Location | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  locationId?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lng?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  arrivalTime?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  departureTime?: string | null;

  @TypeGraphQL.Field(_type => TransportMode, {
    nullable: true
  })
  transportMode?: "WALK" | "CAR" | "PUBLIC_TRANSPORT" | "BIKE" | "TAXI" | "OTHER" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimatedCost?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
