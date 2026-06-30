import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateWithoutTripDayInput } from "../inputs/TripStopCreateWithoutTripDayInput";
import { TripStopWhereUniqueInput } from "../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.InputType("TripStopCreateOrConnectWithoutTripDayInput", {})
export class TripStopCreateOrConnectWithoutTripDayInput {
  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: false
  })
  where!: TripStopWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripStopCreateWithoutTripDayInput, {
    nullable: false
  })
  create!: TripStopCreateWithoutTripDayInput;
}
