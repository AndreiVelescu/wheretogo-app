import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCommentLikeArgs } from "./args/GroupByCommentLikeArgs";
import { CommentLike } from "../../../models/CommentLike";
import { CommentLikeGroupBy } from "../../outputs/CommentLikeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentLike)
export class GroupByCommentLikeResolver {
  @TypeGraphQL.Query(_returns => [CommentLikeGroupBy], {
    nullable: false
  })
  async groupByCommentLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCommentLikeArgs): Promise<CommentLikeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).commentLike.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
