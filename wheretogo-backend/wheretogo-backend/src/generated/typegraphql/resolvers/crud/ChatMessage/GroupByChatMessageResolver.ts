import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByChatMessageArgs } from "./args/GroupByChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
import { ChatMessageGroupBy } from "../../outputs/ChatMessageGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessage)
export class GroupByChatMessageResolver {
  @TypeGraphQL.Query(_returns => [ChatMessageGroupBy], {
    nullable: false
  })
  async groupByChatMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByChatMessageArgs): Promise<ChatMessageGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessage.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
