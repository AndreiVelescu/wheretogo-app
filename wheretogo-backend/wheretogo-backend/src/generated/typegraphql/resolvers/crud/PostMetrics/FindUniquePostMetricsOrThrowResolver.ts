import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePostMetricsOrThrowArgs } from "./args/FindUniquePostMetricsOrThrowArgs";
import { PostMetrics } from "../../../models/PostMetrics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMetrics)
export class FindUniquePostMetricsOrThrowResolver {
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
}
