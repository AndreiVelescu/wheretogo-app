import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleLocationInCalendarWhereInput } from "../../inputs/ScheduleLocationInCalendarWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountScheduleLocationInCalendarsArgs {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereInput, {
    nullable: true
  })
  where?: ScheduleLocationInCalendarWhereInput | undefined;
}
