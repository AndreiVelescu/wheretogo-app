import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostMediaArgs } from "./args/AggregatePostMediaArgs";
import { PostMedia } from "../../../models/PostMedia";
import { AggregatePostMedia } from "../../outputs/AggregatePostMedia";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMedia)
export class AggregatePostMediaResolver {
  @TypeGraphQL.Query(_returns => AggregatePostMedia, {
    nullable: false
  })
  async aggregatePostMedia(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostMediaArgs): Promise<AggregatePostMedia> {
    return getPrismaFromContext(ctx).postMedia.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
