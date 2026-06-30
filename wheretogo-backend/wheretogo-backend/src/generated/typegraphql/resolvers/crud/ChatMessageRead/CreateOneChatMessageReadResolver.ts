import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneChatMessageReadArgs } from "./args/CreateOneChatMessageReadArgs";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class CreateOneChatMessageReadResolver {
  @TypeGraphQL.Mutation(_returns => ChatMessageRead, {
    nullable: false
  })
  async createOneChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneChatMessageReadArgs): Promise<ChatMessageRead> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
