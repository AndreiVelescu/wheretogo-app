import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Trip } from "../../../models/Trip";
import { TripCollaborator } from "../../../models/TripCollaborator";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TripCollaborator)
export class TripCollaboratorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Trip, {
    nullable: false
  })
  async trip(@TypeGraphQL.Root() tripCollaborator: TripCollaborator, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Trip> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.findUniqueOrThrow({
      where: {
        id: tripCollaborator.id,
      },
    }).trip({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() tripCollaborator: TripCollaborator, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tripCollaborator.findUniqueOrThrow({
      where: {
        id: tripCollaborator.id,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
