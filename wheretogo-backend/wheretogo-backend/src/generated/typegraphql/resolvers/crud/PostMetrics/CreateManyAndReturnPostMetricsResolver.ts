import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPostMetricsArgs } from "./args/CreateManyAndReturnPostMetricsArgs";
import { PostMetrics } from "../../../models/PostMetrics";
import { CreateManyAndReturnPostMetrics } from "../../outputs/CreateManyAndReturnPostMetrics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMetrics)
export class CreateManyAndReturnPostMetricsResolver {
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
}
