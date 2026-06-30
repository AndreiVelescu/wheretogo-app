import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnReviewArgs } from "./args/CreateManyAndReturnReviewArgs";
import { Review } from "../../../models/Review";
import { CreateManyAndReturnReview } from "../../outputs/CreateManyAndReturnReview";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Review)
export class CreateManyAndReturnReviewResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnReview], {
    nullable: false
  })
  async createManyAndReturnReview(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnReviewArgs): Promise<CreateManyAndReturnReview[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).review.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
