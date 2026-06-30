import * as TypeGraphQL from "type-graphql";

export enum PostCollectionScalarFieldEnum {
  id = "id",
  userId = "userId",
  name = "name",
  description = "description",
  isPublic = "isPublic",
  coverImage = "coverImage",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PostCollectionScalarFieldEnum, {
  name: "PostCollectionScalarFieldEnum",
  description: undefined,
});
