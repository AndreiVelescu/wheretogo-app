import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopUpdateWithoutTripDayInput } from "../inputs/TripStopUpdateWithoutTripDayInput";
import { TripStopWhereUniqueInput } from "../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.InputType("TripStopUpdateWithWhereUniqueWithoutTripDayInput", {})
export class TripStopUpdateWithWhereUniqueWithoutTripDayInput {
  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: false
  })
  where!: TripStopWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripStopUpdateWithoutTripDayInput, {
    nullable: false
  })
  data!: TripStopUpdateWithoutTripDayInput;
}
