import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnRefreshTokenArgs } from "./args/CreateManyAndReturnRefreshTokenArgs";
import { RefreshToken } from "../../../models/RefreshToken";
import { CreateManyAndReturnRefreshToken } from "../../outputs/CreateManyAndReturnRefreshToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RefreshToken)
export class CreateManyAndReturnRefreshTokenResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnRefreshToken], {
    nullable: false
  })
  async createManyAndReturnRefreshToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnRefreshTokenArgs): Promise<CreateManyAndReturnRefreshToken[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).refreshToken.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
