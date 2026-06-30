import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneChatRoomArgs } from "./args/DeleteOneChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatRoom)
export class DeleteOneChatRoomResolver {
  @TypeGraphQL.Mutation(_returns => ChatRoom, {
    nullable: true
  })
  async deleteOneChatRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneChatRoomArgs): Promise<ChatRoom | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatRoom.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
