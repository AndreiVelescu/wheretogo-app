import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateChatRoomArgs } from "./args/AggregateChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
import { AggregateChatRoom } from "../../outputs/AggregateChatRoom";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatRoom)
export class AggregateChatRoomResolver {
  @TypeGraphQL.Query(_returns => AggregateChatRoom, {
    nullable: false
  })
  async aggregateChatRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChatRoomArgs): Promise<AggregateChatRoom> {
    return getPrismaFromContext(ctx).chatRoom.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
