import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCommentLikeArgs } from "./args/UpdateOneCommentLikeArgs";
import { CommentLike } from "../../../models/CommentLike";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentLike)
export class UpdateOneCommentLikeResolver {
  @TypeGraphQL.Mutation(_returns => CommentLike, {
    nullable: true
  })
  async updateOneCommentLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCommentLikeArgs): Promise<CommentLike | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).commentLike.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
