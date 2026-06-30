import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostLikeOrderByWithRelationInput } from "../../../inputs/PostLikeOrderByWithRelationInput";
import { PostLikeWhereInput } from "../../../inputs/PostLikeWhereInput";
import { PostLikeWhereUniqueInput } from "../../../inputs/PostLikeWhereUniqueInput";
import { PostLikeScalarFieldEnum } from "../../../../enums/PostLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPostLikeOrThrowArgs {
  @TypeGraphQL.Field(_type => PostLikeWhereInput, {
    nullable: true
  })
  where?: PostLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostLikeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "postId" | "createdAt"> | undefined;
}
