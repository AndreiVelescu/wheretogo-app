import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateManyTripDayInputEnvelope } from "../inputs/TripStopCreateManyTripDayInputEnvelope";
import { TripStopCreateOrConnectWithoutTripDayInput } from "../inputs/TripStopCreateOrConnectWithoutTripDayInput";
import { TripStopCreateWithoutTripDayInput } from "../inputs/TripStopCreateWithoutTripDayInput";
import { TripStopWhereUniqueInput } from "../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.InputType("TripStopCreateNestedManyWithoutTripDayInput", {})
export class TripStopCreateNestedManyWithoutTripDayInput {
  @TypeGraphQL.Field(_type => [TripStopCreateWithoutTripDayInput], {
    nullable: true
  })
  create?: TripStopCreateWithoutTripDayInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopCreateOrConnectWithoutTripDayInput], {
    nullable: true
  })
  connectOrCreate?: TripStopCreateOrConnectWithoutTripDayInput[] | undefined;

  @TypeGraphQL.Field(_type => TripStopCreateManyTripDayInputEnvelope, {
    nullable: true
  })
  createMany?: TripStopCreateManyTripDayInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripStopWhereUniqueInput], {
    nullable: true
  })
  connect?: TripStopWhereUniqueInput[] | undefined;
}
