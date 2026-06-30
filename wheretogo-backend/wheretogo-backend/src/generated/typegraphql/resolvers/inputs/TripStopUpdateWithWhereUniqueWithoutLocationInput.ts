import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopUpdateWithoutLocationInput } from "../inputs/TripStopUpdateWithoutLocationInput";
import { TripStopWhereUniqueInput } from "../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.InputType("TripStopUpdateWithWhereUniqueWithoutLocationInput", {})
export class TripStopUpdateWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: false
  })
  where!: TripStopWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripStopUpdateWithoutLocationInput, {
    nullable: false
  })
  data!: TripStopUpdateWithoutLocationInput;
}
