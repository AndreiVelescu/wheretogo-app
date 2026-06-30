import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstChatMessageReadOrThrowArgs } from "./args/FindFirstChatMessageReadOrThrowArgs";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class FindFirstChatMessageReadOrThrowResolver {
  @TypeGraphQL.Query(_returns => ChatMessageRead, {
    nullable: true
  })
  async findFirstChatMessageReadOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatMessageReadOrThrowArgs): Promise<ChatMessageRead | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
