import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarAvgAggregate } from "../outputs/ScheduleLocationInCalendarAvgAggregate";
import { ScheduleLocationInCalendarCountAggregate } from "../outputs/ScheduleLocationInCalendarCountAggregate";
import { ScheduleLocationInCalendarMaxAggregate } from "../outputs/ScheduleLocationInCalendarMaxAggregate";
import { ScheduleLocationInCalendarMinAggregate } from "../outputs/ScheduleLocationInCalendarMinAggregate";
import { ScheduleLocationInCalendarSumAggregate } from "../outputs/ScheduleLocationInCalendarSumAggregate";

@TypeGraphQL.ObjectType("ScheduleLocationInCalendarGroupBy", {
  simpleResolvers: true
})
export class ScheduleLocationInCalendarGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  locationId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  scheduledDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
