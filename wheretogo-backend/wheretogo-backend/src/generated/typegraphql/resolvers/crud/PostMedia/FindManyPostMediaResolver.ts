import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPostMediaArgs } from "./args/FindManyPostMediaArgs";
import { PostMedia } from "../../../models/PostMedia";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMedia)
export class FindManyPostMediaResolver {
  @TypeGraphQL.Query(_returns => [PostMedia], {
    nullable: false
  })
  async postMedias(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPostMediaArgs): Promise<PostMedia[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMedia.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
