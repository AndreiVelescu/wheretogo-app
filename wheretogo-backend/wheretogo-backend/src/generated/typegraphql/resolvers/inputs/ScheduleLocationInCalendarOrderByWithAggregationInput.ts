import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ScheduleLocationInCalendarAvgOrderByAggregateInput } from "../inputs/ScheduleLocationInCalendarAvgOrderByAggregateInput";
import { ScheduleLocationInCalendarCountOrderByAggregateInput } from "../inputs/ScheduleLocationInCalendarCountOrderByAggregateInput";
import { ScheduleLocationInCalendarMaxOrderByAggregateInput } from "../inputs/ScheduleLocationInCalendarMaxOrderByAggregateInput";
import { ScheduleLocationInCalendarMinOrderByAggregateInput } from "../inputs/ScheduleLocationInCalendarMinOrderByAggregateInput";
import { ScheduleLocationInCalendarSumOrderByAggregateInput } from "../inputs/ScheduleLocationInCalendarSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ScheduleLocationInCalendarOrderByWithAggregationInput", {})
export class ScheduleLocationInCalendarOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  scheduledDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ScheduleLocationInCalendarCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ScheduleLocationInCalendarAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ScheduleLocationInCalendarMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ScheduleLocationInCalendarMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ScheduleLocationInCalendarSumOrderByAggregateInput | undefined;
}
