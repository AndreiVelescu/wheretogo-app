import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutCollaboratorsInput } from "../inputs/TripCreateWithoutCollaboratorsInput";
import { TripUpdateWithoutCollaboratorsInput } from "../inputs/TripUpdateWithoutCollaboratorsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpsertWithoutCollaboratorsInput", {})
export class TripUpsertWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => TripUpdateWithoutCollaboratorsInput, {
    nullable: false
  })
  update!: TripUpdateWithoutCollaboratorsInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutCollaboratorsInput, {
    nullable: false
  })
  create!: TripCreateWithoutCollaboratorsInput;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;
}
