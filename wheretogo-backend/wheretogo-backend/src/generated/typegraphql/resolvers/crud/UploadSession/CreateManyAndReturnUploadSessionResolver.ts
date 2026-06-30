import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnUploadSessionArgs } from "./args/CreateManyAndReturnUploadSessionArgs";
import { UploadSession } from "../../../models/UploadSession";
import { CreateManyAndReturnUploadSession } from "../../outputs/CreateManyAndReturnUploadSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UploadSession)
export class CreateManyAndReturnUploadSessionResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUploadSession], {
    nullable: false
  })
  async createManyAndReturnUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnUploadSessionArgs): Promise<CreateManyAndReturnUploadSession[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).uploadSession.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
