import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleLocationInCalendarOrderByWithAggregationInput } from "../../../inputs/ScheduleLocationInCalendarOrderByWithAggregationInput";
import { ScheduleLocationInCalendarScalarWhereWithAggregatesInput } from "../../../inputs/ScheduleLocationInCalendarScalarWhereWithAggregatesInput";
import { ScheduleLocationInCalendarWhereInput } from "../../../inputs/ScheduleLocationInCalendarWhereInput";
import { ScheduleLocationInCalendarScalarFieldEnum } from "../../../../enums/ScheduleLocationInCalendarScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByScheduleLocationInCalendarArgs {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereInput, {
    nullable: true
  })
  where?: ScheduleLocationInCalendarWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ScheduleLocationInCalendarOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "locationId" | "scheduledDate" | "createdAt">;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ScheduleLocationInCalendarScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
