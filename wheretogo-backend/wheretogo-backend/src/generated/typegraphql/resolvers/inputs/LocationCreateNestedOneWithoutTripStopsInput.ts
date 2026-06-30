import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutTripStopsInput } from "../inputs/LocationCreateOrConnectWithoutTripStopsInput";
import { LocationCreateWithoutTripStopsInput } from "../inputs/LocationCreateWithoutTripStopsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutTripStopsInput", {})
export class LocationCreateNestedOneWithoutTripStopsInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutTripStopsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutTripStopsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutTripStopsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutTripStopsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
