import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ChatRoom } from "../../../models/ChatRoom";
import { Notification } from "../../../models/Notification";
import { Post } from "../../../models/Post";
import { Trip } from "../../../models/Trip";
import { TripCollaborator } from "../../../models/TripCollaborator";
import { TripDay } from "../../../models/TripDay";
import { User } from "../../../models/User";
import { TripChatRoomArgs } from "./args/TripChatRoomArgs";
import { TripCollaboratorsArgs } from "./args/TripCollaboratorsArgs";
import { TripDaysArgs } from "./args/TripDaysArgs";
import { TripNotificationsArgs } from "./args/TripNotificationsArgs";
import { TripPostsArgs } from "./args/TripPostsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Trip)
export class TripRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trip.findUniqueOrThrow({
      where: {
        id: trip.id,
      },
    }).owner({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TripDay], {
    nullable: false
  })
  async days(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TripDaysArgs): Promise<TripDay[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trip.findUniqueOrThrow({
      where: {
        id: trip.id,
      },
    }).days({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TripCollaborator], {
    nullable: false
  })
  async collaborators(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TripCollaboratorsArgs): Promise<TripCollaborator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trip.findUniqueOrThrow({
      where: {
        id: trip.id,
      },
    }).collaborators({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async notifications(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TripNotificationsArgs): Promise<Notification[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trip.findUniqueOrThrow({
      where: {
        id: trip.id,
      },
    }).notifications({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ChatRoom, {
    nullable: true
  })
  async chatRoom(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TripChatRoomArgs): Promise<ChatRoom | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trip.findUniqueOrThrow({
      where: {
        id: trip.id,
      },
    }).chatRoom({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false
  })
  async posts(@TypeGraphQL.Root() trip: Trip, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TripPostsArgs): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trip.findUniqueOrThrow({
      where: {
        id: trip.id,
      },
    }).posts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
