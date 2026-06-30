import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBookingStatusFieldUpdateOperationsInput } from "../inputs/EnumBookingStatusFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LocationUpdateOneRequiredWithoutBookingsNestedInput } from "../inputs/LocationUpdateOneRequiredWithoutBookingsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBookingsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBookingsNestedInput";

@TypeGraphQL.InputType("BookingUpdateInput", {})
export class BookingUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  time?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  persons?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumBookingStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumBookingStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  affiliateUrl?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookingsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBookingsNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateOneRequiredWithoutBookingsNestedInput, {
    nullable: true
  })
  location?: LocationUpdateOneRequiredWithoutBookingsNestedInput | undefined;
}
