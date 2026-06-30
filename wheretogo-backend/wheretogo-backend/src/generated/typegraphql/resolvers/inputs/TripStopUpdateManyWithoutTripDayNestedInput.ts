import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateManyTripDayInputEnvelope } from "../inputs/TripStopCreateManyTripDayInputEnvelope";
import { TripStopCreateOrConnectWithoutTripDayInput } from "../inputs/TripStopCreateOrConnectWithoutTripDayInput";
import { TripStopCreateWithoutTripDayInput } from "../inputs/TripStopCreateWithoutTripDayInput";
import { TripStopScalarWhereInput } from "../inputs/TripStopScalarWhereInput";
import { TripStopUpdateManyWithWhereWithoutTripDayInput } from "../inputs/TripStopUpdateManyWithWhereWithoutTripDayInput";
import { TripStopUpdateWithWhereUniqueWithoutTripDayInput } from "../inputs/TripStopUpdateWithWhereUniqueWithoutTripDayInput";
import { TripStopUpsertWithWhereUniqueWithoutTripDayInput } from "../inputs/TripStopUpsertWithWhereUniqueWithoutTripDayInput";
import { TripStopWhereUniqueInput } from "../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.InputType("TripStopUpdateManyWithoutTripDayNestedInput", {})
export class TripStopUpdateManyWithoutTripDayNestedInput {
  @TypeGraphQL.Field(_type => [TripStopCreateWithoutTripDayInput], {
    nullable: true
  })
  create?: TripStopCreateWithoutTripDayInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopCreateOrConnectWithoutTripDayInput], {
    nullable: true
  })
  connectOrCreate?: TripStopCreateOrConnectWithoutTripDayInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopUpsertWithWhereUniqueWithoutTripDayInput], {
    nullable: true
  })
  upsert?: TripStopUpsertWithWhereUniqueWithoutTripDayInput[] | undefined;

  @TypeGraphQL.Field(_type => TripStopCreateManyTripDayInputEnvelope, {
    nullable: true
  })
  createMany?: TripStopCreateManyTripDayInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripStopWhereUniqueInput], {
    nullable: true
  })
  set?: TripStopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TripStopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopWhereUniqueInput], {
    nullable: true
  })
  delete?: TripStopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopWhereUniqueInput], {
    nullable: true
  })
  connect?: TripStopWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopUpdateWithWhereUniqueWithoutTripDayInput], {
    nullable: true
  })
  update?: TripStopUpdateWithWhereUniqueWithoutTripDayInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopUpdateManyWithWhereWithoutTripDayInput], {
    nullable: true
  })
  updateMany?: TripStopUpdateManyWithWhereWithoutTripDayInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripStopScalarWhereInput[] | undefined;
}
