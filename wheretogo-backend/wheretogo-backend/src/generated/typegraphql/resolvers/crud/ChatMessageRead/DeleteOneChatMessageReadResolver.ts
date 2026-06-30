import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneChatMessageReadArgs } from "./args/DeleteOneChatMessageReadArgs";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class DeleteOneChatMessageReadResolver {
  @TypeGraphQL.Mutation(_returns => ChatMessageRead, {
    nullable: true
  })
  async deleteOneChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneChatMessageReadArgs): Promise<ChatMessageRead | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
