import * as TypeGraphQL from "type-graphql";

export enum BookingScalarFieldEnum {
  id = "id",
  userId = "userId",
  locationId = "locationId",
  date = "date",
  time = "time",
  persons = "persons",
  status = "status",
  affiliateUrl = "affiliateUrl",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(BookingScalarFieldEnum, {
  name: "BookingScalarFieldEnum",
  description: undefined,
});
