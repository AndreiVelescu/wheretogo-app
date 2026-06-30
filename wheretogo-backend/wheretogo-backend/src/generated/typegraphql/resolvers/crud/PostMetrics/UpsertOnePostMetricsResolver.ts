import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePostMetricsArgs } from "./args/UpsertOnePostMetricsArgs";
import { PostMetrics } from "../../../models/PostMetrics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMetrics)
export class UpsertOnePostMetricsResolver {
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
