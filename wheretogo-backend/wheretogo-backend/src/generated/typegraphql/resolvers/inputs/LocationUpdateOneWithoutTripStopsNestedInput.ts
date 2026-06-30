import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutTripStopsInput } from "../inputs/LocationCreateOrConnectWithoutTripStopsInput";
import { LocationCreateWithoutTripStopsInput } from "../inputs/LocationCreateWithoutTripStopsInput";
import { LocationUpdateToOneWithWhereWithoutTripStopsInput } from "../inputs/LocationUpdateToOneWithWhereWithoutTripStopsInput";
import { LocationUpsertWithoutTripStopsInput } from "../inputs/LocationUpsertWithoutTripStopsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateOneWithoutTripStopsNestedInput", {})
export class LocationUpdateOneWithoutTripStopsNestedInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutTripStopsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutTripStopsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutTripStopsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutTripStopsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutTripStopsInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutTripStopsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  disconnect?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  delete?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateToOneWithWhereWithoutTripStopsInput, {
    nullable: true
  })
  update?: LocationUpdateToOneWithWhereWithoutTripStopsInput | undefined;
}
