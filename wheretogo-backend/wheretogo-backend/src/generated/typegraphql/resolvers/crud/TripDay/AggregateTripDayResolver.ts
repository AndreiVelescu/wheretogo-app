import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTripDayArgs } from "./args/AggregateTripDayArgs";
import { TripDay } from "../../../models/TripDay";
import { AggregateTripDay } from "../../outputs/AggregateTripDay";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripDay)
export class AggregateTripDayResolver {
  @TypeGraphQL.Query(_returns => AggregateTripDay, {
    nullable: false
  })
  async aggregateTripDay(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTripDayArgs): Promise<AggregateTripDay> {
    return getPrismaFromContext(ctx).tripDay.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
