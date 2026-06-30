import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateWithoutUserInput } from "../inputs/ScheduleLocationInCalendarCreateWithoutUserInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarCreateOrConnectWithoutUserInput", {})
export class ScheduleLocationInCalendarCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarWhereUniqueInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateWithoutUserInput, {
    nullable: false
  })
  create!: ScheduleLocationInCalendarCreateWithoutUserInput;
}
