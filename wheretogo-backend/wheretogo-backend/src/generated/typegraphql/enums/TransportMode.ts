import * as TypeGraphQL from "type-graphql";

export enum TransportMode {
  WALK = "WALK",
  CAR = "CAR",
  PUBLIC_TRANSPORT = "PUBLIC_TRANSPORT",
  BIKE = "BIKE",
  TAXI = "TAXI",
  OTHER = "OTHER"
}
TypeGraphQL.registerEnumType(TransportMode, {
  name: "TransportMode",
  description: undefined,
});
