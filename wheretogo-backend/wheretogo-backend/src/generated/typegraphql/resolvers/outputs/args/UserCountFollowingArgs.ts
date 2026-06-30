import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowerWhereInput } from "../../inputs/FollowerWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountFollowingArgs {
  @TypeGraphQL.Field(_type => FollowerWhereInput, {
    nullable: true
  })
  where?: FollowerWhereInput | undefined;
}
