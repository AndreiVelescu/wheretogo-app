import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScheduleLocationInCalendarOrderByWithRelationInput } from "../../../inputs/ScheduleLocationInCalendarOrderByWithRelationInput";
import { ScheduleLocationInCalendarWhereInput } from "../../../inputs/ScheduleLocationInCalendarWhereInput";
import { ScheduleLocationInCalendarWhereUniqueInput } from "../../../inputs/ScheduleLocationInCalendarWhereUniqueInput";
import { ScheduleLocationInCalendarScalarFieldEnum } from "../../../../enums/ScheduleLocationInCalendarScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LocationScheduleLocationInCalendarsArgs {
  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereInput, {
    nullable: true
  })
  where?: ScheduleLocationInCalendarWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ScheduleLocationInCalendarOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarWhereUniqueInput, {
    nullable: true
  })
  cursor?: ScheduleLocationInCalendarWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "locationId" | "scheduledDate" | "createdAt"> | undefined;
}
