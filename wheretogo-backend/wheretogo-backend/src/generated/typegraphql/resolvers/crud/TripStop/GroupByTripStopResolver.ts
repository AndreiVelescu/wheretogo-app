import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTripStopArgs } from "./args/GroupByTripStopArgs";
import { TripStop } from "../../../models/TripStop";
import { TripStopGroupBy } from "../../outputs/TripStopGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripStop)
export class GroupByTripStopResolver {
  @TypeGraphQL.Query(_returns => [TripStopGroupBy], {
    nullable: false
  })
  async groupByTripStop(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTripStopArgs): Promise<TripStopGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripStop.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
