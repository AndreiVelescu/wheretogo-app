import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstChatParticipantOrThrowArgs } from "./args/FindFirstChatParticipantOrThrowArgs";
import { ChatParticipant } from "../../../models/ChatParticipant";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatParticipant)
export class FindFirstChatParticipantOrThrowResolver {
  @TypeGraphQL.Query(_returns => ChatParticipant, {
    nullable: true
  })
  async findFirstChatParticipantOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatParticipantOrThrowArgs): Promise<ChatParticipant | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
