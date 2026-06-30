import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarUpdateWithoutUserInput } from "../inputs/ScheduleLocationInCalendarUpdateWithoutUserInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutUserInput", {})
export class ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ScheduleLocationInCalendarUpdateWithoutUserInput;
}
