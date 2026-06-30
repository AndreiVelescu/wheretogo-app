import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPostMediaOrThrowArgs } from "./args/FindFirstPostMediaOrThrowArgs";
import { PostMedia } from "../../../models/PostMedia";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMedia)
export class FindFirstPostMediaOrThrowResolver {
  @TypeGraphQL.Query(_returns => PostMedia, {
    nullable: true
  })
  async findFirstPostMediaOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPostMediaOrThrowArgs): Promise<PostMedia | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMedia.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
