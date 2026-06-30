import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnDeviceTokenArgs } from "./args/CreateManyAndReturnDeviceTokenArgs";
import { DeviceToken } from "../../../models/DeviceToken";
import { CreateManyAndReturnDeviceToken } from "../../outputs/CreateManyAndReturnDeviceToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceToken)
export class CreateManyAndReturnDeviceTokenResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnDeviceToken], {
    nullable: false
  })
  async createManyAndReturnDeviceToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnDeviceTokenArgs): Promise<CreateManyAndReturnDeviceToken[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deviceToken.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
