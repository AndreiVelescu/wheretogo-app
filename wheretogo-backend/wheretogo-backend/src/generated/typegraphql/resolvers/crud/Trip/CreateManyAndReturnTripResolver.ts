import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTripArgs } from "./args/CreateManyAndReturnTripArgs";
import { Trip } from "../../../models/Trip";
import { CreateManyAndReturnTrip } from "../../outputs/CreateManyAndReturnTrip";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Trip)
export class CreateManyAndReturnTripResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTrip], {
    nullable: false
  })
  async createManyAndReturnTrip(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTripArgs): Promise<CreateManyAndReturnTrip[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trip.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
