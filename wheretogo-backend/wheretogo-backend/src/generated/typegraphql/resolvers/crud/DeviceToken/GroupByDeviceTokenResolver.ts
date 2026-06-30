import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByDeviceTokenArgs } from "./args/GroupByDeviceTokenArgs";
import { DeviceToken } from "../../../models/DeviceToken";
import { DeviceTokenGroupBy } from "../../outputs/DeviceTokenGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceToken)
export class GroupByDeviceTokenResolver {
  @TypeGraphQL.Query(_returns => [DeviceTokenGroupBy], {
    nullable: false
  })
  async groupByDeviceToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDeviceTokenArgs): Promise<DeviceTokenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deviceToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
