import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstScheduleLocationInCalendarOrThrowArgs } from "./args/FindFirstScheduleLocationInCalendarOrThrowArgs";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class FindFirstScheduleLocationInCalendarOrThrowResolver {
  @TypeGraphQL.Query(_returns => ScheduleLocationInCalendar, {
    nullable: true
  })
  async findFirstScheduleLocationInCalendarOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstScheduleLocationInCalendarOrThrowArgs): Promise<ScheduleLocationInCalendar | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
