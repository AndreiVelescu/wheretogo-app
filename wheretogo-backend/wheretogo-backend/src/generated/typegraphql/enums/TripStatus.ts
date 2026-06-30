import * as TypeGraphQL from "type-graphql";

export enum TripStatus {
  DRAFT = "DRAFT",
  PLANNED = "PLANNED",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}
TypeGraphQL.registerEnumType(TripStatus, {
  name: "TripStatus",
  description: undefined,
});
