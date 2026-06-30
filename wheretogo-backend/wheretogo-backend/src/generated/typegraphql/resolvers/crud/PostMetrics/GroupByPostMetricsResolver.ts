import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPostMetricsArgs } from "./args/GroupByPostMetricsArgs";
import { PostMetrics } from "../../../models/PostMetrics";
import { PostMetricsGroupBy } from "../../outputs/PostMetricsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMetrics)
export class GroupByPostMetricsResolver {
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
}
