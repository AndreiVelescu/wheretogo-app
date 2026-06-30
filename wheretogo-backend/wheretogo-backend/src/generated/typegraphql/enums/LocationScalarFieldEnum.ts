import * as TypeGraphQL from "type-graphql";

export enum LocationScalarFieldEnum {
  id = "id",
  placeId = "placeId",
  name = "name",
  description = "description",
  type = "type",
  types = "types",
  priceRange = "priceRange",
  vibes = "vibes",
  address = "address",
  lat = "lat",
  lng = "lng",
  rating = "rating",
  userRatingsTotal = "userRatingsTotal",
  website = "website",
  phone = "phone",
  googleUrl = "googleUrl",
  openHours = "openHours",
  photos = "photos",
  menuPdf = "menuPdf",
  popularityScore = "popularityScore",
  estimatedCost = "estimatedCost",
  googleImported = "googleImported",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(LocationScalarFieldEnum, {
  name: "LocationScalarFieldEnum",
  description: undefined,
});
