import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostLikeUpdateInput } from "../../../inputs/PostLikeUpdateInput";
import { PostLikeWhereUniqueInput } from "../../../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostLikeArgs {
  @TypeGraphQL.Field(_type => PostLikeUpdateInput, {
    nullable: false
  })
  data!: PostLikeUpdateInput;

  @TypeGraphQL.Field(_type => PostLikeWhereUniqueInput, {
    nullable: false
  })
  where!: PostLikeWhereUniqueInput;
}
