import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostCommentRelationFilter } from "../inputs/PostCommentRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CommentLikeWhereInput", {})
export class CommentLikeWhereInput {
  @TypeGraphQL.Field(_type => [CommentLikeWhereInput], {
    nullable: true
  })
  AND?: CommentLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeWhereInput], {
    nullable: true
  })
  OR?: CommentLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentLikeWhereInput], {
    nullable: true
  })
  NOT?: CommentLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  commentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostCommentRelationFilter, {
    nullable: true
  })
  comment?: PostCommentRelationFilter | undefined;
}
