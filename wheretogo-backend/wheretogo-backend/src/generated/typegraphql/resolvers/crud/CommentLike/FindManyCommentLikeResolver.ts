import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyCommentLikeArgs } from "./args/FindManyCommentLikeArgs";
import { CommentLike } from "../../../models/CommentLike";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentLike)
export class FindManyCommentLikeResolver {
  @TypeGraphQL.Query(_returns => [CommentLike], {
    nullable: false
  })
  async commentLikes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCommentLikeArgs): Promise<CommentLike[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).commentLike.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
