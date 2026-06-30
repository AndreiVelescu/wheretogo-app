import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTripCollaboratorRoleFilter } from "../inputs/NestedEnumTripCollaboratorRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { TripCollaboratorRole } from "../../enums/TripCollaboratorRole";

@TypeGraphQL.InputType("NestedEnumTripCollaboratorRoleWithAggregatesFilter", {})
export class NestedEnumTripCollaboratorRoleWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumTripCollaboratorRoleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumTripCollaboratorRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTripCollaboratorRoleFilter, {
    nullable: true
  })
  _min?: NestedEnumTripCollaboratorRoleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTripCollaboratorRoleFilter, {
    nullable: true
  })
  _max?: NestedEnumTripCollaboratorRoleFilter | undefined;
}
