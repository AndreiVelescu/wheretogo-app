import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePostCollectionArgs } from "./args/UpsertOnePostCollectionArgs";
import { PostCollection } from "../../../models/PostCollection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollection)
export class UpsertOnePostCollectionResolver {
  @TypeGraphQL.Mutation(_returns => PostCollection, {
    nullable: false
  })
  async upsertOnePostCollection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePostCollectionArgs): Promise<PostCollection> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollection.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
