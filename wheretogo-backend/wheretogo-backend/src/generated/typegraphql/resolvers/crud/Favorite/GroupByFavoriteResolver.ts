import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByFavoriteArgs } from "./args/GroupByFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
import { FavoriteGroupBy } from "../../outputs/FavoriteGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Favorite)
export class GroupByFavoriteResolver {
  @TypeGraphQL.Query(_returns => [FavoriteGroupBy], {
    nullable: false
  })
  async groupByFavorite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFavoriteArgs): Promise<FavoriteGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).favorite.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
