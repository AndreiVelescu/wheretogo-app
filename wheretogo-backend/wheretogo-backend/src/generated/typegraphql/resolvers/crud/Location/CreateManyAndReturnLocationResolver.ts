import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLocationArgs } from "./args/CreateManyAndReturnLocationArgs";
import { Location } from "../../../models/Location";
import { CreateManyAndReturnLocation } from "../../outputs/CreateManyAndReturnLocation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Location)
export class CreateManyAndReturnLocationResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLocation], {
    nullable: false
  })
  async createManyAndReturnLocation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLocationArgs): Promise<CreateManyAndReturnLocation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).location.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
