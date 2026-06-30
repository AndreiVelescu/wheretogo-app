import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSavedPostArgs } from "./args/AggregateSavedPostArgs";
import { SavedPost } from "../../../models/SavedPost";
import { AggregateSavedPost } from "../../outputs/AggregateSavedPost";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SavedPost)
export class AggregateSavedPostResolver {
  @TypeGraphQL.Query(_returns => AggregateSavedPost, {
    nullable: false
  })
  async aggregateSavedPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSavedPostArgs): Promise<AggregateSavedPost> {
    return getPrismaFromContext(ctx).savedPost.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
