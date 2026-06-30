import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCommentLikeArgs } from "./args/AggregateCommentLikeArgs";
import { CommentLike } from "../../../models/CommentLike";
import { AggregateCommentLike } from "../../outputs/AggregateCommentLike";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentLike)
export class AggregateCommentLikeResolver {
  @TypeGraphQL.Query(_returns => AggregateCommentLike, {
    nullable: false
  })
  async aggregateCommentLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCommentLikeArgs): Promise<AggregateCommentLike> {
    return getPrismaFromContext(ctx).commentLike.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
