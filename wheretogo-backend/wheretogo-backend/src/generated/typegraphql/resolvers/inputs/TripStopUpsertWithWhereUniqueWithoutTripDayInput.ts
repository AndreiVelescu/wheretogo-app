import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateWithoutTripDayInput } from "../inputs/TripStopCreateWithoutTripDayInput";
import { TripStopUpdateWithoutTripDayInput } from "../inputs/TripStopUpdateWithoutTripDayInput";
import { TripStopWhereUniqueInput } from "../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.InputType("TripStopUpsertWithWhereUniqueWithoutTripDayInput", {})
export class TripStopUpsertWithWhereUniqueWithoutTripDayInput {
  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: false
  })
  where!: TripStopWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripStopUpdateWithoutTripDayInput, {
    nullable: false
  })
  update!: TripStopUpdateWithoutTripDayInput;

  @TypeGraphQL.Field(_type => TripStopCreateWithoutTripDayInput, {
    nullable: false
  })
  create!: TripStopCreateWithoutTripDayInput;
}
