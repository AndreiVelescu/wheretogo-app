import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSavedPostOrThrowArgs } from "./args/FindFirstSavedPostOrThrowArgs";
import { SavedPost } from "../../../models/SavedPost";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SavedPost)
export class FindFirstSavedPostOrThrowResolver {
  @TypeGraphQL.Query(_returns => SavedPost, {
    nullable: true
  })
  async findFirstSavedPostOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSavedPostOrThrowArgs): Promise<SavedPost | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).savedPost.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
