import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumNotificationTypeFieldUpdateOperationsInput } from "../inputs/EnumNotificationTypeFieldUpdateOperationsInput";
import { EventUpdateOneWithoutNotificationsNestedInput } from "../inputs/EventUpdateOneWithoutNotificationsNestedInput";
import { LocationUpdateOneWithoutNotificationsNestedInput } from "../inputs/LocationUpdateOneWithoutNotificationsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TripUpdateOneWithoutNotificationsNestedInput } from "../inputs/TripUpdateOneWithoutNotificationsNestedInput";

@TypeGraphQL.InputType("NotificationUpdateWithoutUserInput", {})
export class NotificationUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => EnumNotificationTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumNotificationTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  body?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  data?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isRead?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateOneWithoutNotificationsNestedInput, {
    nullable: true
  })
  location?: LocationUpdateOneWithoutNotificationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateOneWithoutNotificationsNestedInput, {
    nullable: true
  })
  event?: EventUpdateOneWithoutNotificationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateOneWithoutNotificationsNestedInput, {
    nullable: true
  })
  trip?: TripUpdateOneWithoutNotificationsNestedInput | undefined;
}
