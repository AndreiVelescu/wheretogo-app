import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutCollaboratorsInput } from "../inputs/TripCreateOrConnectWithoutCollaboratorsInput";
import { TripCreateWithoutCollaboratorsInput } from "../inputs/TripCreateWithoutCollaboratorsInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedOneWithoutCollaboratorsInput", {})
export class TripCreateNestedOneWithoutCollaboratorsInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutCollaboratorsInput, {
    nullable: true
  })
  create?: TripCreateWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutCollaboratorsInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;
}
