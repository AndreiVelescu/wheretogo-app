import * as TypeGraphQL from "type-graphql";

export enum ChatMessageScalarFieldEnum {
  id = "id",
  content = "content",
  type = "type",
  senderId = "senderId",
  roomId = "roomId",
  replyToId = "replyToId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  editedAt = "editedAt",
  deletedAt = "deletedAt"
}
TypeGraphQL.registerEnumType(ChatMessageScalarFieldEnum, {
  name: "ChatMessageScalarFieldEnum",
  description: undefined,
});
