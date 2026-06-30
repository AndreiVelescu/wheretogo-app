import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnChatRoomArgs } from "./args/CreateManyAndReturnChatRoomArgs";
import { ChatRoom } from "../../../models/ChatRoom";
import { CreateManyAndReturnChatRoom } from "../../outputs/CreateManyAndReturnChatRoom";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatRoom)
export class CreateManyAndReturnChatRoomResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnChatRoom], {
    nullable: false
  })
  async createManyAndReturnChatRoom(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnChatRoomArgs): Promise<CreateManyAndReturnChatRoom[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatRoom.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
