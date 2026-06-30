import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePostCollectionItemOrThrowArgs } from "./args/FindUniquePostCollectionItemOrThrowArgs";
import { PostCollectionItem } from "../../../models/PostCollectionItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollectionItem)
export class FindUniquePostCollectionItemOrThrowResolver {
  @TypeGraphQL.Query(_returns => PostCollectionItem, {
    nullable: true
  })
  async getPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePostCollectionItemOrThrowArgs): Promise<PostCollectionItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
