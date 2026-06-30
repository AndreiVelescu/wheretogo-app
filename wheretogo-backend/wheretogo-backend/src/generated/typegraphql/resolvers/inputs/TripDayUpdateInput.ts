import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TripStopUpdateManyWithoutTripDayNestedInput } from "../inputs/TripStopUpdateManyWithoutTripDayNestedInput";
import { TripUpdateOneRequiredWithoutDaysNestedInput } from "../inputs/TripUpdateOneRequiredWithoutDaysNestedInput";

@TypeGraphQL.InputType("TripDayUpdateInput", {})
export class TripDayUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  dayNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  notes?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateOneRequiredWithoutDaysNestedInput, {
    nullable: true
  })
  trip?: TripUpdateOneRequiredWithoutDaysNestedInput | undefined;

  @TypeGraphQL.Field(_type => TripStopUpdateManyWithoutTripDayNestedInput, {
    nullable: true
  })
  stops?: TripStopUpdateManyWithoutTripDayNestedInput | undefined;
}
