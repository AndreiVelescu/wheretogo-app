import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPostLikeArgs } from "./args/CreateManyAndReturnPostLikeArgs";
import { PostLike } from "../../../models/PostLike";
import { CreateManyAndReturnPostLike } from "../../outputs/CreateManyAndReturnPostLike";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostLike)
export class CreateManyAndReturnPostLikeResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPostLike], {
    nullable: false
  })
  async createManyAndReturnPostLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPostLikeArgs): Promise<CreateManyAndReturnPostLike[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postLike.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
