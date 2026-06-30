import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarCreateManyLocationInput } from "../inputs/ScheduleLocationInCalendarCreateManyLocationInput";

@TypeGraphQL.InputType("ScheduleLocationInCalendarCreateManyLocationInputEnvelope", {})
export class ScheduleLocationInCalendarCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarCreateManyLocationInput], {
    nullable: false
  })
  data!: ScheduleLocationInCalendarCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
