import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTripCollaboratorRoleFieldUpdateOperationsInput } from "../inputs/EnumTripCollaboratorRoleFieldUpdateOperationsInput";
import { TripUpdateOneRequiredWithoutCollaboratorsNestedInput } from "../inputs/TripUpdateOneRequiredWithoutCollaboratorsNestedInput";

@TypeGraphQL.InputType("TripCollaboratorUpdateWithoutUserInput", {})
export class TripCollaboratorUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => EnumTripCollaboratorRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumTripCollaboratorRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateOneRequiredWithoutCollaboratorsNestedInput, {
    nullable: true
  })
  trip?: TripUpdateOneRequiredWithoutCollaboratorsNestedInput | undefined;
}
