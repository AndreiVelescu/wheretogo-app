import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPostCollectionItemArgs } from "./args/GroupByPostCollectionItemArgs";
import { PostCollectionItem } from "../../../models/PostCollectionItem";
import { PostCollectionItemGroupBy } from "../../outputs/PostCollectionItemGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollectionItem)
export class GroupByPostCollectionItemResolver {
  @TypeGraphQL.Query(_returns => [PostCollectionItemGroupBy], {
    nullable: false
  })
  async groupByPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPostCollectionItemArgs): Promise<PostCollectionItemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
