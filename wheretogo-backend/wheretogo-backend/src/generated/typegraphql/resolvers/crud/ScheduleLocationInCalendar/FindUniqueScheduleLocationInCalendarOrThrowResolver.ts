import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueScheduleLocationInCalendarOrThrowArgs } from "./args/FindUniqueScheduleLocationInCalendarOrThrowArgs";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class FindUniqueScheduleLocationInCalendarOrThrowResolver {
  @TypeGraphQL.Query(_returns => ScheduleLocationInCalendar, {
    nullable: true
  })
  async getScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueScheduleLocationInCalendarOrThrowArgs): Promise<ScheduleLocationInCalendar | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
