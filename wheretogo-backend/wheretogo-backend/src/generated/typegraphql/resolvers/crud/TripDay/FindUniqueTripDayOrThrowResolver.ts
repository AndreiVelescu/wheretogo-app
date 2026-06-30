import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTripDayOrThrowArgs } from "./args/FindUniqueTripDayOrThrowArgs";
import { TripDay } from "../../../models/TripDay";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripDay)
export class FindUniqueTripDayOrThrowResolver {
  @TypeGraphQL.Query(_returns => TripDay, {
    nullable: true
  })
  async getTripDay(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTripDayOrThrowArgs): Promise<TripDay | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripDay.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
