import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTripCollaboratorOrThrowArgs } from "./args/FindUniqueTripCollaboratorOrThrowArgs";
import { TripCollaborator } from "../../../models/TripCollaborator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripCollaborator)
export class FindUniqueTripCollaboratorOrThrowResolver {
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
}
