import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPostMediaArgs } from "./args/GroupByPostMediaArgs";
import { PostMedia } from "../../../models/PostMedia";
import { PostMediaGroupBy } from "../../outputs/PostMediaGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMedia)
export class GroupByPostMediaResolver {
  @TypeGraphQL.Query(_returns => [PostMediaGroupBy], {
    nullable: false
  })
  async groupByPostMedia(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPostMediaArgs): Promise<PostMediaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMedia.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
