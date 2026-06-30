import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTripCollaboratorArgs } from "./args/AggregateTripCollaboratorArgs";
import { CreateManyAndReturnTripCollaboratorArgs } from "./args/CreateManyAndReturnTripCollaboratorArgs";
import { CreateManyTripCollaboratorArgs } from "./args/CreateManyTripCollaboratorArgs";
import { CreateOneTripCollaboratorArgs } from "./args/CreateOneTripCollaboratorArgs";
import { DeleteManyTripCollaboratorArgs } from "./args/DeleteManyTripCollaboratorArgs";
import { DeleteOneTripCollaboratorArgs } from "./args/DeleteOneTripCollaboratorArgs";
import { FindFirstTripCollaboratorArgs } from "./args/FindFirstTripCollaboratorArgs";
import { FindFirstTripCollaboratorOrThrowArgs } from "./args/FindFirstTripCollaboratorOrThrowArgs";
import { FindManyTripCollaboratorArgs } from "./args/FindManyTripCollaboratorArgs";
import { FindUniqueTripCollaboratorArgs } from "./args/FindUniqueTripCollaboratorArgs";
import { FindUniqueTripCollaboratorOrThrowArgs } from "./args/FindUniqueTripCollaboratorOrThrowArgs";
import { GroupByTripCollaboratorArgs } from "./args/GroupByTripCollaboratorArgs";
import { UpdateManyTripCollaboratorArgs } from "./args/UpdateManyTripCollaboratorArgs";
import { UpdateOneTripCollaboratorArgs } from "./args/UpdateOneTripCollaboratorArgs";
import { UpsertOneTripCollaboratorArgs } from "./args/UpsertOneTripCollaboratorArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TripCollaborator } from "../../../models/TripCollaborator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTripCollaborator } from "../../outputs/AggregateTripCollaborator";
import { CreateManyAndReturnTripCollaborator } from "../../outputs/CreateManyAndReturnTripCollaborator";
import { TripCollaboratorGroupBy } from "../../outputs/TripCollaboratorGroupBy";

@TypeGraphQL.Resolver(_of => TripCollaborator)
export class TripCollaboratorCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTripCollaborator, {
    nullable: false
  })
  async aggregateTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTripCollaboratorArgs): Promise<AggregateTripCollaborator> {
    return getPrismaFromContext(ctx).tripCollaborator.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTripCollaboratorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTripCollaborator], {
    nullable: false
  })
  async createManyAndReturnTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTripCollaboratorArgs): Promise<CreateManyAndReturnTripCollaborator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TripCollaborator, {
    nullable: false
  })
  async createOneTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTripCollaboratorArgs): Promise<TripCollaborator> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTripCollaboratorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TripCollaborator, {
    nullable: true
  })
  async deleteOneTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTripCollaboratorArgs): Promise<TripCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TripCollaborator, {
    nullable: true
  })
  async findFirstTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTripCollaboratorArgs): Promise<TripCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TripCollaborator, {
    nullable: true
  })
  async findFirstTripCollaboratorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTripCollaboratorOrThrowArgs): Promise<TripCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TripCollaborator], {
    nullable: false
  })
  async tripCollaborators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTripCollaboratorArgs): Promise<TripCollaborator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TripCollaborator, {
    nullable: true
  })
  async tripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTripCollaboratorArgs): Promise<TripCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TripCollaborator, {
    nullable: true
  })
  async getTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTripCollaboratorOrThrowArgs): Promise<TripCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TripCollaboratorGroupBy], {
    nullable: false
  })
  async groupByTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTripCollaboratorArgs): Promise<TripCollaboratorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTripCollaboratorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TripCollaborator, {
    nullable: true
  })
  async updateOneTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTripCollaboratorArgs): Promise<TripCollaborator | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TripCollaborator, {
    nullable: false
  })
  async upsertOneTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTripCollaboratorArgs): Promise<TripCollaborator> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
