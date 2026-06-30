import * as TypeGraphQL from "type-graphql";

export enum UserRole {
  USER = "USER",
  BUSINESS = "BUSINESS",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
