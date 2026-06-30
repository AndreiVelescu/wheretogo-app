import * as TypeGraphQL from "type-graphql";

export enum CommentLikeScalarFieldEnum {
  id = "id",
  userId = "userId",
  commentId = "commentId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(CommentLikeScalarFieldEnum, {
  name: "CommentLikeScalarFieldEnum",
  description: undefined,
});
