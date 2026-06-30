import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutCollaboratorsInput } from "../inputs/TripCreateWithoutCollaboratorsInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateOrConnectWithoutCollaboratorsInput", {})
export class TripCreateOrConnectWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutCollaboratorsInput, {
    nullable: false
  })
  create!: TripCreateWithoutCollaboratorsInput;
}
