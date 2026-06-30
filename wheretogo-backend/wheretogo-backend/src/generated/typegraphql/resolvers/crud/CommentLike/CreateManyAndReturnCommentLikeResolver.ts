import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCommentLikeArgs } from "./args/CreateManyAndReturnCommentLikeArgs";
import { CommentLike } from "../../../models/CommentLike";
import { CreateManyAndReturnCommentLike } from "../../outputs/CreateManyAndReturnCommentLike";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CommentLike)
export class CreateManyAndReturnCommentLikeResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCommentLike], {
    nullable: false
  })
  async createManyAndReturnCommentLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCommentLikeArgs): Promise<CreateManyAndReturnCommentLike[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).commentLike.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
