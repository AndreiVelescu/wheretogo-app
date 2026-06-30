import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarUpdateWithoutLocationInput", {})
export class ScheduleLocationInCalendarUpdateWithoutLocationInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  scheduledDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput | undefined;
}
