import * as TypeGraphQL from "type-graphql";

export enum PostCommentScalarFieldEnum {
  id = "id",
  postId = "postId",
  authorId = "authorId",
  content = "content",
  parentId = "parentId",
  likesCount = "likesCount",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  editedAt = "editedAt"
}
TypeGraphQL.registerEnumType(PostCommentScalarFieldEnum, {
  name: "PostCommentScalarFieldEnum",
  description: undefined,
});
