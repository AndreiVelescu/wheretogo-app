import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateManyUserInputEnvelope } from "../inputs/ScheduleLocationInCalendarCreateManyUserInputEnvelope";
import { ScheduleLocationInCalendarCreateOrConnectWithoutUserInput } from "../inputs/ScheduleLocationInCalendarCreateOrConnectWithoutUserInput";
import { ScheduleLocationInCalendarCreateWithoutUserInput } from "../inputs/ScheduleLocationInCalendarCreateWithoutUserInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarCreateNestedManyWithoutUserInput", {})
export class ScheduleLocationInCalendarCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateWithoutUserInput], {
    nullable: true
  })
  create?: ScheduleLocationInCalendarCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ScheduleLocationInCalendarCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ScheduleLocationInCalendarCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarWhereUniqueInput], {
    nullable: true
  })
  connect?: ScheduleLocationInCalendarWhereUniqueInput[] | undefined;
}
