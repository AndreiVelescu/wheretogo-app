import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateChatMessageReadArgs } from "./args/AggregateChatMessageReadArgs";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { AggregateChatMessageRead } from "../../outputs/AggregateChatMessageRead";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class AggregateChatMessageReadResolver {
  @TypeGraphQL.Query(_returns => AggregateChatMessageRead, {
    nullable: false
  })
  async aggregateChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChatMessageReadArgs): Promise<AggregateChatMessageRead> {
    return getPrismaFromContext(ctx).chatMessageRead.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
