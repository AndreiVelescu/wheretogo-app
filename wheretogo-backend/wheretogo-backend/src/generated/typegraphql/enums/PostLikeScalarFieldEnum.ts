import * as TypeGraphQL from "type-graphql";

export enum PostLikeScalarFieldEnum {
  id = "id",
  userId = "userId",
  postId = "postId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(PostLikeScalarFieldEnum, {
  name: "PostLikeScalarFieldEnum",
  description: undefined,
});
