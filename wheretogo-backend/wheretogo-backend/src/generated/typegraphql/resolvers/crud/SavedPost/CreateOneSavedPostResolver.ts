import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSavedPostArgs } from "./args/CreateOneSavedPostArgs";
import { SavedPost } from "../../../models/SavedPost";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SavedPost)
export class CreateOneSavedPostResolver {
  @TypeGraphQL.Mutation(_returns => SavedPost, {
    nullable: false
  })
  async createOneSavedPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSavedPostArgs): Promise<SavedPost> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).savedPost.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
