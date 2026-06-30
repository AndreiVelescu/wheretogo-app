import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePostCollectionArgs } from "./args/AggregatePostCollectionArgs";
import { PostCollection } from "../../../models/PostCollection";
import { AggregatePostCollection } from "../../outputs/AggregatePostCollection";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollection)
export class AggregatePostCollectionResolver {
  @TypeGraphQL.Query(_returns => AggregatePostCollection, {
    nullable: false
  })
  async aggregatePostCollection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePostCollectionArgs): Promise<AggregatePostCollection> {
    return getPrismaFromContext(ctx).postCollection.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
