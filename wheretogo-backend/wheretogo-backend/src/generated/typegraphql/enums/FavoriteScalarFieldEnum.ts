import * as TypeGraphQL from "type-graphql";

export enum FavoriteScalarFieldEnum {
  id = "id",
  userId = "userId",
  locationId = "locationId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(FavoriteScalarFieldEnum, {
  name: "FavoriteScalarFieldEnum",
  description: undefined,
});
