import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorUpdateWithoutTripInput } from "../inputs/TripCollaboratorUpdateWithoutTripInput";
import { TripCollaboratorWhereUniqueInput } from "../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("TripCollaboratorUpdateWithWhereUniqueWithoutTripInput", {})
export class TripCollaboratorUpdateWithWhereUniqueWithoutTripInput {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: TripCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCollaboratorUpdateWithoutTripInput, {
    nullable: false
  })
  data!: TripCollaboratorUpdateWithoutTripInput;
}
