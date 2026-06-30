import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarWhereInput } from "../inputs/ScheduleLocationInCalendarWhereInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarListRelationFilter", {})
export class ScheduleLocationInCalendarListRelationFilter {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereInput, {
    nullable: true
  })
  every?: ScheduleLocationInCalendarWhereInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereInput, {
    nullable: true
  })
  some?: ScheduleLocationInCalendarWhereInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereInput, {
    nullable: true
  })
  none?: ScheduleLocationInCalendarWhereInput | undefined;
}
