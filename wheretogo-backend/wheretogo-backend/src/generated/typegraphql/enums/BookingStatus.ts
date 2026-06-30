import * as TypeGraphQL from "type-graphql";

export enum BookingStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED"
}
TypeGraphQL.registerEnumType(BookingStatus, {
  name: "BookingStatus",
  description: undefined,
});
