import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePostCollectionItemArgs } from "./args/CreateOnePostCollectionItemArgs";
import { PostCollectionItem } from "../../../models/PostCollectionItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollectionItem)
export class CreateOnePostCollectionItemResolver {
  @TypeGraphQL.Mutation(_returns => PostCollectionItem, {
    nullable: false
  })
  async createOnePostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePostCollectionItemArgs): Promise<PostCollectionItem> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
