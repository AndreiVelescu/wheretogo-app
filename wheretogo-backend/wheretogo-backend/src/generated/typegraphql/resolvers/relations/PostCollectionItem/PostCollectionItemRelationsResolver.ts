import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Post } from "../../../models/Post";
import { PostCollection } from "../../../models/PostCollection";
import { PostCollectionItem } from "../../../models/PostCollectionItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollectionItem)
export class PostCollectionItemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PostCollection, {
    nullable: false
  })
  async collection(@TypeGraphQL.Root() postCollectionItem: PostCollectionItem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PostCollection> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.findUniqueOrThrow({
      where: {
        id: postCollectionItem.id,
      },
    }).collection({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Post, {
    nullable: false
  })
  async post(@TypeGraphQL.Root() postCollectionItem: PostCollectionItem, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Post> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.findUniqueOrThrow({
      where: {
        id: postCollectionItem.id,
      },
    }).post({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
