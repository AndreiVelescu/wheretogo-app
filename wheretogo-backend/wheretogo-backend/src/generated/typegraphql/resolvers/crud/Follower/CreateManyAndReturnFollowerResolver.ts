import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnFollowerArgs } from "./args/CreateManyAndReturnFollowerArgs";
import { Follower } from "../../../models/Follower";
import { CreateManyAndReturnFollower } from "../../outputs/CreateManyAndReturnFollower";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Follower)
export class CreateManyAndReturnFollowerResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnFollower], {
    nullable: false
  })
  async createManyAndReturnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnFollowerArgs): Promise<CreateManyAndReturnFollower[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).follower.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
