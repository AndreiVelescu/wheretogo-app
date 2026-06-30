import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopScalarWhereInput } from "../inputs/TripStopScalarWhereInput";
import { TripStopUpdateManyMutationInput } from "../inputs/TripStopUpdateManyMutationInput";

@TypeGraphQL.InputType("TripStopUpdateManyWithWhereWithoutLocationInput", {})
export class TripStopUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => TripStopScalarWhereInput, {
    nullable: false
  })
  where!: TripStopScalarWhereInput;

  @TypeGraphQL.Field(_type => TripStopUpdateManyMutationInput, {
    nullable: false
  })
  data!: TripStopUpdateManyMutationInput;
}
