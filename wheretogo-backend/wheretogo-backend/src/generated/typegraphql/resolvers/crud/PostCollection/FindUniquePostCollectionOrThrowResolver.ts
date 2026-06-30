import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePostCollectionOrThrowArgs } from "./args/FindUniquePostCollectionOrThrowArgs";
import { PostCollection } from "../../../models/PostCollection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollection)
export class FindUniquePostCollectionOrThrowResolver {
  @TypeGraphQL.Query(_returns => PostCollection, {
    nullable: true
  })
  async getPostCollection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePostCollectionOrThrowArgs): Promise<PostCollection | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollection.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
