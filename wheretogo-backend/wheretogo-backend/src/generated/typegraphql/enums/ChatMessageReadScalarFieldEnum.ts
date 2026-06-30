import * as TypeGraphQL from "type-graphql";

export enum ChatMessageReadScalarFieldEnum {
  id = "id",
  userId = "userId",
  messageId = "messageId",
  readAt = "readAt"
}
TypeGraphQL.registerEnumType(ChatMessageReadScalarFieldEnum, {
  name: "ChatMessageReadScalarFieldEnum",
  description: undefined,
});
