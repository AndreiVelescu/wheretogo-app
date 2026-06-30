import * as TypeGraphQL from "type-graphql";

export enum NotificationScalarFieldEnum {
  id = "id",
  userId = "userId",
  type = "type",
  title = "title",
  body = "body",
  data = "data",
  isRead = "isRead",
  locationId = "locationId",
  eventId = "eventId",
  tripId = "tripId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
  name: "NotificationScalarFieldEnum",
  description: undefined,
});
