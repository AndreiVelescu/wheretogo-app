import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByChatParticipantArgs } from "./args/GroupByChatParticipantArgs";
import { ChatParticipant } from "../../../models/ChatParticipant";
import { ChatParticipantGroupBy } from "../../outputs/ChatParticipantGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatParticipant)
export class GroupByChatParticipantResolver {
  @TypeGraphQL.Query(_returns => [ChatParticipantGroupBy], {
    nullable: false
  })
  async groupByChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByChatParticipantArgs): Promise<ChatParticipantGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
