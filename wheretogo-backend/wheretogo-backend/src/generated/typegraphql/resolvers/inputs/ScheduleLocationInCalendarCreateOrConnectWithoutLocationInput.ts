import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarCreateWithoutLocationInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput", {})
export class ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateWithoutLocationInput, {
    nullable: false
  })
  create!: ScheduleLocationInCalendarCreateWithoutLocationInput;
}
