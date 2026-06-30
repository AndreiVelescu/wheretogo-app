import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RefreshTokenWhereInput } from "../../inputs/RefreshTokenWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountRefreshTokensArgs {
  @TypeGraphQL.Field(_type => RefreshTokenWhereInput, {
    nullable: true
  })
  where?: RefreshTokenWhereInput | undefined;
}
