import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationCreateNestedOneWithoutScheduleLocationInCalendarsInput";
import { UserCreateNestedOneWithoutScheduleLocationInCalendarsInput } from "../inputs/UserCreateNestedOneWithoutScheduleLocationInCalendarsInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarCreateInput", {})
export class ScheduleLocationInCalendarCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  scheduledDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutScheduleLocationInCalendarsInput;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  location!: LocationCreateNestedOneWithoutScheduleLocationInCalendarsInput;
}
