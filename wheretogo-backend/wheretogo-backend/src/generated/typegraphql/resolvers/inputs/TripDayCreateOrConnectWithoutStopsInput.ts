import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayCreateWithoutStopsInput } from "../inputs/TripDayCreateWithoutStopsInput";
import { TripDayWhereUniqueInput } from "../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.InputType("TripDayCreateOrConnectWithoutStopsInput", {})
export class TripDayCreateOrConnectWithoutStopsInput {
  @TypeGraphQL.Field(_type => TripDayWhereUniqueInput, {
    nullable: false
  })
  where!: TripDayWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripDayCreateWithoutStopsInput, {
    nullable: false
  })
  create!: TripDayCreateWithoutStopsInput;
}
