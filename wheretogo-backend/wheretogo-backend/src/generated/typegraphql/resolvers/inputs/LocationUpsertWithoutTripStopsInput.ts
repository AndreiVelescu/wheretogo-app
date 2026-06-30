import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutTripStopsInput } from "../inputs/LocationCreateWithoutTripStopsInput";
import { LocationUpdateWithoutTripStopsInput } from "../inputs/LocationUpdateWithoutTripStopsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutTripStopsInput", {})
export class LocationUpsertWithoutTripStopsInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutTripStopsInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutTripStopsInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutTripStopsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutTripStopsInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
