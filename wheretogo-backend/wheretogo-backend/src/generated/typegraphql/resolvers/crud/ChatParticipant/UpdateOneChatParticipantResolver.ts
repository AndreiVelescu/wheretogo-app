import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneChatParticipantArgs } from "./args/UpdateOneChatParticipantArgs";
import { ChatParticipant } from "../../../models/ChatParticipant";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatParticipant)
export class UpdateOneChatParticipantResolver {
  @TypeGraphQL.Mutation(_returns => ChatParticipant, {
    nullable: true
  })
  async updateOneChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneChatParticipantArgs): Promise<ChatParticipant | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
