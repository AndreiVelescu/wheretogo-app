import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyUploadSessionArgs } from "./args/FindManyUploadSessionArgs";
import { UploadSession } from "../../../models/UploadSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UploadSession)
export class FindManyUploadSessionResolver {
  @TypeGraphQL.Query(_returns => [UploadSession], {
    nullable: false
  })
  async uploadSessions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUploadSessionArgs): Promise<UploadSession[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
