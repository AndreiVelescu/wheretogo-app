import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Event } from "../../../models/Event";
import { Location } from "../../../models/Location";
import { Notification } from "../../../models/Notification";
import { Trip } from "../../../models/Trip";
import { User } from "../../../models/User";
import { NotificationEventArgs } from "./args/NotificationEventArgs";
import { NotificationLocationArgs } from "./args/NotificationLocationArgs";
import { NotificationTripArgs } from "./args/NotificationTripArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notification)
export class NotificationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).notification.findUniqueOrThrow({
      where: {
        id: notification.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Location, {
    nullable: true
  })
  async location(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: NotificationLocationArgs): Promise<Location | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).notification.findUniqueOrThrow({
      where: {
        id: notification.id,
      },
    }).location({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Event, {
    nullable: true
  })
  async event(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: NotificationEventArgs): Promise<Event | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).notification.findUniqueOrThrow({
      where: {
        id: notification.id,
      },
    }).event({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Trip, {
    nullable: true
  })
  async trip(@TypeGraphQL.Root() notification: Notification, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: NotificationTripArgs): Promise<Trip | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).notification.findUniqueOrThrow({
      where: {
        id: notification.id,
      },
    }).trip({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
