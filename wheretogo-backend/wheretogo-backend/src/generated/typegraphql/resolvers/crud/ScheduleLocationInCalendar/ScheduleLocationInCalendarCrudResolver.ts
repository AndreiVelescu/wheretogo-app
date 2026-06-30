import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateScheduleLocationInCalendarArgs } from "./args/AggregateScheduleLocationInCalendarArgs";
import { CreateManyAndReturnScheduleLocationInCalendarArgs } from "./args/CreateManyAndReturnScheduleLocationInCalendarArgs";
import { CreateManyScheduleLocationInCalendarArgs } from "./args/CreateManyScheduleLocationInCalendarArgs";
import { CreateOneScheduleLocationInCalendarArgs } from "./args/CreateOneScheduleLocationInCalendarArgs";
import { DeleteManyScheduleLocationInCalendarArgs } from "./args/DeleteManyScheduleLocationInCalendarArgs";
import { DeleteOneScheduleLocationInCalendarArgs } from "./args/DeleteOneScheduleLocationInCalendarArgs";
import { FindFirstScheduleLocationInCalendarArgs } from "./args/FindFirstScheduleLocationInCalendarArgs";
import { FindFirstScheduleLocationInCalendarOrThrowArgs } from "./args/FindFirstScheduleLocationInCalendarOrThrowArgs";
import { FindManyScheduleLocationInCalendarArgs } from "./args/FindManyScheduleLocationInCalendarArgs";
import { FindUniqueScheduleLocationInCalendarArgs } from "./args/FindUniqueScheduleLocationInCalendarArgs";
import { FindUniqueScheduleLocationInCalendarOrThrowArgs } from "./args/FindUniqueScheduleLocationInCalendarOrThrowArgs";
import { GroupByScheduleLocationInCalendarArgs } from "./args/GroupByScheduleLocationInCalendarArgs";
import { UpdateManyScheduleLocationInCalendarArgs } from "./args/UpdateManyScheduleLocationInCalendarArgs";
import { UpdateOneScheduleLocationInCalendarArgs } from "./args/UpdateOneScheduleLocationInCalendarArgs";
import { UpsertOneScheduleLocationInCalendarArgs } from "./args/UpsertOneScheduleLocationInCalendarArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateScheduleLocationInCalendar } from "../../outputs/AggregateScheduleLocationInCalendar";
import { CreateManyAndReturnScheduleLocationInCalendar } from "../../outputs/CreateManyAndReturnScheduleLocationInCalendar";
import { ScheduleLocationInCalendarGroupBy } from "../../outputs/ScheduleLocationInCalendarGroupBy";

@TypeGraphQL.Resolver(_of => ScheduleLocationInCalendar)
export class ScheduleLocationInCalendarCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateScheduleLocationInCalendar, {
    nullable: false
  })
  async aggregateScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateScheduleLocationInCalendarArgs): Promise<AggregateScheduleLocationInCalendar> {
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyScheduleLocationInCalendarArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyScheduleLocationInCalendarArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ScheduleLocationInCalendar, {
    nullable: true
  })
  async deleteOneScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneScheduleLocationInCalendarArgs): Promise<ScheduleLocationInCalendar | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ScheduleLocationInCalendar, {
    nullable: true
  })
  async findFirstScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstScheduleLocationInCalendarArgs): Promise<ScheduleLocationInCalendar | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => ScheduleLocationInCalendar, {
    nullable: true
  })
  async scheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueScheduleLocationInCalendarArgs): Promise<ScheduleLocationInCalendar | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyScheduleLocationInCalendar(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyScheduleLocationInCalendarArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).scheduleLocationInCalendar.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
