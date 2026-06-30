import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneChatRoomArgs } from "./args/UpsertOneChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatRoom)
export class UpsertOneChatRoomResolver {
  @TypeGraphQL.Mutation(_returns => ChatRoom, {
    nullable: false
  })
  async upsertOneChatRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneChatRoomArgs): Promise<ChatRoom> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatRoom.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
