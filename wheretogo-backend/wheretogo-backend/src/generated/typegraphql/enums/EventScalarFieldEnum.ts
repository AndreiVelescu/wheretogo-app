import * as TypeGraphQL from "type-graphql";

export enum EventScalarFieldEnum {
  id = "id",
  locationId = "locationId",
  name = "name",
  description = "description",
  date = "date",
  notify = "notify",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(EventScalarFieldEnum, {
  name: "EventScalarFieldEnum",
  description: undefined,
});
