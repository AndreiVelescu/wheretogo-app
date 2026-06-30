import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PostCollection } from "../../../models/PostCollection";
import { PostCollectionItem } from "../../../models/PostCollectionItem";
import { User } from "../../../models/User";
import { PostCollectionPostsArgs } from "./args/PostCollectionPostsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollection)
export class PostCollectionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() postCollection: PostCollection, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollection.findUniqueOrThrow({
      where: {
        id: postCollection.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PostCollectionItem], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() postCollection: PostCollection, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PostCollectionPostsArgs): Promise<PostCollectionItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollection.findUniqueOrThrow({
      where: {
        id: postCollection.id,
      },
    }).posts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
