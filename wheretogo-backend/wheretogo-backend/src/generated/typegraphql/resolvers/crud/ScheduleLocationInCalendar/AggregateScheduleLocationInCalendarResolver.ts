import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateScheduleLocationInCalendarArgs } from "./args/AggregateScheduleLocationInCalendarArgs";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { AggregateScheduleLocationInCalendar } from "../../outputs/AggregateScheduleLocationInCalendar";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class AggregateScheduleLocationInCalendarResolver {
  @TypeGraphQL.Query(_returns => AggregateScheduleLocationInCalendar, {
    nullable: false
  })
  async aggregateScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateScheduleLocationInCalendarArgs): Promise<AggregateScheduleLocationInCalendar> {
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
