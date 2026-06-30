import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueDeviceTokenArgs } from "./args/FindUniqueDeviceTokenArgs";
import { DeviceToken } from "../../../models/DeviceToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceToken)
export class FindUniqueDeviceTokenResolver {
  @TypeGraphQL.Query(_returns => DeviceToken, {
    nullable: true
  })
  async deviceToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDeviceTokenArgs): Promise<DeviceToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deviceToken.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
