import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateManyLocationInputEnvelope } from "../inputs/ScheduleLocationInCalendarCreateManyLocationInputEnvelope";
import { ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput";
import { ScheduleLocationInCalendarCreateWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarCreateWithoutLocationInput";
import { ScheduleLocationInCalendarScalarWhereInput } from "../inputs/ScheduleLocationInCalendarScalarWhereInput";
import { ScheduleLocationInCalendarUpdateManyWithWhereWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarUpdateManyWithWhereWithoutLocationInput";
import { ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutLocationInput";
import { ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutLocationInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarUpdateManyWithoutLocationNestedInput", {})
export class ScheduleLocationInCalendarUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateWithoutLocationInput], {
    nullable: true
  })
  create?: ScheduleLocationInCalendarCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: ScheduleLocationInCalendarCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarWhereUniqueInput], {
    nullable: true
  })
  set?: ScheduleLocationInCalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ScheduleLocationInCalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarWhereUniqueInput], {
    nullable: true
  })
  delete?: ScheduleLocationInCalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarWhereUniqueInput], {
    nullable: true
  })
  connect?: ScheduleLocationInCalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: ScheduleLocationInCalendarUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ScheduleLocationInCalendarScalarWhereInput[] | undefined;
}
