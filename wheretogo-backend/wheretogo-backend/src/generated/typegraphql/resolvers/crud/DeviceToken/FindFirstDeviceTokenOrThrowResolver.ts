import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstDeviceTokenOrThrowArgs } from "./args/FindFirstDeviceTokenOrThrowArgs";
import { DeviceToken } from "../../../models/DeviceToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceToken)
export class FindFirstDeviceTokenOrThrowResolver {
  @TypeGraphQL.Query(_returns => DeviceToken, {
    nullable: true
  })
  async findFirstDeviceTokenOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDeviceTokenOrThrowArgs): Promise<DeviceToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deviceToken.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
