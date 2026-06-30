import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTripCollaboratorArgs } from "./args/AggregateTripCollaboratorArgs";
import { TripCollaborator } from "../../../models/TripCollaborator";
import { AggregateTripCollaborator } from "../../outputs/AggregateTripCollaborator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripCollaborator)
export class AggregateTripCollaboratorResolver {
  @TypeGraphQL.Query(_returns => AggregateTripCollaborator, {
    nullable: false
  })
  async aggregateTripCollaborator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTripCollaboratorArgs): Promise<AggregateTripCollaborator> {
    return getPrismaFromContext(ctx).tripCollaborator.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
