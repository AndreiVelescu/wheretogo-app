import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTripCollaboratorArgs } from "./args/UpsertOneTripCollaboratorArgs";
import { TripCollaborator } from "../../../models/TripCollaborator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripCollaborator)
export class UpsertOneTripCollaboratorResolver {
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
