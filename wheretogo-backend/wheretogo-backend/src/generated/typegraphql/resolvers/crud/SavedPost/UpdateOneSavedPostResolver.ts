import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSavedPostArgs } from "./args/UpdateOneSavedPostArgs";
import { SavedPost } from "../../../models/SavedPost";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SavedPost)
export class UpdateOneSavedPostResolver {
  @TypeGraphQL.Mutation(_returns => SavedPost, {
    nullable: true
  })
  async updateOneSavedPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSavedPostArgs): Promise<SavedPost | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).savedPost.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
