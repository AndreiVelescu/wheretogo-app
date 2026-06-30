import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayAvgAggregate } from "../outputs/TripDayAvgAggregate";
import { TripDayCountAggregate } from "../outputs/TripDayCountAggregate";
import { TripDayMaxAggregate } from "../outputs/TripDayMaxAggregate";
import { TripDayMinAggregate } from "../outputs/TripDayMinAggregate";
import { TripDaySumAggregate } from "../outputs/TripDaySumAggregate";

@TypeGraphQL.ObjectType("AggregateTripDay", {
  simpleResolvers: true
})
export class AggregateTripDay {
  @TypeGraphQL.Field(_type => TripDayCountAggregate, {
    nullable: true
  })
  _count!: TripDayCountAggregate | null;

  @TypeGraphQL.Field(_type => TripDayAvgAggregate, {
    nullable: true
  })
  _avg!: TripDayAvgAggregate | null;

  @TypeGraphQL.Field(_type => TripDaySumAggregate, {
    nullable: true
  })
  _sum!: TripDaySumAggregate | null;

  @TypeGraphQL.Field(_type => TripDayMinAggregate, {
    nullable: true
  })
  _min!: TripDayMinAggregate | null;

  @TypeGraphQL.Field(_type => TripDayMaxAggregate, {
    nullable: true
  })
  _max!: TripDayMaxAggregate | null;
}
