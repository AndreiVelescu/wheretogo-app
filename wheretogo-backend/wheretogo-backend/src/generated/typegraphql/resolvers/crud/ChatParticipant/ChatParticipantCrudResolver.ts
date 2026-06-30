import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateChatParticipantArgs } from "./args/AggregateChatParticipantArgs";
import { CreateManyAndReturnChatParticipantArgs } from "./args/CreateManyAndReturnChatParticipantArgs";
import { CreateManyChatParticipantArgs } from "./args/CreateManyChatParticipantArgs";
import { CreateOneChatParticipantArgs } from "./args/CreateOneChatParticipantArgs";
import { DeleteManyChatParticipantArgs } from "./args/DeleteManyChatParticipantArgs";
import { DeleteOneChatParticipantArgs } from "./args/DeleteOneChatParticipantArgs";
import { FindFirstChatParticipantArgs } from "./args/FindFirstChatParticipantArgs";
import { FindFirstChatParticipantOrThrowArgs } from "./args/FindFirstChatParticipantOrThrowArgs";
import { FindManyChatParticipantArgs } from "./args/FindManyChatParticipantArgs";
import { FindUniqueChatParticipantArgs } from "./args/FindUniqueChatParticipantArgs";
import { FindUniqueChatParticipantOrThrowArgs } from "./args/FindUniqueChatParticipantOrThrowArgs";
import { GroupByChatParticipantArgs } from "./args/GroupByChatParticipantArgs";
import { UpdateManyChatParticipantArgs } from "./args/UpdateManyChatParticipantArgs";
import { UpdateOneChatParticipantArgs } from "./args/UpdateOneChatParticipantArgs";
import { UpsertOneChatParticipantArgs } from "./args/UpsertOneChatParticipantArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ChatParticipant } from "../../../models/ChatParticipant";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateChatParticipant } from "../../outputs/AggregateChatParticipant";
import { ChatParticipantGroupBy } from "../../outputs/ChatParticipantGroupBy";
import { CreateManyAndReturnChatParticipant } from "../../outputs/CreateManyAndReturnChatParticipant";

@TypeGraphQL.Resolver(_of => ChatParticipant)
export class ChatParticipantCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateChatParticipant, {
    nullable: false
  })
  async aggregateChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChatParticipantArgs): Promise<AggregateChatParticipant> {
    return getPrismaFromContext(ctx).chatParticipant.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyChatParticipantArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => ChatParticipant, {
    nullable: false
  })
  async createOneChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneChatParticipantArgs): Promise<ChatParticipant> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyChatParticipantArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ChatParticipant, {
    nullable: true
  })
  async deleteOneChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneChatParticipantArgs): Promise<ChatParticipant | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ChatParticipant, {
    nullable: true
  })
  async findFirstChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatParticipantArgs): Promise<ChatParticipant | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ChatParticipant, {
    nullable: true
  })
  async findFirstChatParticipantOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatParticipantOrThrowArgs): Promise<ChatParticipant | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ChatParticipant], {
    nullable: false
  })
  async chatParticipants(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyChatParticipantArgs): Promise<ChatParticipant[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => ChatParticipant, {
    nullable: true
  })
  async getChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueChatParticipantOrThrowArgs): Promise<ChatParticipant | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ChatParticipantGroupBy], {
    nullable: false
  })
  async groupByChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByChatParticipantArgs): Promise<ChatParticipantGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyChatParticipantArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => ChatParticipant, {
    nullable: false
  })
  async upsertOneChatParticipant(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneChatParticipantArgs): Promise<ChatParticipant> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatParticipant.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
