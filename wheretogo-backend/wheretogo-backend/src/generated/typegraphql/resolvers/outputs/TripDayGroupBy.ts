import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayAvgAggregate } from "../outputs/TripDayAvgAggregate";
import { TripDayCountAggregate } from "../outputs/TripDayCountAggregate";
import { TripDayMaxAggregate } from "../outputs/TripDayMaxAggregate";
import { TripDayMinAggregate } from "../outputs/TripDayMinAggregate";
import { TripDaySumAggregate } from "../outputs/TripDaySumAggregate";

@TypeGraphQL.ObjectType("TripDayGroupBy", {
  simpleResolvers: true
})
export class TripDayGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tripId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  dayNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
