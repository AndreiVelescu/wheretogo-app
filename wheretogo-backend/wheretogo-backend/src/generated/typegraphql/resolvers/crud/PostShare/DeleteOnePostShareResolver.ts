import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePostShareArgs } from "./args/DeleteOnePostShareArgs";
import { PostShare } from "../../../models/PostShare";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PostShare)
export class DeleteOnePostShareResolver {
  @TypeGraphQL.Mutation(_returns => PostShare, {
    nullable: true
  })
  async deleteOnePostShare(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePostShareArgs): Promise<PostShare | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).postShare.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
