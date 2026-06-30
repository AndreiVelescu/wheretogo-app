import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTripCollaboratorRoleFilter } from "../inputs/EnumTripCollaboratorRoleFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TripCollaboratorScalarWhereInput", {})
export class TripCollaboratorScalarWhereInput {
  @TypeGraphQL.Field(_type => [TripCollaboratorScalarWhereInput], {
    nullable: true
  })
  AND?: TripCollaboratorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorScalarWhereInput], {
    nullable: true
  })
  OR?: TripCollaboratorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorScalarWhereInput], {
    nullable: true
  })
  NOT?: TripCollaboratorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tripId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTripCollaboratorRoleFilter, {
    nullable: true
  })
  role?: EnumTripCollaboratorRoleFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
