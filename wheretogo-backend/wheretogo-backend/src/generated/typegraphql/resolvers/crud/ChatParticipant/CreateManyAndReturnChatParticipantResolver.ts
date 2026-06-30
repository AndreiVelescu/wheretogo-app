import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnChatParticipantArgs } from "./args/CreateManyAndReturnChatParticipantArgs";
import { ChatParticipant } from "../../../models/ChatParticipant";
import { CreateManyAndReturnChatParticipant } from "../../outputs/CreateManyAndReturnChatParticipant";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ChatParticipant)
export class CreateManyAndReturnChatParticipantResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnChatParticipant], {
    nullable: false
  })
  async createManyAndReturnChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnChatParticipantArgs): Promise<CreateManyAndReturnChatParticipant[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
