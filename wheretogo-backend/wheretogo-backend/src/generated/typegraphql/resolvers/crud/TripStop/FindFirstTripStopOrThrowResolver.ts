import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTripStopOrThrowArgs } from "./args/FindFirstTripStopOrThrowArgs";
import { TripStop } from "../../../models/TripStop";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripStop)
export class FindFirstTripStopOrThrowResolver {
  @TypeGraphQL.Query(_returns => TripStop, {
    nullable: true
  })
  async findFirstTripStopOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTripStopOrThrowArgs): Promise<TripStop | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripStop.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
