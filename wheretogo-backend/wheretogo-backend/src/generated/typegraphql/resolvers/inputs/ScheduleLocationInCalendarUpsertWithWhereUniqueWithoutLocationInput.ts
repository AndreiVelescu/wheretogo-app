import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarCreateWithoutLocationInput";
import { ScheduleLocationInCalendarUpdateWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarUpdateWithoutLocationInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutLocationInput", {})
export class ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: ScheduleLocationInCalendarUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateWithoutLocationInput, {
    nullable: false
  })
  create!: ScheduleLocationInCalendarCreateWithoutLocationInput;
}
