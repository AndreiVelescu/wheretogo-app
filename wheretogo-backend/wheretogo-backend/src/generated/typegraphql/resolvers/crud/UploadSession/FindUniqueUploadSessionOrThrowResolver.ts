import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUploadSessionOrThrowArgs } from "./args/FindUniqueUploadSessionOrThrowArgs";
import { UploadSession } from "../../../models/UploadSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UploadSession)
export class FindUniqueUploadSessionOrThrowResolver {
  @TypeGraphQL.Query(_returns => UploadSession, {
    nullable: true
  })
  async getUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUploadSessionOrThrowArgs): Promise<UploadSession | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
