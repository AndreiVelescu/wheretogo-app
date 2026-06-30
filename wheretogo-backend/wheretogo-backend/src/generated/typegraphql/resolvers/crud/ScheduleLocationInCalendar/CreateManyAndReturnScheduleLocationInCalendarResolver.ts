import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnScheduleLocationInCalendarArgs } from "./args/CreateManyAndReturnScheduleLocationInCalendarArgs";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { CreateManyAndReturnScheduleLocationInCalendar } from "../../outputs/CreateManyAndReturnScheduleLocationInCalendar";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class CreateManyAndReturnScheduleLocationInCalendarResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnScheduleLocationInCalendar], {
    nullable: false
  })
  async createManyAndReturnScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnScheduleLocationInCalendarArgs): Promise<CreateManyAndReturnScheduleLocationInCalendar[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
