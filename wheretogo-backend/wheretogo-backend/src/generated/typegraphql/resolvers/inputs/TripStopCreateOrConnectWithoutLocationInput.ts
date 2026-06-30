import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateWithoutLocationInput } from "../inputs/TripStopCreateWithoutLocationInput";
import { TripStopWhereUniqueInput } from "../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.InputType("TripStopCreateOrConnectWithoutLocationInput", {})
export class TripStopCreateOrConnectWithoutLocationInput {
  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: false
  })
  where!: TripStopWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripStopCreateWithoutLocationInput, {
    nullable: false
  })
  create!: TripStopCreateWithoutLocationInput;
}
