import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutScheduleLocationInCalendarsInput } from "../inputs/UserCreateNestedOneWithoutScheduleLocationInCalendarsInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarCreateWithoutLocationInput", {})
export class ScheduleLocationInCalendarCreateWithoutLocationInput {
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
}
