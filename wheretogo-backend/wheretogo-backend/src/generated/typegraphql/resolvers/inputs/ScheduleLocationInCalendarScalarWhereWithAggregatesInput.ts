import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ScheduleLocationInCalendarScalarWhereWithAggregatesInput", {})
export class ScheduleLocationInCalendarScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ScheduleLocationInCalendarScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ScheduleLocationInCalendarScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ScheduleLocationInCalendarScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  locationId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  scheduledDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
