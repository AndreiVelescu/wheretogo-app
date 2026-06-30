import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTripCollaboratorRoleWithAggregatesFilter } from "../inputs/EnumTripCollaboratorRoleWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TripCollaboratorScalarWhereWithAggregatesInput", {})
export class TripCollaboratorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TripCollaboratorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TripCollaboratorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TripCollaboratorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TripCollaboratorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  tripId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTripCollaboratorRoleWithAggregatesFilter, {
    nullable: true
  })
  role?: EnumTripCollaboratorRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
