import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumTripCollaboratorRoleFieldUpdateOperationsInput } from "../inputs/EnumTripCollaboratorRoleFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TripCollaboratorUpdateManyMutationInput", {})
export class TripCollaboratorUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => EnumTripCollaboratorRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumTripCollaboratorRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
