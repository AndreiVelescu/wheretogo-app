import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTripCollaboratorArgs } from "./args/GroupByTripCollaboratorArgs";
import { TripCollaborator } from "../../../models/TripCollaborator";
import { TripCollaboratorGroupBy } from "../../outputs/TripCollaboratorGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripCollaborator)
export class GroupByTripCollaboratorResolver {
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
}
