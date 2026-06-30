import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPostCollectionArgs } from "./args/CreateManyAndReturnPostCollectionArgs";
import { PostCollection } from "../../../models/PostCollection";
import { CreateManyAndReturnPostCollection } from "../../outputs/CreateManyAndReturnPostCollection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollection)
export class CreateManyAndReturnPostCollectionResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPostCollection], {
    nullable: false
  })
  async createManyAndReturnPostCollection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPostCollectionArgs): Promise<CreateManyAndReturnPostCollection[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollection.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
