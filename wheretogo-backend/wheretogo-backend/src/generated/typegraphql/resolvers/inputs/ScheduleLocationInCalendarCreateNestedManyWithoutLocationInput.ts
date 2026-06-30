import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateManyLocationInputEnvelope } from "../inputs/ScheduleLocationInCalendarCreateManyLocationInputEnvelope";
import { ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput";
import { ScheduleLocationInCalendarCreateWithoutLocationInput } from "../inputs/ScheduleLocationInCalendarCreateWithoutLocationInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../inputs/ScheduleLocationInCalendarWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarCreateNestedManyWithoutLocationInput", {})
export class ScheduleLocationInCalendarCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateWithoutLocationInput], {
    nullable: true
  })
  create?: ScheduleLocationInCalendarCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: ScheduleLocationInCalendarCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: ScheduleLocationInCalendarCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarWhereUniqueInput], {
    nullable: true
  })
  connect?: ScheduleLocationInCalendarWhereUniqueInput[] | undefined;
}
