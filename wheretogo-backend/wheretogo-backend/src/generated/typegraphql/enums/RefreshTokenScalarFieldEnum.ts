import * as TypeGraphQL from "type-graphql";

export enum RefreshTokenScalarFieldEnum {
  id = "id",
  token = "token",
  userId = "userId",
  expiresAt = "expiresAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(RefreshTokenScalarFieldEnum, {
  name: "RefreshTokenScalarFieldEnum",
  description: undefined,
});
