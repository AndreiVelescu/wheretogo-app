import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleLocationInCalendarCreateInput } from "../../../inputs/ScheduleLocationInCalendarCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneScheduleLocationInCalendarArgs {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateInput, {
    nullable: false
  })
  data!: ScheduleLocationInCalendarCreateInput;
}
