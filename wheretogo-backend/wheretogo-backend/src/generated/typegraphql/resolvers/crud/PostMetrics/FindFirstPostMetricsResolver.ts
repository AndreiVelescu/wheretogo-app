import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPostMetricsArgs } from "./args/FindFirstPostMetricsArgs";
import { PostMetrics } from "../../../models/PostMetrics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMetrics)
export class FindFirstPostMetricsResolver {
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
}
