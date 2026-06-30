import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyChatRoomArgs } from "./args/FindManyChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatRoom)
export class FindManyChatRoomResolver {
  @TypeGraphQL.Query(_returns => [ChatRoom], {
    nullable: false
  })
  async chatRooms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyChatRoomArgs): Promise<ChatRoom[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatRoom.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
