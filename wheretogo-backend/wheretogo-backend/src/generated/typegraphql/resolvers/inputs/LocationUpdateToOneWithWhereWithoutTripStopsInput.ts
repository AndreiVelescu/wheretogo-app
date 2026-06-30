import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutTripStopsInput } from "../inputs/LocationUpdateWithoutTripStopsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpdateToOneWithWhereWithoutTripStopsInput", {})
export class LocationUpdateToOneWithWhereWithoutTripStopsInput {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutTripStopsInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutTripStopsInput;
}
