import * as TypeGraphQL from "type-graphql";

export enum PostCollectionItemScalarFieldEnum {
  id = "id",
  collectionId = "collectionId",
  postId = "postId",
  order = "order",
  note = "note",
  addedAt = "addedAt"
}
TypeGraphQL.registerEnumType(PostCollectionItemScalarFieldEnum, {
  name: "PostCollectionItemScalarFieldEnum",
  description: undefined,
});
