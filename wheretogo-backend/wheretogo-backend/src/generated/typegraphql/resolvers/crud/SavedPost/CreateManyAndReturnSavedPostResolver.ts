import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSavedPostArgs } from "./args/CreateManyAndReturnSavedPostArgs";
import { SavedPost } from "../../../models/SavedPost";
import { CreateManyAndReturnSavedPost } from "../../outputs/CreateManyAndReturnSavedPost";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SavedPost)
export class CreateManyAndReturnSavedPostResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSavedPost], {
    nullable: false
  })
  async createManyAndReturnSavedPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSavedPostArgs): Promise<CreateManyAndReturnSavedPost[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).savedPost.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
