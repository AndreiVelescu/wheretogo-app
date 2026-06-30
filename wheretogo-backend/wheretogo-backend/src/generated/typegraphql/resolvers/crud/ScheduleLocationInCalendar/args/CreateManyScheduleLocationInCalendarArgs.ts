import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleLocationInCalendarCreateManyInput } from "../../../inputs/ScheduleLocationInCalendarCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyScheduleLocationInCalendarArgs {
  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateManyInput], {
    nullable: false
  })
  data!: ScheduleLocationInCalendarCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
