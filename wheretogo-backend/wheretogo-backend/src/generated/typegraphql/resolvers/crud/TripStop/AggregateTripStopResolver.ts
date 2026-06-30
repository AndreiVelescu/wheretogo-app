import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTripStopArgs } from "./args/AggregateTripStopArgs";
import { TripStop } from "../../../models/TripStop";
import { AggregateTripStop } from "../../outputs/AggregateTripStop";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripStop)
export class AggregateTripStopResolver {
  @TypeGraphQL.Query(_returns => AggregateTripStop, {
    nullable: false
  })
  async aggregateTripStop(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTripStopArgs): Promise<AggregateTripStop> {
    return getPrismaFromContext(ctx).tripStop.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
