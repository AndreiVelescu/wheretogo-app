import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ChatRoomUpdateOneWithoutTripNestedInput } from "../inputs/ChatRoomUpdateOneWithoutTripNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTripStatusFieldUpdateOperationsInput } from "../inputs/EnumTripStatusFieldUpdateOperationsInput";
import { NotificationUpdateManyWithoutTripNestedInput } from "../inputs/NotificationUpdateManyWithoutTripNestedInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutTripNestedInput } from "../inputs/PostUpdateManyWithoutTripNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TripCollaboratorUpdateManyWithoutTripNestedInput } from "../inputs/TripCollaboratorUpdateManyWithoutTripNestedInput";
import { TripDayUpdateManyWithoutTripNestedInput } from "../inputs/TripDayUpdateManyWithoutTripNestedInput";
import { UserUpdateOneRequiredWithoutTripsOwnedNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTripsOwnedNestedInput";

@TypeGraphQL.InputType("TripUpdateInput", {})
export class TripUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumTripStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumTripStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  startDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  endDate?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  city?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  country?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  totalBudget?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  currency?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTripsOwnedNestedInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutTripsOwnedNestedInput | undefined;

  @TypeGraphQL.Field(_type => TripDayUpdateManyWithoutTripNestedInput, {
    nullable: true
  })
  days?: TripDayUpdateManyWithoutTripNestedInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorUpdateManyWithoutTripNestedInput, {
    nullable: true
  })
  collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutTripNestedInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutTripNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpdateOneWithoutTripNestedInput, {
    nullable: true
  })
  chatRoom?: ChatRoomUpdateOneWithoutTripNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutTripNestedInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutTripNestedInput | undefined;
}
