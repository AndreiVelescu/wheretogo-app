import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUploadSessionArgs } from "./args/AggregateUploadSessionArgs";
import { UploadSession } from "../../../models/UploadSession";
import { AggregateUploadSession } from "../../outputs/AggregateUploadSession";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UploadSession)
export class AggregateUploadSessionResolver {
  @TypeGraphQL.Query(_returns => AggregateUploadSession, {
    nullable: false
  })
  async aggregateUploadSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUploadSessionArgs): Promise<AggregateUploadSession> {
    return getPrismaFromContext(ctx).uploadSession.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
