import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostMetricsArgs } from "./args/AggregatePostMetricsArgs";
import { CreateManyAndReturnPostMetricsArgs } from "./args/CreateManyAndReturnPostMetricsArgs";
import { CreateManyPostMetricsArgs } from "./args/CreateManyPostMetricsArgs";
import { CreateOnePostMetricsArgs } from "./args/CreateOnePostMetricsArgs";
import { DeleteManyPostMetricsArgs } from "./args/DeleteManyPostMetricsArgs";
import { DeleteOnePostMetricsArgs } from "./args/DeleteOnePostMetricsArgs";
import { FindFirstPostMetricsArgs } from "./args/FindFirstPostMetricsArgs";
import { FindFirstPostMetricsOrThrowArgs } from "./args/FindFirstPostMetricsOrThrowArgs";
import { FindManyPostMetricsArgs } from "./args/FindManyPostMetricsArgs";
import { FindUniquePostMetricsArgs } from "./args/FindUniquePostMetricsArgs";
import { FindUniquePostMetricsOrThrowArgs } from "./args/FindUniquePostMetricsOrThrowArgs";
import { GroupByPostMetricsArgs } from "./args/GroupByPostMetricsArgs";
import { UpdateManyPostMetricsArgs } from "./args/UpdateManyPostMetricsArgs";
import { UpdateOnePostMetricsArgs } from "./args/UpdateOnePostMetricsArgs";
import { UpsertOnePostMetricsArgs } from "./args/UpsertOnePostMetricsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PostMetrics } from "../../../models/PostMetrics";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePostMetrics } from "../../outputs/AggregatePostMetrics";
import { CreateManyAndReturnPostMetrics } from "../../outputs/CreateManyAndReturnPostMetrics";
import { PostMetricsGroupBy } from "../../outputs/PostMetricsGroupBy";

@TypeGraphQL.Resolver(_of => PostMetrics)
export class PostMetricsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePostMetrics, {
    nullable: false
  })
  async aggregatePostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostMetricsArgs): Promise<AggregatePostMetrics> {
    return getPrismaFromContext(ctx).postMetrics.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPostMetricsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPostMetrics], {
    nullable: false
  })
  async createManyAndReturnPostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPostMetricsArgs): Promise<CreateManyAndReturnPostMetrics[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PostMetrics, {
    nullable: false
  })
  async createOnePostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePostMetricsArgs): Promise<PostMetrics> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPostMetricsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PostMetrics, {
    nullable: true
  })
  async deleteOnePostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePostMetricsArgs): Promise<PostMetrics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PostMetrics, {
    nullable: true
  })
  async findFirstPostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPostMetricsArgs): Promise<PostMetrics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PostMetrics, {
    nullable: true
  })
  async findFirstPostMetricsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPostMetricsOrThrowArgs): Promise<PostMetrics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PostMetrics], {
    nullable: false
  })
  async findManyPostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPostMetricsArgs): Promise<PostMetrics[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PostMetrics, {
    nullable: true
  })
  async findUniquePostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePostMetricsArgs): Promise<PostMetrics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PostMetrics, {
    nullable: true
  })
  async findUniquePostMetricsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePostMetricsOrThrowArgs): Promise<PostMetrics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PostMetricsGroupBy], {
    nullable: false
  })
  async groupByPostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPostMetricsArgs): Promise<PostMetricsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPostMetricsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PostMetrics, {
    nullable: true
  })
  async updateOnePostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePostMetricsArgs): Promise<PostMetrics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PostMetrics, {
    nullable: false
  })
  async upsertOnePostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePostMetricsArgs): Promise<PostMetrics> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMetrics.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
