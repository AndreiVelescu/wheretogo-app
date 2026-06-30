import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDeviceTokenArgs } from "./args/AggregateDeviceTokenArgs";
import { DeviceToken } from "../../../models/DeviceToken";
import { AggregateDeviceToken } from "../../outputs/AggregateDeviceToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceToken)
export class AggregateDeviceTokenResolver {
  @TypeGraphQL.Query(_returns => AggregateDeviceToken, {
    nullable: false
  })
  async aggregateDeviceToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeviceTokenArgs): Promise<AggregateDeviceToken> {
    return getPrismaFromContext(ctx).deviceToken.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
