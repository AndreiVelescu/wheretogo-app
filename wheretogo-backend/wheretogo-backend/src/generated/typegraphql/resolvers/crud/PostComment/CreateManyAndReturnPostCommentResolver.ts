import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPostCommentArgs } from "./args/CreateManyAndReturnPostCommentArgs";
import { PostComment } from "../../../models/PostComment";
import { CreateManyAndReturnPostComment } from "../../outputs/CreateManyAndReturnPostComment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostComment)
export class CreateManyAndReturnPostCommentResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPostComment], {
    nullable: false
  })
  async createManyAndReturnPostComment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPostCommentArgs): Promise<CreateManyAndReturnPostComment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postComment.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
