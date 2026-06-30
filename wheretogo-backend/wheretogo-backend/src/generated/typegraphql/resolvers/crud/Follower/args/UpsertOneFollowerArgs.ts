import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowerCreateInput } from "../../../inputs/FollowerCreateInput";
import { FollowerUpdateInput } from "../../../inputs/FollowerUpdateInput";
import { FollowerWhereUniqueInput } from "../../../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFollowerArgs {
  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: false
  })
  where!: FollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowerCreateInput, {
    nullable: false
  })
  create!: FollowerCreateInput;

  @TypeGraphQL.Field(_type => FollowerUpdateInput, {
    nullable: false
  })
  update!: FollowerUpdateInput;
}
