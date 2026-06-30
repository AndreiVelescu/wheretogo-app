import * as TypeGraphQL from "type-graphql";

export enum MessageType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  LOCATION = "LOCATION",
  FILE = "FILE",
  SYSTEM = "SYSTEM"
}
TypeGraphQL.registerEnumType(MessageType, {
  name: "MessageType",
  description: undefined,
});
