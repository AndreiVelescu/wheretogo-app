import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTripDayArgs } from "./args/CreateManyAndReturnTripDayArgs";
import { TripDay } from "../../../models/TripDay";
import { CreateManyAndReturnTripDay } from "../../outputs/CreateManyAndReturnTripDay";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripDay)
export class CreateManyAndReturnTripDayResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTripDay], {
    nullable: false
  })
  async createManyAndReturnTripDay(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTripDayArgs): Promise<CreateManyAndReturnTripDay[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripDay.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
