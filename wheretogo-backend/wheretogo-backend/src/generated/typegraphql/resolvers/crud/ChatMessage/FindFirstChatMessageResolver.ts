import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstChatMessageArgs } from "./args/FindFirstChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessage)
export class FindFirstChatMessageResolver {
  @TypeGraphQL.Query(_returns => ChatMessage, {
    nullable: true
  })
  async findFirstChatMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatMessageArgs): Promise<ChatMessage | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessage.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
