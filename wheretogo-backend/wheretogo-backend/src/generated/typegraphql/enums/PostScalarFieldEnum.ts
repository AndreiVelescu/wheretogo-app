import * as TypeGraphQL from "type-graphql";

export enum PostScalarFieldEnum {
  id = "id",
  authorId = "authorId",
  type = "type",
  title = "title",
  description = "description",
  tags = "tags",
  likesCount = "likesCount",
  commentsCount = "commentsCount",
  savedCount = "savedCount",
  sharesCount = "sharesCount",
  viewsCount = "viewsCount",
  visibility = "visibility",
  locationId = "locationId",
  tripId = "tripId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  publishedAt = "publishedAt"
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});
