import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByChatMessageReadArgs } from "./args/GroupByChatMessageReadArgs";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { ChatMessageReadGroupBy } from "../../outputs/ChatMessageReadGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class GroupByChatMessageReadResolver {
  @TypeGraphQL.Query(_returns => [ChatMessageReadGroupBy], {
    nullable: false
  })
  async groupByChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByChatMessageReadArgs): Promise<ChatMessageReadGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
