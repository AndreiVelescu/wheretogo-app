import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneChatMessageReadArgs } from "./args/UpdateOneChatMessageReadArgs";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class UpdateOneChatMessageReadResolver {
  @TypeGraphQL.Mutation(_returns => ChatMessageRead, {
    nullable: true
  })
  async updateOneChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneChatMessageReadArgs): Promise<ChatMessageRead | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
