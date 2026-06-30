import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorRole } from "../../enums/TripCollaboratorRole";

@TypeGraphQL.InputType("NestedEnumTripCollaboratorRoleFilter", {})
export class NestedEnumTripCollaboratorRoleFilter {
  @TypeGraphQL.Field(_type => TripCollaboratorRole, {
    nullable: true
  })
  equals?: "VIEWER" | "EDITOR" | "OWNER" | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorRole], {
    nullable: true
  })
  in?: Array<"VIEWER" | "EDITOR" | "OWNER"> | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorRole], {
    nullable: true
  })
  notIn?: Array<"VIEWER" | "EDITOR" | "OWNER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTripCollaboratorRoleFilter, {
    nullable: true
  })
  not?: NestedEnumTripCollaboratorRoleFilter | undefined;
}
