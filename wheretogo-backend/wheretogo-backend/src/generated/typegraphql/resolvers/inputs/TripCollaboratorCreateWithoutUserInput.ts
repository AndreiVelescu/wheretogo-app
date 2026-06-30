import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateNestedOneWithoutCollaboratorsInput } from "../inputs/TripCreateNestedOneWithoutCollaboratorsInput";
import { TripCollaboratorRole } from "../../enums/TripCollaboratorRole";

@TypeGraphQL.InputType("TripCollaboratorCreateWithoutUserInput", {})
export class TripCollaboratorCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => TripCollaboratorRole, {
    nullable: true
  })
  role?: "VIEWER" | "EDITOR" | "OWNER" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TripCreateNestedOneWithoutCollaboratorsInput, {
    nullable: false
  })
  trip!: TripCreateNestedOneWithoutCollaboratorsInput;
}
