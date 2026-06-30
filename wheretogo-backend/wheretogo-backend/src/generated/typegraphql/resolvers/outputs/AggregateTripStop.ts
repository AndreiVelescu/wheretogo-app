import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopAvgAggregate } from "../outputs/TripStopAvgAggregate";
import { TripStopCountAggregate } from "../outputs/TripStopCountAggregate";
import { TripStopMaxAggregate } from "../outputs/TripStopMaxAggregate";
import { TripStopMinAggregate } from "../outputs/TripStopMinAggregate";
import { TripStopSumAggregate } from "../outputs/TripStopSumAggregate";

@TypeGraphQL.ObjectType("AggregateTripStop", {
  simpleResolvers: true
})
export class AggregateTripStop {
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
