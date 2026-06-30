import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentOrderByWithRelationInput } from "../../../inputs/PostCommentOrderByWithRelationInput";
import { PostCommentWhereInput } from "../../../inputs/PostCommentWhereInput";
import { PostCommentWhereUniqueInput } from "../../../inputs/PostCommentWhereUniqueInput";
import { PostCommentScalarFieldEnum } from "../../../../enums/PostCommentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPostCommentArgs {
  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostCommentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostCommentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostCommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostCommentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "postId" | "authorId" | "content" | "parentId" | "likesCount" | "createdAt" | "updatedAt" | "editedAt"> | undefined;
}
