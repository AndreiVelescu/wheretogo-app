import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFavoriteArgs } from "./args/AggregateFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
import { AggregateFavorite } from "../../outputs/AggregateFavorite";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Favorite)
export class AggregateFavoriteResolver {
  @TypeGraphQL.Query(_returns => AggregateFavorite, {
    nullable: false
  })
  async aggregateFavorite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFavoriteArgs): Promise<AggregateFavorite> {
    return getPrismaFromContext(ctx).favorite.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
