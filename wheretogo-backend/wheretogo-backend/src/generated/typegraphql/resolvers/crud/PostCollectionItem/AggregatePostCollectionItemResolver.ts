import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostCollectionItemArgs } from "./args/AggregatePostCollectionItemArgs";
import { PostCollectionItem } from "../../../models/PostCollectionItem";
import { AggregatePostCollectionItem } from "../../outputs/AggregatePostCollectionItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollectionItem)
export class AggregatePostCollectionItemResolver {
  @TypeGraphQL.Query(_returns => AggregatePostCollectionItem, {
    nullable: false
  })
  async aggregatePostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostCollectionItemArgs): Promise<AggregatePostCollectionItem> {
    return getPrismaFromContext(ctx).postCollectionItem.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
