import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnFavoriteArgs } from "./args/CreateManyAndReturnFavoriteArgs";
import { Favorite } from "../../../models/Favorite";
import { CreateManyAndReturnFavorite } from "../../outputs/CreateManyAndReturnFavorite";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Favorite)
export class CreateManyAndReturnFavoriteResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnFavorite], {
    nullable: false
  })
  async createManyAndReturnFavorite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnFavoriteArgs): Promise<CreateManyAndReturnFavorite[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).favorite.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
