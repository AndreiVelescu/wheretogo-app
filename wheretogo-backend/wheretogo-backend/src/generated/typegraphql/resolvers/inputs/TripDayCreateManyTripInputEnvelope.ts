import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayCreateManyTripInput } from "../inputs/TripDayCreateManyTripInput";

@TypeGraphQL.InputType("TripDayCreateManyTripInputEnvelope", {})
export class TripDayCreateManyTripInputEnvelope {
  @TypeGraphQL.Field(_type => [TripDayCreateManyTripInput], {
    nullable: false
  })
  data!: TripDayCreateManyTripInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
