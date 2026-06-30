import * as TypeGraphQL from "type-graphql";

export enum ChatRoomType {
  TRIP = "TRIP",
  DIRECT = "DIRECT",
  GROUP = "GROUP"
}
TypeGraphQL.registerEnumType(ChatRoomType, {
  name: "ChatRoomType",
  description: undefined,
});
