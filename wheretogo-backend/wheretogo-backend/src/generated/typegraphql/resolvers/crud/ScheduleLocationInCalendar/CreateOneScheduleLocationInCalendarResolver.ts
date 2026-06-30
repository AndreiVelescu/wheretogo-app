import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneScheduleLocationInCalendarArgs } from "./args/CreateOneScheduleLocationInCalendarArgs";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class CreateOneScheduleLocationInCalendarResolver {
  @TypeGraphQL.Mutation(_returns => ScheduleLocationInCalendar, {
    nullable: false
  })
  async createOneScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneScheduleLocationInCalendarArgs): Promise<ScheduleLocationInCalendar> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
