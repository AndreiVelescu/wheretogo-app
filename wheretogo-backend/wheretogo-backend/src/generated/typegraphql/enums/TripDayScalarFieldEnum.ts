import * as TypeGraphQL from "type-graphql";

export enum TripDayScalarFieldEnum {
  id = "id",
  tripId = "tripId",
  date = "date",
  dayNumber = "dayNumber",
  notes = "notes",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(TripDayScalarFieldEnum, {
  name: "TripDayScalarFieldEnum",
  description: undefined,
});
