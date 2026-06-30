import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutCollaboratorsInput } from "../inputs/TripUpdateWithoutCollaboratorsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpdateToOneWithWhereWithoutCollaboratorsInput", {})
export class TripUpdateToOneWithWhereWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateWithoutCollaboratorsInput, {
    nullable: false
  })
  data!: TripUpdateWithoutCollaboratorsInput;
}
