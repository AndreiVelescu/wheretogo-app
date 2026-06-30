import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySavedPostArgs } from "./args/GroupBySavedPostArgs";
import { SavedPost } from "../../../models/SavedPost";
import { SavedPostGroupBy } from "../../outputs/SavedPostGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SavedPost)
export class GroupBySavedPostResolver {
  @TypeGraphQL.Query(_returns => [SavedPostGroupBy], {
    nullable: false
  })
  async groupBySavedPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySavedPostArgs): Promise<SavedPostGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).savedPost.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
