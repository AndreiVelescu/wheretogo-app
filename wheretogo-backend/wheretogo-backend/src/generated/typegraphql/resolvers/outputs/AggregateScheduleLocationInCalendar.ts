import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarAvgAggregate } from "../outputs/ScheduleLocationInCalendarAvgAggregate";
import { ScheduleLocationInCalendarCountAggregate } from "../outputs/ScheduleLocationInCalendarCountAggregate";
import { ScheduleLocationInCalendarMaxAggregate } from "../outputs/ScheduleLocationInCalendarMaxAggregate";
import { ScheduleLocationInCalendarMinAggregate } from "../outputs/ScheduleLocationInCalendarMinAggregate";
import { ScheduleLocationInCalendarSumAggregate } from "../outputs/ScheduleLocationInCalendarSumAggregate";

@TypeGraphQL.ObjectType("AggregateScheduleLocationInCalendar", {
  simpleResolvers: true
})
export class AggregateScheduleLocationInCalendar {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCountAggregate, {
    nullable: true
  })
  _count!: ScheduleLocationInCalendarCountAggregate | null;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarAvgAggregate, {
    nullable: true
  })
  _avg!: ScheduleLocationInCalendarAvgAggregate | null;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarSumAggregate, {
    nullable: true
  })
  _sum!: ScheduleLocationInCalendarSumAggregate | null;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarMinAggregate, {
    nullable: true
  })
  _min!: ScheduleLocationInCalendarMinAggregate | null;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarMaxAggregate, {
    nullable: true
  })
  _max!: ScheduleLocationInCalendarMaxAggregate | null;
}
