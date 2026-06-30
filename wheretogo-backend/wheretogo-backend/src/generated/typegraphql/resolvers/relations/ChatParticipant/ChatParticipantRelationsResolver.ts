import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ChatParticipant } from "../../../models/ChatParticipant";
import { ChatRoom } from "../../../models/ChatRoom";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatParticipant)
export class ChatParticipantRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() chatParticipant: ChatParticipant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.findUniqueOrThrow({
      where: {
        id: chatParticipant.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ChatRoom, {
    nullable: false
  })
  async room(@TypeGraphQL.Root() chatParticipant: ChatParticipant, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ChatRoom> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.findUniqueOrThrow({
      where: {
        id: chatParticipant.id,
      },
    }).room({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
