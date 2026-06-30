import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateNestedManyWithoutTripDayInput } from "../inputs/TripStopCreateNestedManyWithoutTripDayInput";

@TypeGraphQL.InputType("TripDayCreateWithoutTripInput", {})
export class TripDayCreateWithoutTripInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  dayNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  notes?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TripStopCreateNestedManyWithoutTripDayInput, {
    nullable: true
  })
  stops?: TripStopCreateNestedManyWithoutTripDayInput | undefined;
}
