import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostLikeOrderByWithAggregationInput } from "../../../inputs/PostLikeOrderByWithAggregationInput";
import { PostLikeScalarWhereWithAggregatesInput } from "../../../inputs/PostLikeScalarWhereWithAggregatesInput";
import { PostLikeWhereInput } from "../../../inputs/PostLikeWhereInput";
import { PostLikeScalarFieldEnum } from "../../../../enums/PostLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostLikeArgs {
  @TypeGraphQL.Field(_type => PostLikeWhereInput, {
    nullable: true
  })
  where?: PostLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostLikeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostLikeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostLikeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "postId" | "createdAt">;

  @TypeGraphQL.Field(_type => PostLikeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostLikeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
