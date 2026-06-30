import * as TypeGraphQL from "type-graphql";

export enum SavedPostScalarFieldEnum {
  id = "id",
  userId = "userId",
  postId = "postId",
  note = "note",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(SavedPostScalarFieldEnum, {
  name: "SavedPostScalarFieldEnum",
  description: undefined,
});
