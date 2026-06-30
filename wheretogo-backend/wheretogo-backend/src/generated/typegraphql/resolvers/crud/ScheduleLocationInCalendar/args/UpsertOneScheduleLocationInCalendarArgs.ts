import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleLocationInCalendarCreateInput } from "../../../inputs/ScheduleLocationInCalendarCreateInput";
import { ScheduleLocationInCalendarUpdateInput } from "../../../inputs/ScheduleLocationInCalendarUpdateInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../../../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneScheduleLocationInCalendarArgs {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateInput, {
    nullable: false
  })
  create!: ScheduleLocationInCalendarCreateInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateInput, {
    nullable: false
  })
  update!: ScheduleLocationInCalendarUpdateInput;
}
