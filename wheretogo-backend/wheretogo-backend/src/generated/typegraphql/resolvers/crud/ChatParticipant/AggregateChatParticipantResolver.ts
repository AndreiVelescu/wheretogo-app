import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateChatParticipantArgs } from "./args/AggregateChatParticipantArgs";
import { ChatParticipant } from "../../../models/ChatParticipant";
import { AggregateChatParticipant } from "../../outputs/AggregateChatParticipant";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatParticipant)
export class AggregateChatParticipantResolver {
  @TypeGraphQL.Query(_returns => AggregateChatParticipant, {
    nullable: false
  })
  async aggregateChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChatParticipantArgs): Promise<AggregateChatParticipant> {
    return getPrismaFromContext(ctx).chatParticipant.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
