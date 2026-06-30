import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBookingArgs } from "./args/AggregateBookingArgs";
import { Booking } from "../../../models/Booking";
import { AggregateBooking } from "../../outputs/AggregateBooking";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Booking)
export class AggregateBookingResolver {
  @TypeGraphQL.Query(_returns => AggregateBooking, {
    nullable: false
  })
  async aggregateBooking(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookingArgs): Promise<AggregateBooking> {
    return getPrismaFromContext(ctx).booking.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
