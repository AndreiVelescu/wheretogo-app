import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUploadSessionArgs } from "./args/AggregateUploadSessionArgs";
import { CreateManyAndReturnUploadSessionArgs } from "./args/CreateManyAndReturnUploadSessionArgs";
import { CreateManyUploadSessionArgs } from "./args/CreateManyUploadSessionArgs";
import { CreateOneUploadSessionArgs } from "./args/CreateOneUploadSessionArgs";
import { DeleteManyUploadSessionArgs } from "./args/DeleteManyUploadSessionArgs";
import { DeleteOneUploadSessionArgs } from "./args/DeleteOneUploadSessionArgs";
import { FindFirstUploadSessionArgs } from "./args/FindFirstUploadSessionArgs";
import { FindFirstUploadSessionOrThrowArgs } from "./args/FindFirstUploadSessionOrThrowArgs";
import { FindManyUploadSessionArgs } from "./args/FindManyUploadSessionArgs";
import { FindUniqueUploadSessionArgs } from "./args/FindUniqueUploadSessionArgs";
import { FindUniqueUploadSessionOrThrowArgs } from "./args/FindUniqueUploadSessionOrThrowArgs";
import { GroupByUploadSessionArgs } from "./args/GroupByUploadSessionArgs";
import { UpdateManyUploadSessionArgs } from "./args/UpdateManyUploadSessionArgs";
import { UpdateOneUploadSessionArgs } from "./args/UpdateOneUploadSessionArgs";
import { UpsertOneUploadSessionArgs } from "./args/UpsertOneUploadSessionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UploadSession } from "../../../models/UploadSession";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUploadSession } from "../../outputs/AggregateUploadSession";
import { CreateManyAndReturnUploadSession } from "../../outputs/CreateManyAndReturnUploadSession";
import { UploadSessionGroupBy } from "../../outputs/UploadSessionGroupBy";

@TypeGraphQL.Resolver(_of => UploadSession)
export class UploadSessionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUploadSession, {
    nullable: false
  })
  async aggregateUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUploadSessionArgs): Promise<AggregateUploadSession> {
    return getPrismaFromContext(ctx).uploadSession.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUploadSessionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUploadSession], {
    nullable: false
  })
  async createManyAndReturnUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnUploadSessionArgs): Promise<CreateManyAndReturnUploadSession[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UploadSession, {
    nullable: false
  })
  async createOneUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUploadSessionArgs): Promise<UploadSession> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUploadSessionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UploadSession, {
    nullable: true
  })
  async deleteOneUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUploadSessionArgs): Promise<UploadSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UploadSession, {
    nullable: true
  })
  async findFirstUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUploadSessionArgs): Promise<UploadSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UploadSession, {
    nullable: true
  })
  async findFirstUploadSessionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUploadSessionOrThrowArgs): Promise<UploadSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UploadSession], {
    nullable: false
  })
  async uploadSessions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUploadSessionArgs): Promise<UploadSession[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UploadSession, {
    nullable: true
  })
  async uploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUploadSessionArgs): Promise<UploadSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UploadSession, {
    nullable: true
  })
  async getUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUploadSessionOrThrowArgs): Promise<UploadSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UploadSessionGroupBy], {
    nullable: false
  })
  async groupByUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUploadSessionArgs): Promise<UploadSessionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUploadSessionArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UploadSession, {
    nullable: true
  })
  async updateOneUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUploadSessionArgs): Promise<UploadSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UploadSession, {
    nullable: false
  })
  async upsertOneUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUploadSessionArgs): Promise<UploadSession> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
