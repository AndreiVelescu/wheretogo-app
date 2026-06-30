import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Location } from "../../../models/Location";
import { TripDay } from "../../../models/TripDay";
import { TripStop } from "../../../models/TripStop";
import { TripStopLocationArgs } from "./args/TripStopLocationArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripStop)
export class TripStopRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => TripDay, {
    nullable: false
  })
  async tripDay(@TypeGraphQL.Root() tripStop: TripStop, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<TripDay> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripStop.findUniqueOrThrow({
      where: {
        id: tripStop.id,
      },
    }).tripDay({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Location, {
    nullable: true
  })
  async location(@TypeGraphQL.Root() tripStop: TripStop, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TripStopLocationArgs): Promise<Location | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripStop.findUniqueOrThrow({
      where: {
        id: tripStop.id,
      },
    }).location({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
