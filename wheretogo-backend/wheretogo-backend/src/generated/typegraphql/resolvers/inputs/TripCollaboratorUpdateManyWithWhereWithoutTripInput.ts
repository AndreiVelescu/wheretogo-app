import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorScalarWhereInput } from "../inputs/TripCollaboratorScalarWhereInput";
import { TripCollaboratorUpdateManyMutationInput } from "../inputs/TripCollaboratorUpdateManyMutationInput";

@TypeGraphQL.InputType("TripCollaboratorUpdateManyWithWhereWithoutTripInput", {})
export class TripCollaboratorUpdateManyWithWhereWithoutTripInput {
  @TypeGraphQL.Field(_type => TripCollaboratorScalarWhereInput, {
    nullable: false
  })
  where!: TripCollaboratorScalarWhereInput;

  @TypeGraphQL.Field(_type => TripCollaboratorUpdateManyMutationInput, {
    nullable: false
  })
  data!: TripCollaboratorUpdateManyMutationInput;
}
