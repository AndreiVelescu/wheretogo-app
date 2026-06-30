import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPostCollectionArgs } from "./args/GroupByPostCollectionArgs";
import { PostCollection } from "../../../models/PostCollection";
import { PostCollectionGroupBy } from "../../outputs/PostCollectionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollection)
export class GroupByPostCollectionResolver {
  @TypeGraphQL.Query(_returns => [PostCollectionGroupBy], {
    nullable: false
  })
  async groupByPostCollection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPostCollectionArgs): Promise<PostCollectionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollection.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
