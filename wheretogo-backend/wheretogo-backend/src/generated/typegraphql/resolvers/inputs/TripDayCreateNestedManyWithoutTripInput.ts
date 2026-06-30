import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayCreateManyTripInputEnvelope } from "../inputs/TripDayCreateManyTripInputEnvelope";
import { TripDayCreateOrConnectWithoutTripInput } from "../inputs/TripDayCreateOrConnectWithoutTripInput";
import { TripDayCreateWithoutTripInput } from "../inputs/TripDayCreateWithoutTripInput";
import { TripDayWhereUniqueInput } from "../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.InputType("TripDayCreateNestedManyWithoutTripInput", {})
export class TripDayCreateNestedManyWithoutTripInput {
  @TypeGraphQL.Field(_type => [TripDayCreateWithoutTripInput], {
    nullable: true
  })
  create?: TripDayCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: TripDayCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => TripDayCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: TripDayCreateManyTripInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripDayWhereUniqueInput], {
    nullable: true
  })
  connect?: TripDayWhereUniqueInput[] | undefined;
}
