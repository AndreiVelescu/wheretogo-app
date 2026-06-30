import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ChatMessage } from "../../../models/ChatMessage";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { ChatRoom } from "../../../models/ChatRoom";
import { User } from "../../../models/User";
import { ChatMessageReadByArgs } from "./args/ChatMessageReadByArgs";
import { ChatMessageRepliesArgs } from "./args/ChatMessageRepliesArgs";
import { ChatMessageReplyToArgs } from "./args/ChatMessageReplyToArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessage)
export class ChatMessageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async sender(@TypeGraphQL.Root() chatMessage: ChatMessage, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessage.findUniqueOrThrow({
      where: {
        id: chatMessage.id,
      },
    }).sender({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ChatRoom, {
    nullable: false
  })
  async room(@TypeGraphQL.Root() chatMessage: ChatMessage, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ChatRoom> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessage.findUniqueOrThrow({
      where: {
        id: chatMessage.id,
      },
    }).room({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ChatMessage, {
    nullable: true
  })
  async replyTo(@TypeGraphQL.Root() chatMessage: ChatMessage, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ChatMessageReplyToArgs): Promise<ChatMessage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessage.findUniqueOrThrow({
      where: {
        id: chatMessage.id,
      },
    }).replyTo({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ChatMessage], {
    nullable: false
  })
  async replies(@TypeGraphQL.Root() chatMessage: ChatMessage, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ChatMessageRepliesArgs): Promise<ChatMessage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessage.findUniqueOrThrow({
      where: {
        id: chatMessage.id,
      },
    }).replies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ChatMessageRead], {
    nullable: false
  })
  async readBy(@TypeGraphQL.Root() chatMessage: ChatMessage, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ChatMessageReadByArgs): Promise<ChatMessageRead[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessage.findUniqueOrThrow({
      where: {
        id: chatMessage.id,
      },
    }).readBy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
