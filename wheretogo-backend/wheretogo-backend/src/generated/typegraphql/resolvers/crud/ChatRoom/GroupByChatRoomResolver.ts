import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByChatRoomArgs } from "./args/GroupByChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
import { ChatRoomGroupBy } from "../../outputs/ChatRoomGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatRoom)
export class GroupByChatRoomResolver {
  @TypeGraphQL.Query(_returns => [ChatRoomGroupBy], {
    nullable: false
  })
  async groupByChatRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByChatRoomArgs): Promise<ChatRoomGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatRoom.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
