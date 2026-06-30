import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneChatMessageReadArgs } from "./args/UpsertOneChatMessageReadArgs";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class UpsertOneChatMessageReadResolver {
  @TypeGraphQL.Mutation(_returns => ChatMessageRead, {
    nullable: false
  })
  async upsertOneChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneChatMessageReadArgs): Promise<ChatMessageRead> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
