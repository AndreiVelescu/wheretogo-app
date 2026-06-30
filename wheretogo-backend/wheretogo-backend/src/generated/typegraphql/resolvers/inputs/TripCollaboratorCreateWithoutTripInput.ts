import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutTripsSharedInput } from "../inputs/UserCreateNestedOneWithoutTripsSharedInput";
import { TripCollaboratorRole } from "../../enums/TripCollaboratorRole";

@TypeGraphQL.InputType("TripCollaboratorCreateWithoutTripInput", {})
export class TripCollaboratorCreateWithoutTripInput {
  @TypeGraphQL.Field(_type => TripCollaboratorRole, {
    nullable: true
  })
  role?: "VIEWER" | "EDITOR" | "OWNER" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTripsSharedInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutTripsSharedInput;
}
