import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFollowerArgs } from "./args/AggregateFollowerArgs";
import { Follower } from "../../../models/Follower";
import { AggregateFollower } from "../../outputs/AggregateFollower";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Follower)
export class AggregateFollowerResolver {
  @TypeGraphQL.Query(_returns => AggregateFollower, {
    nullable: false
  })
  async aggregateFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFollowerArgs): Promise<AggregateFollower> {
    return getPrismaFromContext(ctx).follower.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
