import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUploadSessionArgs } from "./args/CreateOneUploadSessionArgs";
import { UploadSession } from "../../../models/UploadSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UploadSession)
export class CreateOneUploadSessionResolver {
  @TypeGraphQL.Mutation(_returns => UploadSession, {
    nullable: false
  })
  async createOneUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUploadSessionArgs): Promise<UploadSession> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
