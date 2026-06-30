import * as TypeGraphQL from "type-graphql";

export enum PostShareScalarFieldEnum {
  id = "id",
  userId = "userId",
  postId = "postId",
  platform = "platform",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(PostShareScalarFieldEnum, {
  name: "PostShareScalarFieldEnum",
  description: undefined,
});
