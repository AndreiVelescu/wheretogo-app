import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneScheduleLocationInCalendarArgs } from "./args/UpsertOneScheduleLocationInCalendarArgs";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class UpsertOneScheduleLocationInCalendarResolver {
  @TypeGraphQL.Mutation(_returns => ScheduleLocationInCalendar, {
    nullable: false
  })
  async upsertOneScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneScheduleLocationInCalendarArgs): Promise<ScheduleLocationInCalendar> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
