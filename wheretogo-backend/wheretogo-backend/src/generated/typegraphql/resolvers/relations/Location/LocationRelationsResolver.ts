import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Booking } from "../../../models/Booking";
import { Event } from "../../../models/Event";
import { Favorite } from "../../../models/Favorite";
import { Location } from "../../../models/Location";
import { Notification } from "../../../models/Notification";
import { Post } from "../../../models/Post";
import { Review } from "../../../models/Review";
import { ScheduleLocationInCalendar } from "../../../models/ScheduleLocationInCalendar";
import { TripStop } from "../../../models/TripStop";
import { LocationBookingsArgs } from "./args/LocationBookingsArgs";
import { LocationEventsArgs } from "./args/LocationEventsArgs";
import { LocationFavoritesArgs } from "./args/LocationFavoritesArgs";
import { LocationNotificationsArgs } from "./args/LocationNotificationsArgs";
import { LocationPostsArgs } from "./args/LocationPostsArgs";
import { LocationReviewsArgs } from "./args/LocationReviewsArgs";
import { LocationScheduleLocationInCalendarsArgs } from "./args/LocationScheduleLocationInCalendarsArgs";
import { LocationTripStopsArgs } from "./args/LocationTripStopsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class LocationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Review], {
    nullable: false
  })
  async reviews(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationReviewsArgs): Promise<Review[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).location.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).reviews({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Event], {
    nullable: false
  })
  async events(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationEventsArgs): Promise<Event[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).location.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).events({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Booking], {
    nullable: false
  })
  async bookings(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationBookingsArgs): Promise<Booking[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).location.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).bookings({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Favorite], {
    nullable: false
  })
  async favorites(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationFavoritesArgs): Promise<Favorite[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).location.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).favorites({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async notifications(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationNotificationsArgs): Promise<Notification[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).location.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).notifications({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TripStop], {
    nullable: false
  })
  async tripStops(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationTripStopsArgs): Promise<TripStop[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).location.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).tripStops({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ScheduleLocationInCalendar], {
    nullable: false
  })
  async scheduleLocationInCalendars(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationScheduleLocationInCalendarsArgs): Promise<ScheduleLocationInCalendar[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).location.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).scheduleLocationInCalendars({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() location: Location, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: LocationPostsArgs): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).location.findUniqueOrThrow({
      where: {
        id: location.id,
      },
    }).posts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
