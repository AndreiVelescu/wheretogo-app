import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostReportArgs } from "./args/AggregatePostReportArgs";
import { PostReport } from "../../../models/PostReport";
import { AggregatePostReport } from "../../outputs/AggregatePostReport";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostReport)
export class AggregatePostReportResolver {
  @TypeGraphQL.Query(_returns => AggregatePostReport, {
    nullable: false
  })
  async aggregatePostReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostReportArgs): Promise<AggregatePostReport> {
    return getPrismaFromContext(ctx).postReport.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
