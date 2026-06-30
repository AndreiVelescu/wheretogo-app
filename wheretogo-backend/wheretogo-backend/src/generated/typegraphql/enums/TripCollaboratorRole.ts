import * as TypeGraphQL from "type-graphql";

export enum TripCollaboratorRole {
  VIEWER = "VIEWER",
  EDITOR = "EDITOR",
  OWNER = "OWNER"
}
TypeGraphQL.registerEnumType(TripCollaboratorRole, {
  name: "TripCollaboratorRole",
  description: undefined,
});
