import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPostCollectionItemArgs } from "./args/CreateManyAndReturnPostCollectionItemArgs";
import { PostCollectionItem } from "../../../models/PostCollectionItem";
import { CreateManyAndReturnPostCollectionItem } from "../../outputs/CreateManyAndReturnPostCollectionItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostCollectionItem)
export class CreateManyAndReturnPostCollectionItemResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPostCollectionItem], {
    nullable: false
  })
  async createManyAndReturnPostCollectionItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPostCollectionItemArgs): Promise<CreateManyAndReturnPostCollectionItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postCollectionItem.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
