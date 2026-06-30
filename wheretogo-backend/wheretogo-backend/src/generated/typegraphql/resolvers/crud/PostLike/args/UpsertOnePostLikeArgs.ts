import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostLikeCreateInput } from "../../../inputs/PostLikeCreateInput";
import { PostLikeUpdateInput } from "../../../inputs/PostLikeUpdateInput";
import { PostLikeWhereUniqueInput } from "../../../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostLikeArgs {
  @TypeGraphQL.Field(_type => PostLikeWhereUniqueInput, {
    nullable: false
  })
  where!: PostLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostLikeCreateInput, {
    nullable: false
  })
  create!: PostLikeCreateInput;

  @TypeGraphQL.Field(_type => PostLikeUpdateInput, {
    nullable: false
  })
  update!: PostLikeUpdateInput;
}
