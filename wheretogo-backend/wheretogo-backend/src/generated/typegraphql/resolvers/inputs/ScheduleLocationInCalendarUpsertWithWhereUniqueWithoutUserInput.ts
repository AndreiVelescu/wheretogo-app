import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateWithoutUserInput } from "../inputs/ScheduleLocationInCalendarCreateWithoutUserInput";
import { ScheduleLocationInCalendarUpdateWithoutUserInput } from "../inputs/ScheduleLocationInCalendarUpdateWithoutUserInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutUserInput", {})
export class ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ScheduleLocationInCalendarUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateWithoutUserInput, {
    nullable: false
  })
  create!: ScheduleLocationInCalendarCreateWithoutUserInput;
}
