import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostShareCreateInput } from "../../../inputs/PostShareCreateInput";
import { PostShareUpdateInput } from "../../../inputs/PostShareUpdateInput";
import { PostShareWhereUniqueInput } from "../../../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostShareArgs {
  @TypeGraphQL.Field(_type => PostShareWhereUniqueInput, {
    nullable: false
  })
  where!: PostShareWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostShareCreateInput, {
    nullable: false
  })
  create!: PostShareCreateInput;

  @TypeGraphQL.Field(_type => PostShareUpdateInput, {
    nullable: false
  })
  update!: PostShareUpdateInput;
}
