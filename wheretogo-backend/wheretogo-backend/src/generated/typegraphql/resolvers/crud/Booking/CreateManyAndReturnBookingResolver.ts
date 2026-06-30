import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnBookingArgs } from "./args/CreateManyAndReturnBookingArgs";
import { Booking } from "../../../models/Booking";
import { CreateManyAndReturnBooking } from "../../outputs/CreateManyAndReturnBooking";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Booking)
export class CreateManyAndReturnBookingResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBooking], {
    nullable: false
  })
  async createManyAndReturnBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnBookingArgs): Promise<CreateManyAndReturnBooking[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).booking.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
