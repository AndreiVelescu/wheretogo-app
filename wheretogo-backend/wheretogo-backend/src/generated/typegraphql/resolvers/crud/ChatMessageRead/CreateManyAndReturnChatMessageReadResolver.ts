import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnChatMessageReadArgs } from "./args/CreateManyAndReturnChatMessageReadArgs";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { CreateManyAndReturnChatMessageRead } from "../../outputs/CreateManyAndReturnChatMessageRead";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class CreateManyAndReturnChatMessageReadResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnChatMessageRead], {
    nullable: false
  })
  async createManyAndReturnChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnChatMessageReadArgs): Promise<CreateManyAndReturnChatMessageRead[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
