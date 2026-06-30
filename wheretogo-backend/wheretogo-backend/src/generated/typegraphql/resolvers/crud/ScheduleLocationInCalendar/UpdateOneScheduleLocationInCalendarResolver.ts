import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneScheduleLocationInCalendarArgs } from "./args/UpdateOneScheduleLocationInCalendarArgs";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class UpdateOneScheduleLocationInCalendarResolver {
  @TypeGraphQL.Mutation(_returns => ScheduleLocationInCalendar, {
    nullable: true
  })
  async updateOneScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneScheduleLocationInCalendarArgs): Promise<ScheduleLocationInCalendar | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
