import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByUploadSessionArgs } from "./args/GroupByUploadSessionArgs";
import { UploadSession } from "../../../models/UploadSession";
import { UploadSessionGroupBy } from "../../outputs/UploadSessionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UploadSession)
export class GroupByUploadSessionResolver {
  @TypeGraphQL.Query(_returns => [UploadSessionGroupBy], {
    nullable: false
  })
  async groupByUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUploadSessionArgs): Promise<UploadSessionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
