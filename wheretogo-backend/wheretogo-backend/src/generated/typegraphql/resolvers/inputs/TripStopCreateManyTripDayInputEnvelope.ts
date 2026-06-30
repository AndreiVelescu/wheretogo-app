import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateManyTripDayInput } from "../inputs/TripStopCreateManyTripDayInput";

@TypeGraphQL.InputType("TripStopCreateManyTripDayInputEnvelope", {})
export class TripStopCreateManyTripDayInputEnvelope {
  @TypeGraphQL.Field(_type => [TripStopCreateManyTripDayInput], {
    nullable: false
  })
  data!: TripStopCreateManyTripDayInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
