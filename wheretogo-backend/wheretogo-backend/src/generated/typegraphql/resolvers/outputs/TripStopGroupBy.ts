import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopAvgAggregate } from "../outputs/TripStopAvgAggregate";
import { TripStopCountAggregate } from "../outputs/TripStopCountAggregate";
import { TripStopMaxAggregate } from "../outputs/TripStopMaxAggregate";
import { TripStopMinAggregate } from "../outputs/TripStopMinAggregate";
import { TripStopSumAggregate } from "../outputs/TripStopSumAggregate";
import { TransportMode } from "../../enums/TransportMode";

@TypeGraphQL.ObjectType("TripStopGroupBy", {
  simpleResolvers: true
})
export class TripStopGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tripDayId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  locationId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lng!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  arrivalTime!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  departureTime!: string | null;

  @TypeGraphQL.Field(_type => TransportMode, {
    nullable: true
  })
  transportMode!: "WALK" | "CAR" | "PUBLIC_TRANSPORT" | "BIKE" | "TAXI" | "OTHER" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimatedCost!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TripStopCountAggregate, {
    nullable: true
  })
  _count!: TripStopCountAggregate | null;

  @TypeGraphQL.Field(_type => TripStopAvgAggregate, {
    nullable: true
  })
  _avg!: TripStopAvgAggregate | null;

  @TypeGraphQL.Field(_type => TripStopSumAggregate, {
    nullable: true
  })
  _sum!: TripStopSumAggregate | null;

  @TypeGraphQL.Field(_type => TripStopMinAggregate, {
    nullable: true
  })
  _min!: TripStopMinAggregate | null;

  @TypeGraphQL.Field(_type => TripStopMaxAggregate, {
    nullable: true
  })
  _max!: TripStopMaxAggregate | null;
}
