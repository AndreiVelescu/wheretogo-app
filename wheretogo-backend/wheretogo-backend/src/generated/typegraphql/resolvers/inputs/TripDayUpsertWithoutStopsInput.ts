import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayCreateWithoutStopsInput } from "../inputs/TripDayCreateWithoutStopsInput";
import { TripDayUpdateWithoutStopsInput } from "../inputs/TripDayUpdateWithoutStopsInput";
import { TripDayWhereInput } from "../inputs/TripDayWhereInput";

@TypeGraphQL.InputType("TripDayUpsertWithoutStopsInput", {})
export class TripDayUpsertWithoutStopsInput {
  @TypeGraphQL.Field(_type => TripDayUpdateWithoutStopsInput, {
    nullable: false
  })
  update!: TripDayUpdateWithoutStopsInput;

  @TypeGraphQL.Field(_type => TripDayCreateWithoutStopsInput, {
    nullable: false
  })
  create!: TripDayCreateWithoutStopsInput;

  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  where?: TripDayWhereInput | undefined;
}
