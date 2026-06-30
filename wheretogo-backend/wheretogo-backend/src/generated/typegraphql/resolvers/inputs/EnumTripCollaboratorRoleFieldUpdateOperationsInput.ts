import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorRole } from "../../enums/TripCollaboratorRole";

@TypeGraphQL.InputType("EnumTripCollaboratorRoleFieldUpdateOperationsInput", {})
export class EnumTripCollaboratorRoleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TripCollaboratorRole, {
    nullable: true
  })
  set?: "VIEWER" | "EDITOR" | "OWNER" | undefined;
}
