import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostShareArgs } from "./args/AggregatePostShareArgs";
import { PostShare } from "../../../models/PostShare";
import { AggregatePostShare } from "../../outputs/AggregatePostShare";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostShare)
export class AggregatePostShareResolver {
  @TypeGraphQL.Query(_returns => AggregatePostShare, {
    nullable: false
  })
  async aggregatePostShare(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostShareArgs): Promise<AggregatePostShare> {
    return getPrismaFromContext(ctx).postShare.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
