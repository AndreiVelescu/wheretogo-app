import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateManyUserInput } from "../inputs/ScheduleLocationInCalendarCreateManyUserInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarCreateManyUserInputEnvelope", {})
export class ScheduleLocationInCalendarCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateManyUserInput], {
    nullable: false
  })
  data!: ScheduleLocationInCalendarCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
