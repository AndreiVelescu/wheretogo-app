import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstChatRoomOrThrowArgs } from "./args/FindFirstChatRoomOrThrowArgs";
import { ChatRoom } from "../../../models/ChatRoom";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatRoom)
export class FindFirstChatRoomOrThrowResolver {
  @TypeGraphQL.Query(_returns => ChatRoom, {
    nullable: true
  })
  async findFirstChatRoomOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatRoomOrThrowArgs): Promise<ChatRoom | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatRoom.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
