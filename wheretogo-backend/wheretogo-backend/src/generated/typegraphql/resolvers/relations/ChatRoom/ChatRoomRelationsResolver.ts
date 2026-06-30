import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ChatMessage } from "../../../models/ChatMessage";
import { ChatParticipant } from "../../../models/ChatParticipant";
import { ChatRoom } from "../../../models/ChatRoom";
import { Trip } from "../../../models/Trip";
import { ChatRoomMessagesArgs } from "./args/ChatRoomMessagesArgs";
import { ChatRoomParticipantsArgs } from "./args/ChatRoomParticipantsArgs";
import { ChatRoomTripArgs } from "./args/ChatRoomTripArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatRoom)
export class ChatRoomRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Trip, {
    nullable: true
  })
  async trip(@TypeGraphQL.Root() chatRoom: ChatRoom, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ChatRoomTripArgs): Promise<Trip | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatRoom.findUniqueOrThrow({
      where: {
        id: chatRoom.id,
      },
    }).trip({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ChatMessage], {
    nullable: false
  })
  async messages(@TypeGraphQL.Root() chatRoom: ChatRoom, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ChatRoomMessagesArgs): Promise<ChatMessage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatRoom.findUniqueOrThrow({
      where: {
        id: chatRoom.id,
      },
    }).messages({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ChatParticipant], {
    nullable: false
  })
  async participants(@TypeGraphQL.Root() chatRoom: ChatRoom, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ChatRoomParticipantsArgs): Promise<ChatParticipant[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatRoom.findUniqueOrThrow({
      where: {
        id: chatRoom.id,
      },
    }).participants({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
