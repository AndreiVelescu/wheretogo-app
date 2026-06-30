import * as TypeGraphQL from "type-graphql";

export enum PostMediaScalarFieldEnum {
  id = "id",
  postId = "postId",
  type = "type",
  url = "url",
  thumbnail = "thumbnail",
  order = "order",
  width = "width",
  height = "height",
  duration = "duration",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(PostMediaScalarFieldEnum, {
  name: "PostMediaScalarFieldEnum",
  description: undefined,
});
