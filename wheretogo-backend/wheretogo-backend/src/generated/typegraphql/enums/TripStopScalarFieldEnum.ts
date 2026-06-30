import * as TypeGraphQL from "type-graphql";

export enum TripStopScalarFieldEnum {
  id = "id",
  tripDayId = "tripDayId",
  locationId = "locationId",
  customName = "customName",
  address = "address",
  lat = "lat",
  lng = "lng",
  order = "order",
  arrivalTime = "arrivalTime",
  departureTime = "departureTime",
  transportMode = "transportMode",
  notes = "notes",
  estimatedCost = "estimatedCost",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(TripStopScalarFieldEnum, {
  name: "TripStopScalarFieldEnum",
  description: undefined,
});
