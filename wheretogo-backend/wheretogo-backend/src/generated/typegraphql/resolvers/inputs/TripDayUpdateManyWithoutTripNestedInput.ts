import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayCreateManyTripInputEnvelope } from "../inputs/TripDayCreateManyTripInputEnvelope";
import { TripDayCreateOrConnectWithoutTripInput } from "../inputs/TripDayCreateOrConnectWithoutTripInput";
import { TripDayCreateWithoutTripInput } from "../inputs/TripDayCreateWithoutTripInput";
import { TripDayScalarWhereInput } from "../inputs/TripDayScalarWhereInput";
import { TripDayUpdateManyWithWhereWithoutTripInput } from "../inputs/TripDayUpdateManyWithWhereWithoutTripInput";
import { TripDayUpdateWithWhereUniqueWithoutTripInput } from "../inputs/TripDayUpdateWithWhereUniqueWithoutTripInput";
import { TripDayUpsertWithWhereUniqueWithoutTripInput } from "../inputs/TripDayUpsertWithWhereUniqueWithoutTripInput";
import { TripDayWhereUniqueInput } from "../inputs/TripDayWhereUniqueInput";

@TypeGraphQL.InputType("TripDayUpdateManyWithoutTripNestedInput", {})
export class TripDayUpdateManyWithoutTripNestedInput {
  @TypeGraphQL.Field(_type => [TripDayCreateWithoutTripInput], {
    nullable: true
  })
  create?: TripDayCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: TripDayCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayUpsertWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  upsert?: TripDayUpsertWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => TripDayCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: TripDayCreateManyTripInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripDayWhereUniqueInput], {
    nullable: true
  })
  set?: TripDayWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TripDayWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayWhereUniqueInput], {
    nullable: true
  })
  delete?: TripDayWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayWhereUniqueInput], {
    nullable: true
  })
  connect?: TripDayWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayUpdateWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  update?: TripDayUpdateWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayUpdateManyWithWhereWithoutTripInput], {
    nullable: true
  })
  updateMany?: TripDayUpdateManyWithWhereWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripDayScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripDayScalarWhereInput[] | undefined;
}
