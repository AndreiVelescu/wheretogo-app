import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostCollectionItemArgs } from "./args/AggregatePostCollectionItemArgs";
import { CreateManyAndReturnPostCollectionItemArgs } from "./args/CreateManyAndReturnPostCollectionItemArgs";
import { CreateManyPostCollectionItemArgs } from "./args/CreateManyPostCollectionItemArgs";
import { CreateOnePostCollectionItemArgs } from "./args/CreateOnePostCollectionItemArgs";
import { DeleteManyPostCollectionItemArgs } from "./args/DeleteManyPostCollectionItemArgs";
import { DeleteOnePostCollectionItemArgs } from "./args/DeleteOnePostCollectionItemArgs";
import { FindFirstPostCollectionItemArgs } from "./args/FindFirstPostCollectionItemArgs";
import { FindFirstPostCollectionItemOrThrowArgs } from "./args/FindFirstPostCollectionItemOrThrowArgs";
import { FindManyPostCollectionItemArgs } from "./args/FindManyPostCollectionItemArgs";
import { FindUniquePostCollectionItemArgs } from "./args/FindUniquePostCollectionItemArgs";
import { FindUniquePostCollectionItemOrThrowArgs } from "./args/FindUniquePostCollectionItemOrThrowArgs";
import { GroupByPostCollectionItemArgs } from "./args/GroupByPostCollectionItemArgs";
import { UpdateManyPostCollectionItemArgs } from "./args/UpdateManyPostCollectionItemArgs";
import { UpdateOnePostCollectionItemArgs } from "./args/UpdateOnePostCollectionItemArgs";
import { UpsertOnePostCollectionItemArgs } from "./args/UpsertOnePostCollectionItemArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PostCollectionItem } from "../../../models/PostCollectionItem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePostCollectionItem } from "../../outputs/AggregatePostCollectionItem";
import { CreateManyAndReturnPostCollectionItem } from "../../outputs/CreateManyAndReturnPostCollectionItem";
import { PostCollectionItemGroupBy } from "../../outputs/PostCollectionItemGroupBy";

@TypeGraphQL.Resolver(_of => PostCollectionItem)
export class PostCollectionItemCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePostCollectionItem, {
    nullable: false
  })
  async aggregatePostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostCollectionItemArgs): Promise<AggregatePostCollectionItem> {
    return getPrismaFromContext(ctx).postCollectionItem.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPostCollectionItemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPostCollectionItem], {
    nullable: false
  })
  async createManyAndReturnPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPostCollectionItemArgs): Promise<CreateManyAndReturnPostCollectionItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PostCollectionItem, {
    nullable: false
  })
  async createOnePostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePostCollectionItemArgs): Promise<PostCollectionItem> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPostCollectionItemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PostCollectionItem, {
    nullable: true
  })
  async deleteOnePostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePostCollectionItemArgs): Promise<PostCollectionItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PostCollectionItem, {
    nullable: true
  })
  async findFirstPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPostCollectionItemArgs): Promise<PostCollectionItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PostCollectionItem, {
    nullable: true
  })
  async findFirstPostCollectionItemOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPostCollectionItemOrThrowArgs): Promise<PostCollectionItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PostCollectionItem], {
    nullable: false
  })
  async postCollectionItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPostCollectionItemArgs): Promise<PostCollectionItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PostCollectionItem, {
    nullable: true
  })
  async postCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePostCollectionItemArgs): Promise<PostCollectionItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PostCollectionItem, {
    nullable: true
  })
  async getPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePostCollectionItemOrThrowArgs): Promise<PostCollectionItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PostCollectionItemGroupBy], {
    nullable: false
  })
  async groupByPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPostCollectionItemArgs): Promise<PostCollectionItemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPostCollectionItemArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PostCollectionItem, {
    nullable: true
  })
  async updateOnePostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePostCollectionItemArgs): Promise<PostCollectionItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PostCollectionItem, {
    nullable: false
  })
  async upsertOnePostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePostCollectionItemArgs): Promise<PostCollectionItem> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
