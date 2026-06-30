import * as TypeGraphQL from "type-graphql";

export enum TripScalarFieldEnum {
  id = "id",
  ownerId = "ownerId",
  title = "title",
  description = "description",
  status = "status",
  startDate = "startDate",
  endDate = "endDate",
  city = "city",
  country = "country",
  isPublic = "isPublic",
  totalBudget = "totalBudget",
  currency = "currency",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(TripScalarFieldEnum, {
  name: "TripScalarFieldEnum",
  description: undefined,
});
