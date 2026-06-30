import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Trip } from "../../models/Trip";
import { User } from "../../models/User";
import { TripCollaboratorRole } from "../../enums/TripCollaboratorRole";

@TypeGraphQL.ObjectType("CreateManyAndReturnTripCollaborator", {
  simpleResolvers: true
})
export class CreateManyAndReturnTripCollaborator {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tripId!: number;

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

  @TypeGraphQL.Field(_type => Trip, {
    nullable: false
  })
  trip!: Trip;

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  user!: User;
}
