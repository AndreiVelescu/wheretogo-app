import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPostMediaArgs } from "./args/CreateManyAndReturnPostMediaArgs";
import { PostMedia } from "../../../models/PostMedia";
import { CreateManyAndReturnPostMedia } from "../../outputs/CreateManyAndReturnPostMedia";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostMedia)
export class CreateManyAndReturnPostMediaResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPostMedia], {
    nullable: false
  })
  async createManyAndReturnPostMedia(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPostMediaArgs): Promise<CreateManyAndReturnPostMedia[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postMedia.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
