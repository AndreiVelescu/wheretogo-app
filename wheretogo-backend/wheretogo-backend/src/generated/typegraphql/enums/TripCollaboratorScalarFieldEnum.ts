import * as TypeGraphQL from "type-graphql";

export enum TripCollaboratorScalarFieldEnum {
  id = "id",
  tripId = "tripId",
  userId = "userId",
  role = "role",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(TripCollaboratorScalarFieldEnum, {
  name: "TripCollaboratorScalarFieldEnum",
  description: undefined,
});
