import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripStopCreateManyLocationInputEnvelope } from "../inputs/TripStopCreateManyLocationInputEnvelope";
import { TripStopCreateOrConnectWithoutLocationInput } from "../inputs/TripStopCreateOrConnectWithoutLocationInput";
import { TripStopCreateWithoutLocationInput } from "../inputs/TripStopCreateWithoutLocationInput";
import { TripStopScalarWhereInput } from "../inputs/TripStopScalarWhereInput";
import { TripStopUpdateManyWithWhereWithoutLocationInput } from "../inputs/TripStopUpdateManyWithWhereWithoutLocationInput";
import { TripStopUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/TripStopUpdateWithWhereUniqueWithoutLocationInput";
import { TripStopUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/TripStopUpsertWithWhereUniqueWithoutLocationInput";
import { TripStopWhereUniqueInput } from "../inputs/TripStopWhereUniqueInput";

@TypeGraphQL.InputType("TripStopUpdateManyWithoutLocationNestedInput", {})
export class TripStopUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [TripStopCreateWithoutLocationInput], {
    nullable: true
  })
  create?: TripStopCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: TripStopCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: TripStopUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripStopCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: TripStopCreateManyLocationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TripStopUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: TripStopUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: TripStopUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripStopScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripStopScalarWhereInput[] | undefined;
}
