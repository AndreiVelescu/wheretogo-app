import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTripCollaboratorRoleFilter } from "../inputs/EnumTripCollaboratorRoleFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TripRelationFilter } from "../inputs/TripRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TripCollaboratorWhereInput", {})
export class TripCollaboratorWhereInput {
  @TypeGraphQL.Field(_type => [TripCollaboratorWhereInput], {
    nullable: true
  })
  AND?: TripCollaboratorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorWhereInput], {
    nullable: true
  })
  OR?: TripCollaboratorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCollaboratorWhereInput], {
    nullable: true
  })
  NOT?: TripCollaboratorWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => TripRelationFilter, {
    nullable: true
  })
  trip?: TripRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
