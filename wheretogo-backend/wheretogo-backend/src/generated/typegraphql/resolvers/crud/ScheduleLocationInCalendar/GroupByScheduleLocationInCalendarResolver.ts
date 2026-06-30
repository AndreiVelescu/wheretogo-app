import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByScheduleLocationInCalendarArgs } from "./args/GroupByScheduleLocationInCalendarArgs";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { ScheduleLocationInCalendarGroupBy } from "../../outputs/ScheduleLocationInCalendarGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class GroupByScheduleLocationInCalendarResolver {
  @TypeGraphQL.Query(_returns => [ScheduleLocationInCalendarGroupBy], {
    nullable: false
  })
  async groupByScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByScheduleLocationInCalendarArgs): Promise<ScheduleLocationInCalendarGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
