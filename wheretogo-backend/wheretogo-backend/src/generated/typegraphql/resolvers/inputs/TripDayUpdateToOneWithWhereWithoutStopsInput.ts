import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayUpdateWithoutStopsInput } from "../inputs/TripDayUpdateWithoutStopsInput";
import { TripDayWhereInput } from "../inputs/TripDayWhereInput";

@TypeGraphQL.InputType("TripDayUpdateToOneWithWhereWithoutStopsInput", {})
export class TripDayUpdateToOneWithWhereWithoutStopsInput {
  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  where?: TripDayWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripDayUpdateWithoutStopsInput, {
    nullable: false
  })
  data!: TripDayUpdateWithoutStopsInput;
}
