import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayCreateWithoutTripInput } from "../inputs/TripDayCreateWithoutTripInput";
import { TripDayWhereUniqueInput } from "../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.InputType("TripDayCreateOrConnectWithoutTripInput", {})
export class TripDayCreateOrConnectWithoutTripInput {
  @TypeGraphQL.Field(_type => TripDayWhereUniqueInput, {
    nullable: false
  })
  where!: TripDayWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripDayCreateWithoutTripInput, {
    nullable: false
  })
  create!: TripDayCreateWithoutTripInput;
}
