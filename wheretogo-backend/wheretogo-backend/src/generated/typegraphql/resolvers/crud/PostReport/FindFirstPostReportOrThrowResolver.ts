import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPostReportOrThrowArgs } from "./args/FindFirstPostReportOrThrowArgs";
import { PostReport } from "../../../models/PostReport";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostReport)
export class FindFirstPostReportOrThrowResolver {
  @TypeGraphQL.Query(_returns => PostReport, {
    nullable: true
  })
  async findFirstPostReportOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPostReportOrThrowArgs): Promise<PostReport | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postReport.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
