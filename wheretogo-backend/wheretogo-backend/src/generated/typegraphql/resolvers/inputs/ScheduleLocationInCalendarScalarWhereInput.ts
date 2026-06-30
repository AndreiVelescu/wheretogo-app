import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ScheduleLocationInCalendarScalarWhereInput", {})
export class ScheduleLocationInCalendarScalarWhereInput {
  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarWhereInput], {
    nullable: true
  })
  AND?: ScheduleLocationInCalendarScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarWhereInput], {
    nullable: true
  })
  OR?: ScheduleLocationInCalendarScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarWhereInput], {
    nullable: true
  })
  NOT?: ScheduleLocationInCalendarScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  locationId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  scheduledDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
