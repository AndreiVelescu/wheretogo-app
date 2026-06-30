import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarScalarWhereInput } from "../inputs/ScheduleLocationInCalendarScalarWhereInput";
import { ScheduleLocationInCalendarUpdateManyMutationInput } from "../inputs/ScheduleLocationInCalendarUpdateManyMutationInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarUpdateManyWithWhereWithoutLocationInput", {})
export class ScheduleLocationInCalendarUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarScalarWhereInput, {
    nullable: false
  })
  where!: ScheduleLocationInCalendarScalarWhereInput;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateManyMutationInput, {
    nullable: false
  })
  data!: ScheduleLocationInCalendarUpdateManyMutationInput;
}
