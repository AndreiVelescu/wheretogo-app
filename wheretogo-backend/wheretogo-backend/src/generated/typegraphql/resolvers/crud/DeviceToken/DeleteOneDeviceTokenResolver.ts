import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneDeviceTokenArgs } from "./args/DeleteOneDeviceTokenArgs";
import { DeviceToken } from "../../../models/DeviceToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceToken)
export class DeleteOneDeviceTokenResolver {
  @TypeGraphQL.Mutation(_returns => DeviceToken, {
    nullable: true
  })
  async deleteOneDeviceToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneDeviceTokenArgs): Promise<DeviceToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deviceToken.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
