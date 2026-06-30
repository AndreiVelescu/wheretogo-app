import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPostReportArgs } from "./args/CreateManyAndReturnPostReportArgs";
import { PostReport } from "../../../models/PostReport";
import { CreateManyAndReturnPostReport } from "../../outputs/CreateManyAndReturnPostReport";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostReport)
export class CreateManyAndReturnPostReportResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPostReport], {
    nullable: false
  })
  async createManyAndReturnPostReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPostReportArgs): Promise<CreateManyAndReturnPostReport[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postReport.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
