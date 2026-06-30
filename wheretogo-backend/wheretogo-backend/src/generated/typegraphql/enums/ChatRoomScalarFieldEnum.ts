import * as TypeGraphQL from "type-graphql";

export enum ChatRoomScalarFieldEnum {
  id = "id",
  type = "type",
  name = "name",
  tripId = "tripId",
  lastMessageAt = "lastMessageAt",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ChatRoomScalarFieldEnum, {
  name: "ChatRoomScalarFieldEnum",
  description: undefined,
});
