import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostMetricsArgs } from "./args/AggregatePostMetricsArgs";
import { PostMetrics } from "../../../models/PostMetrics";
import { AggregatePostMetrics } from "../../outputs/AggregatePostMetrics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMetrics)
export class AggregatePostMetricsResolver {
  @TypeGraphQL.Query(_returns => AggregatePostMetrics, {
    nullable: false
  })
  async aggregatePostMetrics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostMetricsArgs): Promise<AggregatePostMetrics> {
    return getPrismaFromContext(ctx).postMetrics.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
