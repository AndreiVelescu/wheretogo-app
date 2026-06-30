import * as TypeGraphQL from "type-graphql";

export enum FollowerScalarFieldEnum {
  id = "id",
  userId = "userId",
  followerId = "followerId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(FollowerScalarFieldEnum, {
  name: "FollowerScalarFieldEnum",
  description: undefined,
});
