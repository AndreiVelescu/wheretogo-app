import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutCollaboratorsInput } from "../inputs/TripCreateOrConnectWithoutCollaboratorsInput";
import { TripCreateWithoutCollaboratorsInput } from "../inputs/TripCreateWithoutCollaboratorsInput";
import { TripUpdateToOneWithWhereWithoutCollaboratorsInput } from "../inputs/TripUpdateToOneWithWhereWithoutCollaboratorsInput";
import { TripUpsertWithoutCollaboratorsInput } from "../inputs/TripUpsertWithoutCollaboratorsInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateOneRequiredWithoutCollaboratorsNestedInput", {})
export class TripUpdateOneRequiredWithoutCollaboratorsNestedInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutCollaboratorsInput, {
    nullable: true
  })
  create?: TripCreateWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutCollaboratorsInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => TripUpsertWithoutCollaboratorsInput, {
    nullable: true
  })
  upsert?: TripUpsertWithoutCollaboratorsInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateToOneWithWhereWithoutCollaboratorsInput, {
    nullable: true
  })
  update?: TripUpdateToOneWithWhereWithoutCollaboratorsInput | undefined;
}
