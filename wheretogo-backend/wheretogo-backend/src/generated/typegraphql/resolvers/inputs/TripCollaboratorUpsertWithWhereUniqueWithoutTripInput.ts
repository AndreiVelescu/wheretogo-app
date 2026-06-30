import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCollaboratorCreateWithoutTripInput } from "../inputs/TripCollaboratorCreateWithoutTripInput";
import { TripCollaboratorUpdateWithoutTripInput } from "../inputs/TripCollaboratorUpdateWithoutTripInput";
import { TripCollaboratorWhereUniqueInput } from "../inputs/TripCollaboratorWhereUniqueInput";

@TypeGraphQL.InputType("TripCollaboratorUpsertWithWhereUniqueWithoutTripInput", {})
export class TripCollaboratorUpsertWithWhereUniqueWithoutTripInput {
  @TypeGraphQL.Field(_type => TripCollaboratorWhereUniqueInput, {
    nullable: false
  })
  where!: TripCollaboratorWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCollaboratorUpdateWithoutTripInput, {
    nullable: false
  })
  update!: TripCollaboratorUpdateWithoutTripInput;

  @TypeGraphQL.Field(_type => TripCollaboratorCreateWithoutTripInput, {
    nullable: false
  })
  create!: TripCollaboratorCreateWithoutTripInput;
}
