import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyScheduleLocationInCalendarArgs } from "./args/FindManyScheduleLocationInCalendarArgs";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class FindManyScheduleLocationInCalendarResolver {
  @TypeGraphQL.Query(_returns => [ScheduleLocationInCalendar], {
    nullable: false
  })
  async scheduleLocationInCalendars(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyScheduleLocationInCalendarArgs): Promise<ScheduleLocationInCalendar[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
