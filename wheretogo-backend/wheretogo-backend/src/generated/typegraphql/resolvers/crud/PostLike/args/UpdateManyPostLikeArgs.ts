import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostLikeUpdateManyMutationInput } from "../../../inputs/PostLikeUpdateManyMutationInput";
import { PostLikeWhereInput } from "../../../inputs/PostLikeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostLikeArgs {
  @TypeGraphQL.Field(_type => PostLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostLikeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostLikeWhereInput, {
    nullable: true
  })
  where?: PostLikeWhereInput | undefined;
}
