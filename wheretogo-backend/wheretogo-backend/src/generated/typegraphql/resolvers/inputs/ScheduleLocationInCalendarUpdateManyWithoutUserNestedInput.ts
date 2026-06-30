import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateManyUserInputEnvelope } from "../inputs/ScheduleLocationInCalendarCreateManyUserInputEnvelope";
import { ScheduleLocationInCalendarCreateOrConnectWithoutUserInput } from "../inputs/ScheduleLocationInCalendarCreateOrConnectWithoutUserInput";
import { ScheduleLocationInCalendarCreateWithoutUserInput } from "../inputs/ScheduleLocationInCalendarCreateWithoutUserInput";
import { ScheduleLocationInCalendarScalarWhereInput } from "../inputs/ScheduleLocationInCalendarScalarWhereInput";
import { ScheduleLocationInCalendarUpdateManyWithWhereWithoutUserInput } from "../inputs/ScheduleLocationInCalendarUpdateManyWithWhereWithoutUserInput";
import { ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutUserInput";
import { ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutUserInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarUpdateManyWithoutUserNestedInput", {})
export class ScheduleLocationInCalendarUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateWithoutUserInput], {
    nullable: true
  })
  create?: ScheduleLocationInCalendarCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ScheduleLocationInCalendarCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ScheduleLocationInCalendarUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ScheduleLocationInCalendarCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ScheduleLocationInCalendarUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ScheduleLocationInCalendarUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ScheduleLocationInCalendarScalarWhereInput[] | undefined;
}
