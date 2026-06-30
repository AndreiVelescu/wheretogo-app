import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentLikeOrderByWithRelationInput } from "../../../inputs/CommentLikeOrderByWithRelationInput";
import { CommentLikeWhereInput } from "../../../inputs/CommentLikeWhereInput";
import { CommentLikeWhereUniqueInput } from "../../../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCommentLikeArgs {
  @TypeGraphQL.Field(_type => CommentLikeWhereInput, {
    nullable: true
  })
  where?: CommentLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CommentLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: CommentLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
