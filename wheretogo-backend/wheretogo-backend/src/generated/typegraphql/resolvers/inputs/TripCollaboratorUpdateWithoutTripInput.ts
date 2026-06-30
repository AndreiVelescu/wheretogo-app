import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTripCollaboratorRoleFieldUpdateOperationsInput } from "../inputs/EnumTripCollaboratorRoleFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTripsSharedNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTripsSharedNestedInput";

@TypeGraphQL.InputType("TripCollaboratorUpdateWithoutTripInput", {})
export class TripCollaboratorUpdateWithoutTripInput {
  @TypeGraphQL.Field(_type => EnumTripCollaboratorRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumTripCollaboratorRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTripsSharedNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutTripsSharedNestedInput | undefined;
}
