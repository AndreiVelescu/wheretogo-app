import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateChatMessageReadArgs } from "./args/AggregateChatMessageReadArgs";
import { CreateManyAndReturnChatMessageReadArgs } from "./args/CreateManyAndReturnChatMessageReadArgs";
import { CreateManyChatMessageReadArgs } from "./args/CreateManyChatMessageReadArgs";
import { CreateOneChatMessageReadArgs } from "./args/CreateOneChatMessageReadArgs";
import { DeleteManyChatMessageReadArgs } from "./args/DeleteManyChatMessageReadArgs";
import { DeleteOneChatMessageReadArgs } from "./args/DeleteOneChatMessageReadArgs";
import { FindFirstChatMessageReadArgs } from "./args/FindFirstChatMessageReadArgs";
import { FindFirstChatMessageReadOrThrowArgs } from "./args/FindFirstChatMessageReadOrThrowArgs";
import { FindManyChatMessageReadArgs } from "./args/FindManyChatMessageReadArgs";
import { FindUniqueChatMessageReadArgs } from "./args/FindUniqueChatMessageReadArgs";
import { FindUniqueChatMessageReadOrThrowArgs } from "./args/FindUniqueChatMessageReadOrThrowArgs";
import { GroupByChatMessageReadArgs } from "./args/GroupByChatMessageReadArgs";
import { UpdateManyChatMessageReadArgs } from "./args/UpdateManyChatMessageReadArgs";
import { UpdateOneChatMessageReadArgs } from "./args/UpdateOneChatMessageReadArgs";
import { UpsertOneChatMessageReadArgs } from "./args/UpsertOneChatMessageReadArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ChatMessageRead } from "../../../models/ChatMessageRead";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateChatMessageRead } from "../../outputs/AggregateChatMessageRead";
import { ChatMessageReadGroupBy } from "../../outputs/ChatMessageReadGroupBy";
import { CreateManyAndReturnChatMessageRead } from "../../outputs/CreateManyAndReturnChatMessageRead";

@TypeGraphQL.Resolver(_of => ChatMessageRead)
export class ChatMessageReadCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateChatMessageRead, {
    nullable: false
  })
  async aggregateChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChatMessageReadArgs): Promise<AggregateChatMessageRead> {
    return getPrismaFromContext(ctx).chatMessageRead.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyChatMessageReadArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyChatMessageReadArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => ChatMessageRead, {
    nullable: true
  })
  async findFirstChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatMessageReadArgs): Promise<ChatMessageRead | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ChatMessageRead, {
    nullable: true
  })
  async findFirstChatMessageReadOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstChatMessageReadOrThrowArgs): Promise<ChatMessageRead | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ChatMessageRead], {
    nullable: false
  })
  async chatMessageReads(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyChatMessageReadArgs): Promise<ChatMessageRead[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ChatMessageRead, {
    nullable: true
  })
  async chatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueChatMessageReadArgs): Promise<ChatMessageRead | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ChatMessageRead, {
    nullable: true
  })
  async getChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueChatMessageReadOrThrowArgs): Promise<ChatMessageRead | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ChatMessageReadGroupBy], {
    nullable: false
  })
  async groupByChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByChatMessageReadArgs): Promise<ChatMessageReadGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyChatMessageRead(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyChatMessageReadArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatMessageRead.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
