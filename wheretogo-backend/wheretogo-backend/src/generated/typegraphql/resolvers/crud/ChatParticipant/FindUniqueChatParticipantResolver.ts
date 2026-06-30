import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueChatParticipantArgs } from "./args/FindUniqueChatParticipantArgs";
import { ChatParticipant } from "../../../models/ChatParticipant";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatParticipant)
export class FindUniqueChatParticipantResolver {
  @TypeGraphQL.Query(_returns => ChatParticipant, {
    nullable: true
  })
  async chatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueChatParticipantArgs): Promise<ChatParticipant | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
