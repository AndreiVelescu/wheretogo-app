import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnNotificationArgs } from "./args/CreateManyAndReturnNotificationArgs";
import { Notification } from "../../../models/Notification";
import { CreateManyAndReturnNotification } from "../../outputs/CreateManyAndReturnNotification";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Notification)
export class CreateManyAndReturnNotificationResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnNotification], {
    nullable: false
  })
  async createManyAndReturnNotification(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnNotificationArgs): Promise<CreateManyAndReturnNotification[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).notification.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
