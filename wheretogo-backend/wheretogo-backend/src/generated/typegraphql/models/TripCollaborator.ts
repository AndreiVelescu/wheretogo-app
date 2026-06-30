import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Trip } from "../models/Trip";
import { User } from "../models/User";
import { TripCollaboratorRole } from "../enums/TripCollaboratorRole";

@TypeGraphQL.ObjectType("TripCollaborator", {
  simpleResolvers: true
})
export class TripCollaborator {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  trip?: Trip;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tripId!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TripCollaboratorRole, {
    nullable: false
  })
  role!: "VIEWER" | "EDITOR" | "OWNER";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
