import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ChatMessage } from "../../../models/ChatMessage";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class ChatMessageReadRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() chatMessageRead: ChatMessageRead, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.findUniqueOrThrow({
      where: {
        id: chatMessageRead.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ChatMessage, {
    nullable: false
  })
  async message(@TypeGraphQL.Root() chatMessageRead: ChatMessageRead, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ChatMessage> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.findUniqueOrThrow({
      where: {
        id: chatMessageRead.id,
      },
    }).message({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
