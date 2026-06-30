import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorWhereInput } from "../inputs/TripCollaboratorWhereInput";

@TypeGraphQL.InputType("TripCollaboratorListRelationFilter", {})
export class TripCollaboratorListRelationFilter {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereInput, {
    nullable: true
  })
  every?: TripCollaboratorWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorWhereInput, {
    nullable: true
  })
  some?: TripCollaboratorWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorWhereInput, {
    nullable: true
  })
  none?: TripCollaboratorWhereInput | undefined;
}
