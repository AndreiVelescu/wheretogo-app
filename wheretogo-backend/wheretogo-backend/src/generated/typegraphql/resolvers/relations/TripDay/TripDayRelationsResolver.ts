import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Trip } from "../../../models/Trip";
import { TripDay } from "../../../models/TripDay";
import { TripStop } from "../../../models/TripStop";
import { TripDayStopsArgs } from "./args/TripDayStopsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripDay)
export class TripDayRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Trip, {
    nullable: false
  })
  async trip(@TypeGraphQL.Root() tripDay: TripDay, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Trip> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripDay.findUniqueOrThrow({
      where: {
        id: tripDay.id,
      },
    }).trip({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TripStop], {
    nullable: false
  })
  async stops(@TypeGraphQL.Root() tripDay: TripDay, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TripDayStopsArgs): Promise<TripStop[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripDay.findUniqueOrThrow({
      where: {
        id: tripDay.id,
      },
    }).stops({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
