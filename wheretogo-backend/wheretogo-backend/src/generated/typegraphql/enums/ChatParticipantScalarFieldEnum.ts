import * as TypeGraphQL from "type-graphql";

export enum ChatParticipantScalarFieldEnum {
  id = "id",
  userId = "userId",
  roomId = "roomId",
  lastReadAt = "lastReadAt",
  joinedAt = "joinedAt",
  leftAt = "leftAt",
  isAdmin = "isAdmin",
  canWrite = "canWrite"
}
TypeGraphQL.registerEnumType(ChatParticipantScalarFieldEnum, {
  name: "ChatParticipantScalarFieldEnum",
  description: undefined,
});
