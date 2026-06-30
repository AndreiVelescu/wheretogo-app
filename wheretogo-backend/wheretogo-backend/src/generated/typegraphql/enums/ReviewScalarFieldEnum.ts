import * as TypeGraphQL from "type-graphql";

export enum ReviewScalarFieldEnum {
  id = "id",
  userId = "userId",
  locationId = "locationId",
  rating = "rating",
  comment = "comment",
  likes = "likes",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(ReviewScalarFieldEnum, {
  name: "ReviewScalarFieldEnum",
  description: undefined,
});
