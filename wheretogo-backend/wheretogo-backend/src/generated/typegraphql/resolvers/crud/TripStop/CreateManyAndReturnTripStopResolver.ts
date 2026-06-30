import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTripStopArgs } from "./args/CreateManyAndReturnTripStopArgs";
import { TripStop } from "../../../models/TripStop";
import { CreateManyAndReturnTripStop } from "../../outputs/CreateManyAndReturnTripStop";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripStop)
export class CreateManyAndReturnTripStopResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTripStop], {
    nullable: false
  })
  async createManyAndReturnTripStop(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTripStopArgs): Promise<CreateManyAndReturnTripStop[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripStop.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
