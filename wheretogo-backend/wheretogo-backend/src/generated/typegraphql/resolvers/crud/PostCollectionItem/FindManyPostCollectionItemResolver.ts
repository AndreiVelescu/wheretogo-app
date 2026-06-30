import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPostCollectionItemArgs } from "./args/FindManyPostCollectionItemArgs";
import { PostCollectionItem } from "../../../models/PostCollectionItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollectionItem)
export class FindManyPostCollectionItemResolver {
  @TypeGraphQL.Query(_returns => [PostCollectionItem], {
    nullable: false
  })
  async postCollectionItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPostCollectionItemArgs): Promise<PostCollectionItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
