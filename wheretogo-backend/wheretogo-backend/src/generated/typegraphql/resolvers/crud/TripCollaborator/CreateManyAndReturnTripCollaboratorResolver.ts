import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTripCollaboratorArgs } from "./args/CreateManyAndReturnTripCollaboratorArgs";
import { TripCollaborator } from "../../../models/TripCollaborator";
import { CreateManyAndReturnTripCollaborator } from "../../outputs/CreateManyAndReturnTripCollaborator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripCollaborator)
export class CreateManyAndReturnTripCollaboratorResolver {
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
}
