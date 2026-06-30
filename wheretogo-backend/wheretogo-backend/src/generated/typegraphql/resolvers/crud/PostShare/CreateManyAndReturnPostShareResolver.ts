import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPostShareArgs } from "./args/CreateManyAndReturnPostShareArgs";
import { PostShare } from "../../../models/PostShare";
import { CreateManyAndReturnPostShare } from "../../outputs/CreateManyAndReturnPostShare";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostShare)
export class CreateManyAndReturnPostShareResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPostShare], {
    nullable: false
  })
  async createManyAndReturnPostShare(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPostShareArgs): Promise<CreateManyAndReturnPostShare[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postShare.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
