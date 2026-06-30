import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDeviceTokenOrThrowArgs } from "./args/FindUniqueDeviceTokenOrThrowArgs";
import { DeviceToken } from "../../../models/DeviceToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceToken)
export class FindUniqueDeviceTokenOrThrowResolver {
  @TypeGraphQL.Query(_returns => DeviceToken, {
    nullable: true
  })
  async getDeviceToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDeviceTokenOrThrowArgs): Promise<DeviceToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deviceToken.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
