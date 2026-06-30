import * as TypeGraphQL from "type-graphql";

export enum DeviceTokenScalarFieldEnum {
  id = "id",
  userId = "userId",
  token = "token",
  platform = "platform",
  isActive = "isActive",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(DeviceTokenScalarFieldEnum, {
  name: "DeviceTokenScalarFieldEnum",
  description: undefined,
});
