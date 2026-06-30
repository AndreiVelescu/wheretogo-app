import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostLikeArgs } from "./args/AggregatePostLikeArgs";
import { PostLike } from "../../../models/PostLike";
import { AggregatePostLike } from "../../outputs/AggregatePostLike";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostLike)
export class AggregatePostLikeResolver {
  @TypeGraphQL.Query(_returns => AggregatePostLike, {
    nullable: false
  })
  async aggregatePostLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostLikeArgs): Promise<AggregatePostLike> {
    return getPrismaFromContext(ctx).postLike.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
