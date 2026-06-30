import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  nickname = "nickname",
  email = "email",
  password = "password",
  role = "role",
  provider = "provider",
  avatar = "avatar",
  bio = "bio",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
