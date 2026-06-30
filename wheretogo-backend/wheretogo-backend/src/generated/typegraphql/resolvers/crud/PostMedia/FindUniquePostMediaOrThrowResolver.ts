import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePostMediaOrThrowArgs } from "./args/FindUniquePostMediaOrThrowArgs";
import { PostMedia } from "../../../models/PostMedia";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMedia)
export class FindUniquePostMediaOrThrowResolver {
  @TypeGraphQL.Query(_returns => PostMedia, {
    nullable: true
  })
  async getPostMedia(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePostMediaOrThrowArgs): Promise<PostMedia | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMedia.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
