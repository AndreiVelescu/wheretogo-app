import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateChatMessageArgs } from "./args/AggregateChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
import { AggregateChatMessage } from "../../outputs/AggregateChatMessage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessage)
export class AggregateChatMessageResolver {
  @TypeGraphQL.Query(_returns => AggregateChatMessage, {
    nullable: false
  })
  async aggregateChatMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChatMessageArgs): Promise<AggregateChatMessage> {
    return getPrismaFromContext(ctx).chatMessage.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
