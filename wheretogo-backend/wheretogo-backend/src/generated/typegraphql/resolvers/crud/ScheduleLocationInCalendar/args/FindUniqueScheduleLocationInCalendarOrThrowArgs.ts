import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../../../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueScheduleLocationInCalendarOrThrowArgs {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarWhereUniqueInput;
}
