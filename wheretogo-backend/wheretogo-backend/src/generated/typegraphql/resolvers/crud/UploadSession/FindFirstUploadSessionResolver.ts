import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUploadSessionArgs } from "./args/FindFirstUploadSessionArgs";
import { UploadSession } from "../../../models/UploadSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UploadSession)
export class FindFirstUploadSessionResolver {
  @TypeGraphQL.Query(_returns => UploadSession, {
    nullable: true
  })
  async findFirstUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUploadSessionArgs): Promise<UploadSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
