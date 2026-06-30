import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarUpdateWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarUpdateWithoutLocationInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutLocationInput", {})
export class ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateWithoutLocationInput, {
    nullable: false
  })
  data!: ScheduleLocationInCalendarUpdateWithoutLocationInput;
}
