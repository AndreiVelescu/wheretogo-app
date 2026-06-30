import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayCreateOrConnectWithoutStopsInput } from "../inputs/TripDayCreateOrConnectWithoutStopsInput";
import { TripDayCreateWithoutStopsInput } from "../inputs/TripDayCreateWithoutStopsInput";
import { TripDayWhereUniqueInput } from "../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.InputType("TripDayCreateNestedOneWithoutStopsInput", {})
export class TripDayCreateNestedOneWithoutStopsInput {
  @TypeGraphQL.Field(_type => TripDayCreateWithoutStopsInput, {
    nullable: true
  })
  create?: TripDayCreateWithoutStopsInput | undefined;

  @TypeGraphQL.Field(_type => TripDayCreateOrConnectWithoutStopsInput, {
    nullable: true
  })
  connectOrCreate?: TripDayCreateOrConnectWithoutStopsInput | undefined;

  @TypeGraphQL.Field(_type => TripDayWhereUniqueInput, {
    nullable: true
  })
  connect?: TripDayWhereUniqueInput | undefined;
}
