import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTripCollaboratorArgs } from "./args/FindUniqueTripCollaboratorArgs";
import { TripCollaborator } from "../../../models/TripCollaborator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripCollaborator)
export class FindUniqueTripCollaboratorResolver {
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
}
