import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LocationUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput } from "../inputs/LocationUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarUpdateWithoutUserInput", {})
export class ScheduleLocationInCalendarUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  scheduledDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput, {
    nullable: true
  })
  location?: LocationUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput | undefined;
}
