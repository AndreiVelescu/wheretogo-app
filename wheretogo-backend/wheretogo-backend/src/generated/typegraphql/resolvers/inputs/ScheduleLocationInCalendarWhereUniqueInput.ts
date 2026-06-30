import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationRelationFilter } from "../inputs/LocationRelationFilter";
import { ScheduleLocationInCalendarWhereInput } from "../inputs/ScheduleLocationInCalendarWhereInput";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ScheduleLocationInCalendarWhereUniqueInput", {})
export class ScheduleLocationInCalendarWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarWhereInput], {
    nullable: true
  })
  AND?: ScheduleLocationInCalendarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarWhereInput], {
    nullable: true
  })
  OR?: ScheduleLocationInCalendarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScheduleLocationInCalendarWhereInput], {
    nullable: true
  })
  NOT?: ScheduleLocationInCalendarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocationRelationFilter, {
    nullable: true
  })
  location?: LocationRelationFilter | undefined;
}
