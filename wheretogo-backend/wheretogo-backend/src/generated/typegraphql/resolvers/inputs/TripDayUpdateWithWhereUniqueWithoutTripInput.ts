import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayUpdateWithoutTripInput } from "../inputs/TripDayUpdateWithoutTripInput";
import { TripDayWhereUniqueInput } from "../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.InputType("TripDayUpdateWithWhereUniqueWithoutTripInput", {})
export class TripDayUpdateWithWhereUniqueWithoutTripInput {
  @TypeGraphQL.Field(_type => TripDayWhereUniqueInput, {
    nullable: false
  })
  where!: TripDayWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripDayUpdateWithoutTripInput, {
    nullable: false
  })
  data!: TripDayUpdateWithoutTripInput;
}
