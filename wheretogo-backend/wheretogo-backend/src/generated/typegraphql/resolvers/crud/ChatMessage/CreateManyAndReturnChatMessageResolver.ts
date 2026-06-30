import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnChatMessageArgs } from "./args/CreateManyAndReturnChatMessageArgs";
import { ChatMessage } from "../../../models/ChatMessage";
import { CreateManyAndReturnChatMessage } from "../../outputs/CreateManyAndReturnChatMessage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessage)
export class CreateManyAndReturnChatMessageResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnChatMessage], {
    nullable: false
  })
  async createManyAndReturnChatMessage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnChatMessageArgs): Promise<CreateManyAndReturnChatMessage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessage.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
