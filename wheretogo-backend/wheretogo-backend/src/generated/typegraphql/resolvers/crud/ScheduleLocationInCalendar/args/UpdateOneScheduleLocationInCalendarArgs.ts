import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleLocationInCalendarUpdateInput } from "../../../inputs/ScheduleLocationInCalendarUpdateInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../../../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneScheduleLocationInCalendarArgs {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateInput, {
    nullable: false
  })
  data!: ScheduleLocationInCalendarUpdateInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarWhereUniqueInput;
}
